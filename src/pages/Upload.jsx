import React, { useState } from 'react';
import { Upload as UploadIcon, Youtube, Link as LinkIcon, FileVideo } from 'lucide-react';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Sidebar from '../Components/Sidebar';

export default function Upload() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log("File dropped:", e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <SubHeader />
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px] items-center">

          {/* Left: File Upload */}
          <div
            className={`flex flex-col items-center justify-center p-12 h-full border-2 border-dashed rounded-3xl transition-colors ${dragActive ? 'border-black bg-gray-50' : 'border-gray-200'}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="w-20 h-20 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mb-6">
              <UploadIcon className="w-8 h-8 text-gray-400" />
            </div>

            <h2 className="text-gray-900 font-medium text-lg mb-2">Select video files to upload</h2>
            <p className="text-gray-500 text-sm mb-8">or drag & drop video files</p>

            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Upload Video
            </button>
            <input
              type="file"
              className="hidden"
              accept="video/*"
            />
          </div>

          {/* Right: YouTube Import */}
          <div className="flex flex-col items-center justify-center p-12 h-full">
            <div className="w-20 h-20 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mb-6">
              <Youtube className="w-8 h-8 text-gray-400" />
            </div>

            <h2 className="text-gray-900 font-medium text-lg mb-2">Import videos from YouTube</h2>
            <p className="text-gray-500 text-sm mb-8">Copy / Paste your video link here</p>

            <div className="flex w-full max-w-md gap-3">
              <input
                type="text"
                placeholder="Paste link here"
                className="flex-1 bg-gray-100 border-none rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium whitespace-nowrap transition-colors">
                Import Video
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
