import React from 'react';

const PopularChannels = () => {
    const channels = [
        {
            id: 1,
            name: 'BattleState',
            subscribers: '2.5M',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
        },
        {
            id: 2,
            name: 'BlackPink',
            subscribers: '8.1M',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
        {
            id: 3,
            name: 'Vevo',
            subscribers: '15.3M',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        },
        {
            id: 4,
            name: 'Official PSY',
            subscribers: '4.2M',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        },
        {
            id: 5,
            name: 'People',
            subscribers: '3.8M',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
        {
            id: 6,
            name: 'SmTown',
            subscribers: '6.5M',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        },
    ];

    return (
        <div className="bg-white py-12 px-4 md:px-6 pb-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Channels</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {channels.map((channel) => (
                        <div
                            key={channel.id}
                            className="flex flex-col items-center text-center group cursor-pointer"
                        >
                            <div className="w-24 h-24 mb-3 rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-gray-400 transition-all">
                                <img
                                    src={channel.avatar}
                                    alt={channel.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-gray-700">
                                {channel.name}
                            </h3>
                            <p className="text-xs text-gray-500">{channel.subscribers} subscribers</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularChannels;
