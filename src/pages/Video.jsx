
import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import VideoPlayer from '../Components/VideoPlayer';
import CommentBox from '../Components/CommentBox';
import RelatedVideos from '../Components/RelatedVideos';
import SubHeader from '../Components/SubHeader';
import Footer from '../Components/Footer';

export default function Video() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <Header onMenuClick={() => setSidebarOpen(true)} />
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">

        <SubHeader />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Side */}
          <div className="flex-1 overflow-hidden">
            <VideoPlayer videoId="123" />

            <div className="mt-5 pb-4 border-b border-gray-200">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Kingdom Come: Deliverance Funny Moments and Fails Compilation</h1>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="text-lg text-gray-500 font-medium mb-1">
                  60,723,169 views
                </div>

                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-4 text-gray-600 font-semibold mb-2">
                    <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" /></svg>
                      <span>388K</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" /></svg>
                      <span>28K</span>
                    </button>
                  </div>
                  {/* Progress Line */}
                  <div className="w-full md:w-[200px] h-1 bg-gray-200 relative">
                    <div className="absolute top-0 left-0 h-full w-[93%] bg-[#3ea6ff]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                {/* Left: Avatar & Name */}
                <div className="flex gap-4 min-w-max">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1505964528766-218b082079bb?w=100&h=100&fit=crop" alt="ScereBro" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-gray-900 text-base">ScereBro</h3>
                    <p className="text-xs text-gray-500">Published on Oct 22, 2017</p>
                  </div>
                </div>

                {/* Middle: Action Icons */}
                <div className="flex items-center gap-5 text-gray-600">
                  <button className="hover:text-purple-600 transition-colors p-1" title="Add to">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                  </button>
                  <button className="hover:text-red-500 transition-colors p-1" title="Favorite">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  </button>
                  <button className="hover:text-purple-600 transition-colors p-1" title="Watch Later">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </button>
                  <button className="hover:text-purple-600 transition-colors p-1" title="Share">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 0 00-5.656 0l-4 4a4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 0 005.656 0l4-4a4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  </button>
                  <button className="hover:text-purple-600 transition-colors p-1" title="Report">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8l-2-2h-3l-2 2h-4l-2-2H5a2 2 0 01-2 2z"></path></svg>
                  </button>
                </div>

                {/* Right: Buttons */}
                <div className="flex items-center gap-3">
                  <button className="px-6 py-2 bg-[#00e676] text-white text-sm font-bold rounded shadow-sm hover:bg-[#00c853] transition-colors">
                    Donate
                  </button>
                  <button className="px-5 py-2 bg-[#232323] text-white text-sm font-bold rounded shadow-sm hover:bg-black transition-colors border border-gray-700">
                    Subscribe 13M
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-bold text-gray-700 mb-2">Cast:</h4>
                {/* Can add cast list here if needed, keeping it empty/minimal as per usual */}
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-800 leading-relaxed">
                  Video description goes here. This is where the creator explains what the video is about. It can be quite long so we need to handle that.
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <button className="mt-2 text-sm font-semibold text-gray-500 hover:text-gray-800 uppercase">Show More</button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">456 Comments</h3>
              <CommentBox />
            </div>
          </div>

          {/* Right Sidebar - Related Videos */}
          <div className="hidden lg:block w-[350px] shrink-0">
            <RelatedVideos />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
