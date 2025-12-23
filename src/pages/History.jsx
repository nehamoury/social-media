import React, { useState } from 'react';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Sidebar from '../Components/Sidebar';
import VideoCard from '../Components/VideoCard';

const History = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const watchedVideos = [
        {
            id: 1,
            title: 'Kingdom Come: Deliverance Funny Moments and Fails',
            channel: 'newfox media',
            views: '1.2M views',
            uploadedAt: 'Watched 2 hours ago',
            duration: '10:21',
            thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=280&fit=crop',
            channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop',
        },
        {
            id: 2,
            title: 'DR DISRESPECT - Before They Were Famous - Twitch Streamer',
            channel: 'Eros Now',
            views: '856K views',
            uploadedAt: 'Watched yesterday',
            duration: '13:49',
            thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=280&fit=crop',
            channelAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
        },
        {
            id: 3,
            title: 'Top Perfectly Timed Twitch Moments 2017 #7',
            channel: 'Animal Planet',
            views: '2.1M views',
            uploadedAt: 'Watched 2 days ago',
            duration: '2:54',
            thumbnail: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=500&h=280&fit=crop',
            channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
        },
        {
            id: 4,
            title: 'Top 5 Amazing Bridge Block ever in PUBG',
            channel: 'Maketzi',
            views: '3.4M views',
            uploadedAt: 'Watched 3 days ago',
            duration: '5:25',
            thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&h=280&fit=crop',
            channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <SubHeader />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Watch History</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                    {watchedVideos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;
