.PHONY: format ci-check images

format:
	npm run format

ci-check:
	npm run format:check

# Resize new photos and build gallery thumbnails. Run after adding images.
images:
	python scripts/optimize-images.py
