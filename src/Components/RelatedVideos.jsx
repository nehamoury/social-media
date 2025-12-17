import React from 'react';
import { Link } from 'react-router-dom';

const RelatedVideos = () => {
    const videos = [
        {
            id: 1,
            title: "Top 10 amazing technology in 2025",
            channel: "Tech Hunters",
            views: "2.1M",
            thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=250&h=140&fit=crop"
        },
        {
            id: 2,
            title: "How to become a web developer | Complete Roadmap",
            channel: "Dev Mastery",
            views: "800K",
            thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=250&h=140&fit=crop"
        },
        {
            id: 3,
            title: "Relaxing Jazz Music for Work and Study",
            channel: "Smooth Vibes",
            views: "5.4M",
            thumbnail: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=250&h=140&fit=crop"
        },
        {
            id: 4,
            title: "The Future of AI: What you need to know",
            channel: "Future Sight",
            views: "1.2M",
            thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=250&h=140&fit=crop"
        },
        {
            id: 5,
            title: "Delicious Pasta Recipe in 10 Minutes",
            channel: "Chef's Table",
            views: "320K",
            thumbnail: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=250&h=140&fit=crop"
        },
        {
            id: 6,
            title: "Hiking the Alps: A cinematic journey",
            channel: "Travel Log",
            views: "89K",
            thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=250&h=140&fit=crop"
        },
        {
            id: 7,
            title: "Exploring Hidden Caves",
            channel: "Nature Exp",
            views: "450K",
            thumbnail: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=250&h=140&fit=crop"
        },
        {
            id: 8,
            title: "Minimalist Desk Setup Tour",
            channel: "Tech Minimalist",
            views: "1.1M",
            thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=250&h=140&fit=crop"
        }
    ];

    return (
        <div className="w-full">
            <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">Related Videos</h3>
            <div className="flex flex-col gap-4">
                {videos.map((video) => (
                    <Link to={`/video/${video.id}`} key={video.id} className="flex gap-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
                        <div className="w-40 h-24 flex-shrink-0 relative overflow-hidden rounded-md">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded-sm">
                                12:45
                            </div>
                        </div>
                        <div className="flex-1 py-1">
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-purple-600 transition-colors">
                                {video.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 hover:text-gray-800 transition-colors">
                                {video.channel}
                            </p>
                            <p className="text-xs text-gray-500">
                                {video.views} views
                            </p>
                        </div>
                    </Link>
                ))}
                <button className="w-full py-2.5 mt-2 text-sm font-semibold text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors">
                    Show More
                </button>
            </div>
        </div>
    );
};

export default RelatedVideos;
