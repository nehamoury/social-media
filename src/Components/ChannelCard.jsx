import React from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channel }) => {
    return (
        <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group">
            <Link to={`/channel/${channel.id}`} className="flex flex-col items-center">
                {/* Banner Section */}
                <div className="w-full h-24 bg-gray-200 relative">
                    <img
                        src={channel.banner || "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&h=150&fit=crop"}
                        alt={`${channel.name} banner`}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Avatar & Info Section */}
                <div className="flex flex-col items-center -mt-10 px-4 pb-6 w-full">
                    <div className="w-20 h-20 rounded-full border-4 border-white shadow-sm overflow-hidden mb-3 relative z-10">
                        <img
                            src={channel.avatar}
                            alt={channel.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>

                    <div className="text-center w-full">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            <h3 className="text-base font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-1">
                                {channel.name}
                            </h3>
                            {/* Blue Verified Checkmark */}
                            <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>

                        <div className="text-xs text-gray-500 font-medium space-y-1">
                            <p>{channel.subscribers} Subscribers • {channel.videos || '0'} Videos</p>
                            <p>{channel.views || '0'} views</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ChannelCard;
