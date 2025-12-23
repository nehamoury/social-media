import React from 'react';
import VideoCard from './VideoCard';

const SubscriptionUpdates = () => {
    const videos = [
        {
            id: 1,
            title: 'Trailer Park Boys Season 12 - Official Trailer',
            channel: 'ScereBro',
            views: '987K views',
            uploadedAt: '1 day ago',
            duration: '4:01',
            thumbnail: 'https://images.unsplash.com/photo-1574267432644-f610f5b1e8c4?w=500&h=280&fit=crop',
            channelAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop',
        },
        {
            id: 2,
            title: 'A day in the life of a Google software engineer',
            channel: 'MathChief',
            views: '1.8M views',
            uploadedAt: '2 days ago',
            duration: '6:20',
            thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=280&fit=crop',
            channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
        },
        {
            id: 3,
            title: 'Avengers: Infinity War - Gym Workout',
            channel: 'RealLifeLore',
            views: '5.2M views',
            uploadedAt: '3 days ago',
            duration: '8:16',
            thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=280&fit=crop',
            channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop',
        },
        {
            id: 4,
            title: 'How the Universe Works - The Milky Way Galaxy - Space',
            channel: 'Loskes',
            views: '4.1M views',
            uploadedAt: '1 week ago',
            duration: '29:32',
            thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=280&fit=crop',
            channelAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop',
        },
    ];

    return (
        <div className="bg-gray-50 py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Updates from Subscriptions</h2>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium">
                        View all
                    </a>
                </div>

                <div className="overflow-x-auto pb-4 -mx-4 px-4">
                    <div className="flex gap-4 min-w-max">
                        {videos.map((video) => (
                            <div key={video.id} className="w-80 flex-shrink-0">
                                <VideoCard video={video} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionUpdates;
