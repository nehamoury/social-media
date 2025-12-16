import React from 'react';

export default function VideoPlayer({ videoId }) {
  return (
    <div className="w-full bg-black rounded-lg overflow-hidden">
      <div className="aspect-video bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">▶️</div>
          <p className="text-white">Video Player - Video ID: {videoId}</p>
          <p className="text-gray-400 text-sm mt-2">Video content would play here</p>
        </div>
      </div>
    </div>
  );
}
