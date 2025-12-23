import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">VidTube</div>
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Search videos..." 
              className="px-4 py-2 rounded-full bg-gray-100 w-96"
            />
            <button className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
              Search
            </button>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50">
              Login
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
