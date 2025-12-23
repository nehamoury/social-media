import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchResults = [
    { id: 1, title: 'React Tutorial for Beginners', channel: 'Tech Academy', views: '500K', uploadedAt: '1 week ago' },
    { id: 2, title: 'Advanced React Patterns', channel: 'Code Master', views: '200K', uploadedAt: '2 weeks ago' },
    { id: 3, title: 'React Hooks Explained', channel: 'Dev Tips', views: '150K', uploadedAt: '3 days ago' },
    { id: 4, title: 'React Performance Tips', channel: 'Performance Pro', views: '100K', uploadedAt: '1 day ago' },
    { id: 5, title: 'React Router Guide', channel: 'Web Dev', views: '80K', uploadedAt: '5 days ago' },
    { id: 6, title: 'React State Management', channel: 'Code School', views: '300K', uploadedAt: '2 days ago' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          <p className="text-gray-600 mb-6">Showing results for: <span className="font-semibold">"React"</span></p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {searchResults.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
