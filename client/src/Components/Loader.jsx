import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
        <p className="text-gray-600 font-semibold">Loading...</p>
      </div>
    </div>
  );
}
