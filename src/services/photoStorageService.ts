import { DestinationPhoto } from '../types';

const STORAGE_KEY = 'apna_route_destination_photos';

// Initial pre-seeded database records for destination_photos
// Timestamps are chronologically staggered to demonstrate automatic newest-first sorting
const SEED_PHOTOS: DestinationPhoto[] = [
  {
    id: 'photo-manali-1',
    destination_id: 'manali',
    destination_name: 'Manali',
    user_id: 'usr-rohit-401',
    user_name: 'Rohit Sharma',
    user_avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    photo_url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    caption: 'Fresh snowfall near Solang Valley pass road. Snow clearing completed by morning.',
    created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago (newest)
  },
  {
    id: 'photo-manali-2',
    destination_id: 'manali',
    destination_name: 'Manali',
    user_id: 'usr-ananya-402',
    user_name: 'Ananya Verma',
    user_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    photo_url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80',
    caption: 'Hadimba temple in afternoon golden hour. Clear skies and quiet trails.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
  },
  {
    id: 'photo-manali-3',
    destination_id: 'manali',
    destination_name: 'Manali',
    user_id: 'usr-vikram-403',
    user_name: 'Vikram Negi',
    user_avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    photo_url: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Old Manali apple orchards beginning to blossom. Beautiful mountain backdrop.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 1.5 days ago (older)
  },
  {
    id: 'photo-varanasi-1',
    destination_id: 'varanasi',
    destination_name: 'Varanasi',
    user_id: 'usr-priya-404',
    user_name: 'Priya Mukherjee',
    user_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    photo_url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80',
    caption: 'Subah-e-Banaras morning boat ride along Assi Ghat. Gentle morning breeze.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
  },
  {
    id: 'photo-varanasi-2',
    destination_id: 'varanasi',
    destination_name: 'Varanasi',
    user_id: 'usr-arun-405',
    user_name: 'Arun Nair',
    user_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    photo_url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80',
    caption: 'Evening Ganga Aarti at Dashashwamedh Ghat. The energy here is spiritual.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
  },
  {
    id: 'photo-ziro-1',
    destination_id: 'ziro-valley',
    destination_name: 'Ziro Valley',
    user_id: 'usr-kago-406',
    user_name: 'Kago Bamin',
    user_avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
    photo_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    caption: 'Traditional Apatani fish-paddy agro-ecosystem under misty monsoon clouds.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
  },
  {
    id: 'photo-munnar-1',
    destination_id: 'munnar',
    destination_name: 'Munnar',
    user_id: 'usr-deepak-407',
    user_name: 'Deepak Pillai',
    user_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    photo_url: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
    caption: 'Rolling green tea gardens of Kolukkumalai in early dawn mist.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(), // 18 hours ago
  },
  {
    id: 'photo-hampi-1',
    destination_id: 'hampi',
    destination_name: 'Hampi',
    user_id: 'usr-shreya-408',
    user_name: 'Shreya Hegde',
    user_avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    photo_url: 'https://images.unsplash.com/photo-1600100397608-f010f444f434?auto=format&fit=crop&w=1000&q=80',
    caption: 'Sunset panorama over boulder ruins from Matanga Hill summit.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(), // 30 hours ago
  },
];

// Helper: load all photos from storage or initialize with seed data
function getAllStoredPhotos(): DestinationPhoto[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_PHOTOS));
      return SEED_PHOTOS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_PHOTOS));
      return SEED_PHOTOS;
    }
    return parsed;
  } catch (err) {
    console.error('Failed to load photos from storage:', err);
    return SEED_PHOTOS;
  }
}

// Helper: save all photos to storage
function saveStoredPhotos(photos: DestinationPhoto[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
  } catch (err) {
    console.error('Failed to save photos to storage:', err);
  }
}

/**
 * GET /api/destinations/:destinationId/photos
 * Returns all photos matching destinationId, automatically sorted:
 * ORDER BY created_at DESC (Newest uploaded photo first)
 */
export async function fetchDestinationPhotos(destinationId: string): Promise<DestinationPhoto[]> {
  // Simulated small network latency
  await new Promise((res) => setTimeout(res, 80));

  const allPhotos = getAllStoredPhotos();
  
  // Destination filtering: show only photos for this destination
  const filtered = allPhotos.filter(
    (photo) => photo.destination_id.toLowerCase() === destinationId.toLowerCase()
  );

  // Automatic sorting: newest first (created_at DESC)
  const sorted = filtered.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return sorted;
}

export interface UploadPhotoParams {
  destinationId: string;
  destinationName: string;
  file: File;
  caption?: string;
  userId: string;
  userName: string;
  userAvatar?: string;
}

/**
 * POST /api/destinations/:destinationId/photos
 * Validates image type and size, auto-generates server created_at timestamp,
 * saves to destination_photos collection, and returns the created record.
 */
export async function uploadDestinationPhoto(params: UploadPhotoParams): Promise<DestinationPhoto> {
  const { destinationId, destinationName, file, caption, userId, userName, userAvatar } = params;

  // 1. Validate destination
  if (!destinationId || !destinationId.trim()) {
    throw new Error('Invalid destination ID.');
  }

  // 2. Validate authentication / user
  if (!userId || !userId.trim()) {
    throw new Error('Unauthorized. You must be signed in to upload a photo.');
  }

  // 3. Security: Validate file exists
  if (!file) {
    throw new Error('No photo file selected.');
  }

  // 4. Security: Validate file type (only common image formats: JPG, JPEG, PNG, WEBP)
  const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  const hasValidMime = allowedMimeTypes.includes(file.type.toLowerCase());
  const fileNameLower = file.name.toLowerCase();
  const hasValidExtension = allowedExtensions.some((ext) => fileNameLower.endsWith(ext));

  if (!hasValidMime && !hasValidExtension) {
    throw new Error('Invalid file type. Only JPG, JPEG, PNG, and WEBP image files are permitted.');
  }

  // 5. Security: Validate file size (Maximum 5MB)
  const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
  if (file.size > MAX_FILE_SIZE_BYTES) {
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    throw new Error(`File size (${sizeInMb}MB) exceeds the 5MB limit. Please upload a smaller photo.`);
  }

  // 6. Automatic server/database timestamp generation (User CANNOT manually enter this)
  const created_at = new Date().toISOString();

  // 7. Read file into data URL for persistent rendering
  const photoUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to process image data.'));
      }
    };
    reader.onerror = () => reject(new Error('Error reading image file.'));
    reader.readAsDataURL(file);
  });

  // 8. Create new record
  const newRecord: DestinationPhoto = {
    id: `photo-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    destination_id: destinationId,
    destination_name: destinationName,
    user_id: userId,
    user_name: userName || 'Tourist',
    user_avatar: userAvatar,
    photo_url: photoUrl,
    caption: caption?.trim() || undefined,
    created_at: created_at, // System generated timestamp
  };

  // 9. Persist to destination_photos database
  const allPhotos = getAllStoredPhotos();
  allPhotos.unshift(newRecord); // Insert at front
  saveStoredPhotos(allPhotos);

  // Simulated server processing delay
  await new Promise((res) => setTimeout(res, 200));

  return newRecord;
}

/**
 * Helper to format created_at date and time nicely
 */
export function formatPhotoDateTime(isoDateString: string): { formattedDate: string; timeAgo: string } {
  try {
    const date = new Date(isoDateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

    // Formatted date string (e.g., "Sep 4, 2026 • 04:15 PM")
    const dateStr = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    const timeStr = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    const formattedDate = `${dateStr} • ${timeStr}`;

    // Relative time calculation
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    let timeAgo = 'Just now';
    if (diffDays > 0) {
      timeAgo = diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
    } else if (diffHours > 0) {
      timeAgo = diffHours === 1 ? '1 hr ago' : `${diffHours} hrs ago`;
    } else if (diffMins > 0) {
      timeAgo = diffMins === 1 ? '1 min ago' : `${diffMins} mins ago`;
    }

    return { formattedDate, timeAgo };
  } catch {
    return { formattedDate: isoDateString, timeAgo: '' };
  }
}
