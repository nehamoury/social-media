import React, { useState } from 'react';
import { Check, Bell, Search, ChevronDown } from 'lucide-react';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Sidebar from '../Components/Sidebar';
import VideoCard from '../Components/VideoCard';

export default function Channel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data matching the styling of other pages
  const channelInfo = {
    name: 'Tech Channel',
    subscribers: '1.5M',
    videoCount: 256,
    description: 'Welcome to Tech Channel! We create high-quality content about web development, JavaScript, React, and more.',
    banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2669&auto=format&fit=crop'
  };

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop",
      duration: "12:45",
      title: "Building a React App from Scratch",
      channelName: "Tech Channel",
      views: "125K views",
      uploadTime: "2 days ago"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop",
      duration: "8:30",
      title: "Advanced CSS Tips & Tricks",
      channelName: "Tech Channel",
      views: "89K views",
      uploadTime: "5 days ago"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1537498425277-228ee1a4711b?w=500&auto=format&fit=crop",
      duration: "15:20",
      title: "The Future of Web Development",
      channelName: "Tech Channel",
      views: "200K views",
      uploadTime: "1 week ago"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop",
      duration: "10:15",
      title: "Learn Python in 10 Minutes",
      channelName: "Tech Channel",
      views: "450K views",
      uploadTime: "2 weeks ago"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop",
      duration: "22:00",
      title: "Full Stack Development Guide",
      channelName: "Tech Channel",
      views: "1.2M views",
      uploadTime: "1 month ago"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop",
      duration: "5:50",
      title: "VS Code Extensions You Need",
      channelName: "Tech Channel",
      views: "300K views",
      uploadTime: "1 month ago"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <SubHeader />
      </div>

      <main>
        {/* Channel Banner */}
        <div className="h-48 md:h-64 lg:h-80 w-full relative">
          <img
            src={channelInfo.banner}
            alt="Channel Banner"
            className="w-full h-full object-cover"
          />
          {/* Social Links on Banner if needed */}
        </div>

        {/* Channel Info Section */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md overflow-hidden flex-shrink-0 -mt-4 md:-mt-8 relative z-10">
                <img
                  src={channelInfo.avatar}
                  alt={channelInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                    {channelInfo.name}
                    <span className="bg-gray-200 p-1 rounded-full">
                      <Check className="w-3 h-3 text-gray-600" />
                    </span>
                  </h1>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-gray-600 text-sm mb-4">
                  <span>{channelInfo.subscribers} subscribers</span>
                  <span>•</span>
                  <span>{channelInfo.videoCount} videos</span>
                </div>

                <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                  {channelInfo.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-4 mt-4 md:mt-2">
                <button className="bg-black text-white px-8 py-2.5 rounded-full font-medium hover:bg-gray-900 transition-colors">
                  Subscribe
                </button>
                <button className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                  <Bell className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-8 overflow-x-auto">
              {['HOME', 'VIDEOS', 'PLAYLISTS', 'COMMUNITY', 'CHANNELS', 'ABOUT'].map((tab, index) => (
                <button
                  key={index}
                  className={`py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${index === 0
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {tab}
                </button>
              ))}
              <button className="py-4 text-gray-500 hover:text-gray-700">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Channel Content */}
        <div className="bg-white min-h-[500px]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Uploads</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={{
                    ...video,
                    channel: video.channelName,
                    uploadedAt: video.uploadTime,
                    channelAvatar: channelInfo.avatar
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
