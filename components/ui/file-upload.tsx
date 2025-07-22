"use client";

import { useState, useRef, ChangeEvent } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Upload,
  File,
  X,
  CheckCircle,
  AlertCircle,
  Image as ImageIcon,
  FileText
} from "lucide-react";

interface FileUploadProps {
  id: string;
  accept?: string;
  maxSize?: number; // in MB
  onFileChange: (file: File | null) => void;
  value?: File | string | null;
  className?: string;
  showPreview?: boolean;
  previewClassName?: string;
  buttonText?: string;
}

export function FileUpload({
  id,
  accept = "*/*",
  maxSize = 5, // Default 5MB
  onFileChange,
  value,
  className = "",
  showPreview = true,
  previewClassName = "w-24 h-24",
  buttonText = "Select File",
}: FileUploadProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get file type icon based on file extension
  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();

    if (
      ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension || "")
    ) {
      return <ImageIcon className="h-8 w-8 text-blue-500" />;
    }else {
      return <FileText className="h-8 w-8 text-gray-500" />;
    }
  };

  // Generate preview URL for the file
  const generatePreview = (file: File) => {
    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return url;
    }
    setPreviewUrl(null);
    return null;
  };

  // Clean up preview URL to avoid memory leaks
  const cleanupPreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  // Handle file selection
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setUploadError(null);
    setUploadSuccess(false);
    setUploadProgress(0);

    if (!file) {
      onFileChange(null);
      cleanupPreview();
      return;
    }

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setUploadError(`File size exceeds ${maxSize}MB limit`);
      e.target.value = "";
      return;
    }

    // Generate preview if it's an image
    generatePreview(file);

    // Call the onChange handler
    onFileChange(file);

    // Simulate upload process
    simulateUpload();
  };

  // Simulate file upload process
  const simulateUpload = () => {
    setUploadProgress(0);

    // Simulate progress updates
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setUploadSuccess(true);
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };

  // Handle file removal
  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onFileChange(null);
    cleanupPreview();
    setUploadSuccess(false);
    setUploadError(null);
    setUploadProgress(0);
  };

  // Get file name from value
  const getFileName = () => {
    if (!value) return null;

    if (typeof value === "string") {
      // If value is a URL, extract the filename
      return value.split("/").pop() || "Uploaded file";
    } else {
      // If value is a File object
      return value.name;
    }
  };

  // Get preview URL
  const getPreviewUrl = () => {
    if (!value) return null;

    if (typeof value === "string") {
      // If value is already a URL
      return value;
    } else if (previewUrl) {
      // If we have a generated preview URL
      return previewUrl;
    } else if (value instanceof File && value.type.startsWith("image/")) {
      // Generate preview for File objects
      return URL.createObjectURL(value);
    }

    return null;
  };

  const fileName = getFileName();
  const filePreviewUrl = getPreviewUrl();
  const isImage =
    filePreviewUrl &&
    (typeof value === "string"
      ? /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(value)
      : value?.type.startsWith("image/"));

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-start space-x-4">
        {/* File preview or icon */}
        {showPreview && fileName && (
          <div
            className={`relative bg-gray-100 rounded-md overflow-hidden flex items-center justify-center ${previewClassName}`}
          >
            {isImage && filePreviewUrl ? (
              <img
                src={filePreviewUrl}
                alt="File preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                {fileName && getFileIcon(fileName)}
                <span className="text-xs text-gray-500 mt-1 truncate max-w-full px-2">
                  {fileName.length > 15
                    ? `${fileName.substring(0, 12)}...`
                    : fileName}
                </span>
              </div>
            )}

            {/* Remove button */}
            {value && (
              <button
                type="button"
                onClick={handleRemoveFile}
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
                aria-label="Remove file"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            )}
          </div>
        )}

        <div className="flex-1 space-y-2">
          {/* File input */}
          <div className="flex items-center space-x-2">
            <Input
              id={id}
              ref={fileInputRef}
              type="file"
              accept={accept}
              onChange={handleFileChange}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploadProgress > 0 && uploadProgress < 100}
              className="flex items-center space-x-2"
            >
              <Upload className="h-4 w-4" />
              <span>{buttonText}</span>
            </Button>

            {fileName && !showPreview && (
              <span className="text-sm text-gray-600 truncate max-w-[200px]">
                {fileName}
              </span>
            )}
          </div>

          {/* Upload progress */}
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="space-y-1">
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-xs text-gray-500">
                Processing... {uploadProgress}%
              </p>
            </div>
          )}

          {/* Success message */}
          {uploadSuccess && (
            <div className="flex items-center space-x-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span>File processed successfully</span>
            </div>
          )}

          {/* Error message */}
          {uploadError && (
            <div className="flex items-center space-x-2 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span>{uploadError}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
