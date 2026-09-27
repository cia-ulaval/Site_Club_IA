"""Resize and re-encode site photos to WebP. Safe to re-run: it never upscales.

- public/portrait/*            -> fit 720x960 (cards + member modal)
- public/{GALLERY_DIRS}/*      -> fit 1920x1920 (lightbox, project heroes, social previews)
                                  plus a thumbnail in public/thumbs/<dir>/ fit 800x800 (gallery grid)

Non-WebP sources are converted and the original is deleted, so update any path that
pointed at a .jpg/.png. Requires Pillow: `pip install pillow`.
"""

import os
import sys

from PIL import Image, ImageOps

PUBLIC = os.path.join(os.path.dirname(__file__), '..', 'public')
GALLERY_DIRS = ['formation', 'competition', 'project', 'implication']
SOURCES = ('.webp', '.jpg', '.jpeg', '.png')


def save(image, box, out):
    copy = image.copy()
    copy.thumbnail(box, Image.LANCZOS)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    copy.save(out, 'WEBP', quality=80, method=6)
    return os.path.getsize(out)


def process(folder, box, thumb_folder=None):
    before = after = 0
    for name in sorted(os.listdir(folder)):
        if not name.lower().endswith(SOURCES):
            continue
        path = os.path.join(folder, name)
        before += os.path.getsize(path)
        image = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
        stem = os.path.splitext(name)[0]
        out = os.path.join(folder, stem + '.webp')
        after += save(image, box, out)
        if out != path:
            os.remove(path)
            print(f'converted {path} -> {out}: update references to it')
        if thumb_folder:
            save(image, (800, 800), os.path.join(thumb_folder, stem + '.webp'))
    print(f'{os.path.relpath(folder, PUBLIC):12} {before // 1024:>7} KB -> {after // 1024:>6} KB')


def main():
    process(os.path.join(PUBLIC, 'portrait'), (720, 960))
    for d in GALLERY_DIRS:
        process(os.path.join(PUBLIC, d), (1920, 1920), os.path.join(PUBLIC, 'thumbs', d))


if __name__ == '__main__':
    sys.exit(main())
