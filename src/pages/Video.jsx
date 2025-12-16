import React from 'react';
import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
import VideoPlayer from '../components/VideoPlayer';
import CommentBox from '../components/CommentBox';

export default function Video() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl">
            <VideoPlayer videoId="123" />

            <div className="mt-6 bg-white p-4 rounded-lg">
              <h1 className="text-2xl font-bold mb-2">Amazing Video Title</h1>
              <div className="flex justify-between items-center mb-4 pb-4 border-b">
                <div>
                  <p className="text-gray-600">100K views • 2 days ago</p>
                </div>
                <div className="flex gap-4">
                  <button className="px-4 py-2 hover:bg-gray-100 rounded">👍 Like</button>
                  <button className="px-4 py-2 hover:bg-gray-100 rounded">👎 Dislike</button>
                  <button className="px-4 py-2 hover:bg-gray-100 rounded">📤 Share</button>
                  <button className="px-4 py-2 hover:bg-gray-100 rounded">💾 Save</button>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Channel Name</h3>
                    <p className="text-sm text-gray-600">1.5M subscribers</p>
                    <p className="text-gray-700 mt-2">Video description goes here. This is where the creator explains what the video is about.</p>
                  </div>
                  <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                    Subscribe
                  </button>
                </div>
              </div>

              <CommentBox />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
