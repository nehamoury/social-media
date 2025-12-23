import React from 'react';

const VideoCard = ({ video, showChannel = true }) => {
  return (
    <div className="group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative rounded-lg overflow-hidden mb-3 bg-gray-200 aspect-video">
        <img
          src={video.thumbnail || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=280&fit=crop'}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {video.duration || '10:21'}
        </div>
      </div>

      {/* Video Info */}
      <div className="flex gap-3">
        {showChannel && (
          <div className="flex-shrink-0">
            <img
              src={video.channelAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop'}
              alt={video.channel}
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-gray-700">
            {video.title}
          </h3>
          {showChannel && (
            <p className="text-xs text-gray-600 mb-1">{video.channel}</p>
          )}
          <p className="text-xs text-gray-500">
            {video.views || '1.2M views'} • {video.uploadedAt || '2 days ago'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
