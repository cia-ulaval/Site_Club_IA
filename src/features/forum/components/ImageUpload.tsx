import { useState, useRef } from "react";
import { X, Image as ImageIcon, Loader2 } from "lucide-react";
import { supabase } from "../../../lib/supabase";

interface ImageUploadProps {
  onImageUploaded: (url: string) => void;
  onError?: (error: string) => void;
  maxSize?: number; // in MB
  accept?: string;
  className?: string;
}

export function ImageUpload({
  onImageUploaded,
  onError,
  maxSize = 5,
  accept = "image/*",
  className = "",
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadImage = async (file: File) => {
    try {
      setIsUploading(true);

      // Validate file size
      if (file.size > maxSize * 1024 * 1024) {
        throw new Error(
          `Le fichier est trop volumineux. Taille maximale: ${maxSize}MB`
        );
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        throw new Error("Seuls les fichiers image sont autorisés");
      }

      // Generate unique filename
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;
      const filePath = `forum-images/${fileName}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from("forum-uploads")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw error;

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("forum-uploads").getPublicUrl(data.path);

      onImageUploaded(publicUrl);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erreur lors de l'upload";
      onError?.(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelect = (files: FileList | null) => {
    if (files && files[0]) {
      uploadImage(files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadImage(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={(e) => handleFileSelect(e.target.files)}
        className="hidden"
      />

      {/* Upload button/drop zone */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${
            dragActive
              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-gray-600 hover:border-red-400 hover:bg-gray-50 dark:hover:bg-gray-800"
          }
          ${isUploading ? "pointer-events-none opacity-50" : ""}
        `}
      >
        {isUploading ? (
          <div className="flex flex-col items-center">
            <Loader2 className="w-8 h-8 text-red-600 animate-spin mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Upload en cours...
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span className="font-medium text-red-600 dark:text-red-400">
                Cliquez pour sélectionner
              </span>{" "}
              ou glissez-déposez une image
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              PNG, JPG, GIF jusqu'à {maxSize}MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Enhanced Image Upload with preview
interface ImageUploadWithPreviewProps extends ImageUploadProps {
  value?: string;
  onRemove?: () => void;
  showPreview?: boolean;
}

export function ImageUploadWithPreview({
  value,
  onRemove,
  showPreview = true,
  ...props
}: ImageUploadWithPreviewProps) {
  if (value && showPreview) {
    return (
      <div className="relative">
        <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
          <img
            src={value}
            alt="Uploaded image"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="flex space-x-2">
              <button
                onClick={() => window.open(value, "_blank")}
                className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
              >
                <ImageIcon className="w-4 h-4 text-gray-700" />
              </button>
              {onRemove && (
                <button
                  onClick={onRemove}
                  className="p-2 bg-red-600 bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Replace image option */}
        <div className="mt-2">
          <ImageUpload {...props} />
        </div>
      </div>
    );
  }

  return <ImageUpload {...props} />;
}

// Inline image upload for text editors
interface InlineImageUploadProps {
  onImageInserted: (markdown: string) => void;
  onError?: (error: string) => void;
}

export function InlineImageUpload({
  onImageInserted,
  onError,
}: InlineImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (file: File) => {
    try {
      setIsUploading(true);

      // Validate file
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("Le fichier est trop volumineux. Taille maximale: 5MB");
      }

      if (!file.type.startsWith("image/")) {
        throw new Error("Seuls les fichiers image sont autorisés");
      }

      // Upload to Supabase
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;
      const filePath = `forum-images/${fileName}`;

      const { data, error } = await supabase.storage
        .from("forum-uploads")
        .upload(filePath, file);

      if (error) throw error;

      const {
        data: { publicUrl },
      } = supabase.storage.from("forum-uploads").getPublicUrl(data.path);

      // Generate markdown
      const altText = file.name.replace(/\.[^/.]+$/, "");
      const markdown = `![${altText}](${publicUrl})`;

      onImageInserted(markdown);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erreur lors de l'upload";
      onError?.(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            handleImageUpload(e.target.files[0]);
          }
        }}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-sm rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        title="Insérer une image"
      >
        {isUploading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <ImageIcon className="w-4 h-4" />
        )}
        <span className="ml-1 hidden sm:inline">Image</span>
      </button>
    </>
  );
}
