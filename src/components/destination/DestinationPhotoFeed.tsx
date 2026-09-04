import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Calendar, Clock, User, AlertCircle, CheckCircle2, Image as ImageIcon, Sparkles, X, Lock } from 'lucide-react';
import { Destination, DestinationPhoto } from '../../types';
import { fetchDestinationPhotos, uploadDestinationPhoto, formatPhotoDateTime } from '../../services/photoStorageService';

interface DestinationPhotoFeedProps {
  destination: Destination;
  isAuthenticated: boolean;
  onLoginPrompt: () => void;
  currentUser?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

export const DestinationPhotoFeed: React.FC<DestinationPhotoFeedProps> = ({
  destination,
  isAuthenticated,
  onLoginPrompt,
  currentUser = {
    id: 'usr-aditya-101',
    name: 'Aditya Patil',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
  },
}) => {
  const [photos, setPhotos] = useState<DestinationPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);

  // Upload Form State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Lightbox Preview Modal State
  const [previewPhoto, setPreviewPhoto] = useState<DestinationPhoto | null>(null);

  // 1. Fetch destination-specific photos on load or when destination changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchDestinationPhotos(destination.id)
      .then((data) => {
        if (isMounted) {
          // Guaranteed sorted newest -> oldest by backend query
          setPhotos(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching destination photos:', err);
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [destination.id]);

  // Handle file selection with client-side security checks
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    setUploadSuccess(null);

    const file = e.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      setFilePreview(null);
      return;
    }

    // Security: Validate file type (JPG, JPEG, PNG, WEBP only)
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const fileName = file.name.toLowerCase();
    const hasAllowedExt = ['.jpg', '.jpeg', '.png', '.webp'].some((ext) => fileName.endsWith(ext));

    if (!allowedTypes.includes(file.type.toLowerCase()) && !hasAllowedExt) {
      setUploadError('Invalid image format. Only JPG, JPEG, PNG, and WEBP files are allowed.');
      setSelectedFile(null);
      setFilePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Security: Validate file size (Max 5MB)
    const maxSizeBytes = 5 * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setUploadError(`File size (${sizeMb}MB) exceeds 5MB limit. Please select a smaller photo.`);
      setSelectedFile(null);
      setFilePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setFilePreview(objectUrl);
  };

  // Clean up object URL
  useEffect(() => {
    return () => {
      if (filePreview && filePreview.startsWith('blob:')) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  // Handle photo submission
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadError(null);
    setUploadSuccess(null);

    if (!isAuthenticated) {
      setUploadError('Please sign in to upload photos.');
      return;
    }

    if (!selectedFile) {
      setUploadError('Please select a photo to upload.');
      return;
    }

    try {
      setUploading(true);

      // Upload via service (server/database generates created_at automatically)
      const newPhoto = await uploadDestinationPhoto({
        destinationId: destination.id,
        destinationName: destination.name,
        file: selectedFile,
        caption: caption,
        userId: currentUser.id,
        userName: currentUser.name,
        userAvatar: currentUser.avatar,
      });

      // Real-time automatic update: place newly uploaded photo at top (descending order)
      setPhotos((prev) => [newPhoto, ...prev.filter((p) => p.id !== newPhoto.id)]);
      setUploadSuccess('Photo uploaded successfully! It is now live at the top of the feed.');
      
      // Reset form
      setSelectedFile(null);
      setFilePreview(null);
      setCaption('');
      if (fileInputRef.current) fileInputRef.current.value = '';

      // Close modal after brief confirmation
      setTimeout(() => {
        setIsUploadOpen(false);
        setUploadSuccess(null);
      }, 1400);
    } catch (err: any) {
      setUploadError(err.message || 'An error occurred while uploading. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-soft space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-1">
            <Camera className="w-3.5 h-3.5 text-brand-600" />
            <span>Community Live Visuals</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>Latest Photos — {destination.name}</span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Automatic date-wise photo feed captured by real travelers (newest uploaded photos first)
          </p>
        </div>

        {/* Upload Action Button */}
        {isAuthenticated ? (
          <button
            type="button"
            onClick={() => {
              setIsUploadOpen(!isUploadOpen);
              setUploadError(null);
              setUploadSuccess(null);
            }}
            className="self-start sm:self-auto px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-2 transition-all cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{isUploadOpen ? 'Cancel Upload' : 'Upload Photo'}</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onLoginPrompt}
            className="self-start sm:self-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            <span>Sign in to Upload</span>
          </button>
        )}
      </div>

      {/* Upload Photo Form / Drawer */}
      {isUploadOpen && isAuthenticated && (
        <div className="bg-slate-50 border border-brand-200 rounded-2xl p-5 sm:p-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Upload className="w-4 h-4 text-brand-600" />
                <span>Upload New Photo for {destination.name}</span>
              </h4>
              <p className="text-[11px] text-slate-500">
                Upload timestamp will be automatically generated and recorded by the server.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsUploadOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Feedback Alerts */}
          {uploadError && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{uploadError}</span>
            </div>
          )}

          {uploadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{uploadSuccess}</span>
            </div>
          )}

          <form onSubmit={handleUploadSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* File Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Image <span className="text-rose-500">*</span>
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                  onChange={handleFileChange}
                  disabled={uploading}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 cursor-pointer border border-slate-200 rounded-xl p-1 bg-white"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Accepted formats: JPG, JPEG, PNG, WEBP (Max 5MB)
                </span>
              </div>

              {/* Optional Caption */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Caption <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="e.g. Early morning view from the ridge..."
                  maxLength={160}
                  disabled={uploading}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Add brief context or road condition note
                </span>
              </div>
            </div>

            {/* Selected File Preview */}
            {filePreview && (
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                <img
                  src={filePreview}
                  alt="Upload Preview"
                  className="w-16 h-16 object-cover rounded-lg border border-slate-200"
                />
                <div className="flex-1 min-w-0 text-xs">
                  <p className="font-bold text-slate-800 truncate">{selectedFile?.name}</p>
                  <p className="text-[11px] text-slate-400">
                    {selectedFile && (selectedFile.size / 1024).toFixed(0)} KB • Ready for upload
                  </p>
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Validated Image
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFile(null);
                    setFilePreview(null);
                    if (fileInputRef.current) fileInputRef.current.value = '';
                  }}
                  className="text-xs text-slate-400 hover:text-rose-600 font-semibold px-2 py-1"
                >
                  Remove
                </button>
              </div>
            )}

            {/* Submit Action */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setIsUploadOpen(false)}
                disabled={uploading}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={uploading || !selectedFile}
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                {uploading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing & Storing...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload to {destination.name} Feed</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-4 space-y-3 animate-pulse">
              <div className="h-44 bg-slate-200 rounded-xl" />
              <div className="h-4 bg-slate-200 rounded w-3/4" />
              <div className="h-3 bg-slate-100 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : photos.length === 0 ? (
        /* Empty State */
        <div className="p-10 rounded-2xl border-2 border-dashed border-slate-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">
              No photos uploaded for this destination yet.
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Be the first traveler to share a photo from your journey to {destination.name}!
            </p>
          </div>
          {isAuthenticated ? (
            <button
              type="button"
              onClick={() => setIsUploadOpen(true)}
              className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload the First Photo</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onLoginPrompt}
              className="px-4 py-2 bg-brand-50 hover:bg-brand-100 text-brand-700 rounded-xl text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 border border-brand-200"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign in to Upload</span>
            </button>
          )}
        </div>
      ) : (
        /* Automatic Date-Wise Photo Cards Grid (Newest First) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((photo, index) => {
            const { formattedDate, timeAgo } = formatPhotoDateTime(photo.created_at);

            return (
              <div
                key={photo.id}
                className="group rounded-2xl border border-slate-200 bg-white shadow-soft hover:shadow-card transition-all flex flex-col overflow-hidden"
              >
                {/* Image Container with Badge */}
                <div
                  onClick={() => setPreviewPhoto(photo)}
                  className="relative h-48 bg-slate-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={photo.photo_url}
                    alt={photo.caption || `${photo.destination_name} photo`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Destination Tag */}
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-wide">
                    {photo.destination_name}
                  </span>

                  {/* Newest Tag for the top 1 photo */}
                  {index === 0 && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-1 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold rounded-lg flex items-center gap-1 shadow-xs animate-pulse">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Latest Photo</span>
                    </span>
                  )}
                </div>

                {/* Card Meta Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  {/* Caption */}
                  {photo.caption ? (
                    <p className="text-xs text-slate-800 leading-relaxed font-medium line-clamp-2">
                      {photo.caption}
                    </p>
                  ) : (
                    <p className="text-xs text-slate-400 italic">
                      No caption provided.
                    </p>
                  )}

                  {/* Date, Time & Uploader Info */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    {/* Uploader */}
                    <div className="flex items-center gap-2 min-w-0">
                      {photo.user_avatar ? (
                        <img
                          src={photo.user_avatar}
                          alt={photo.user_name}
                          className="w-5 h-5 rounded-full object-cover border border-slate-200 shrink-0"
                        />
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-[9px] font-bold shrink-0">
                          {photo.user_name.charAt(0)}
                        </div>
                      )}
                      <span className="font-semibold text-slate-700 truncate max-w-[90px] sm:max-w-[110px]">
                        {photo.user_name}
                      </span>
                    </div>

                    {/* Automatic Date & Time */}
                    <div className="flex items-center gap-1.5 shrink-0 text-slate-500 font-medium" title={`Uploaded: ${formattedDate}`}>
                      <Calendar className="w-3 h-3 text-brand-600" />
                      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600">
                        {timeAgo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal for enlarged photo viewing */}
      {previewPhoto && (
        <div
          onClick={() => setPreviewPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <button
              onClick={() => setPreviewPhoto(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <img
              src={previewPhoto.photo_url}
              alt={previewPhoto.caption || previewPhoto.destination_name}
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            <div className="p-5 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-700 uppercase">
                  {previewPhoto.destination_name}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {formatPhotoDateTime(previewPhoto.created_at).formattedDate}
                </span>
              </div>
              {previewPhoto.caption && (
                <p className="text-sm font-semibold text-slate-900">{previewPhoto.caption}</p>
              )}
              <p className="text-xs text-slate-500">
                Uploaded by <strong className="text-slate-800">{previewPhoto.user_name}</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
