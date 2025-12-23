import React, { useState } from 'react';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Sidebar from '../Components/Sidebar';
import ChannelCard from '../Components/ChannelCard';
import { Link } from 'react-router-dom';

import Footer from '../Components/Footer';

const Channels = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const popularChannels = [
        { id: 1, name: 'Newfox Media', subscribers: '13M', videos: '72', views: '374M', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&h=150&fit=crop' },
        { id: 2, name: 'Adaptable', subscribers: '6M', videos: '106', views: '218M', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&h=150&fit=crop' },
        { id: 3, name: 'Immense', subscribers: '28K', videos: '32', views: '3M', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?w=500&h=150&fit=crop' },
        { id: 4, name: 'Kittens', subscribers: '8M', videos: '340', views: '637M', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=150&fit=crop' },
        { id: 5, name: 'Shoe', subscribers: '2M', videos: '62', views: '4M', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=150&fit=crop' },
        { id: 6, name: 'Pink', subscribers: '49K', videos: '13', views: '890K', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=500&h=150&fit=crop' },
        { id: 7, name: 'Teeny-tiny', subscribers: '98K', videos: '45', views: '6M', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=150&fit=crop' },
        { id: 8, name: 'Intelligent', subscribers: '74K', videos: '49', views: '3M', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=150&fit=crop' },
    ];

    const trendingChannels = [
        { id: 9, name: 'Woozy', subscribers: '1.8M', videos: '90', views: '12M', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=500&h=150&fit=crop' },
        { id: 10, name: 'Laugh', subscribers: '5.2M', videos: '230', views: '89M', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&h=150&fit=crop' },
        { id: 11, name: 'Breakable', subscribers: '3.6M', videos: '120', views: '45M', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=150&fit=crop' },
        { id: 12, name: 'Morning', subscribers: '2.9M', videos: '88', views: '34M', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=500&h=150&fit=crop' },
        { id: 13, name: 'Fire', subscribers: '7.1M', videos: '450', views: '320M', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=150&fit=crop' },
        { id: 14, name: 'Swanky', subscribers: '4.5M', videos: '160', views: '67M', avatar: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=500&h=150&fit=crop' },
        { id: 15, name: 'Miscreant', subscribers: '1.1M', videos: '40', views: '8M', avatar: 'https://images.unsplash.com/photo-1525134479668-1bee49739504?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=150&fit=crop' },
        { id: 16, name: 'Woebegone', subscribers: '800K', videos: '25', views: '2M', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&h=150&fit=crop' },
    ];

    const recentChannels = [
        { id: 17, name: 'Develop', subscribers: '150K', videos: '15', views: '500K', avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=150&fit=crop' },
        { id: 18, name: 'Picture', subscribers: '320K', videos: '45', views: '1.2M', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1502014822147-1aed80613797?w=500&h=150&fit=crop' },
        { id: 19, name: 'Weather', subscribers: '45K', videos: '8', views: '120K', avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488058?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=150&fit=crop' },
        { id: 20, name: 'Word', subscribers: '980K', videos: '110', views: '15M', avatar: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=150&fit=crop' },
        { id: 21, name: 'Maximum', subscribers: '2.1M', videos: '85', views: '22M', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=150&fit=crop' },
        { id: 22, name: 'Media Laws', subscribers: '670K', videos: '30', views: '5M', avatar: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&h=150&fit=crop' },
        { id: 23, name: 'Light', subscribers: '1.4M', videos: '95', views: '18M', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=150&fit=crop' },
        { id: 24, name: 'New Trailers', subscribers: '5.6M', videos: '420', views: '210M', avatar: 'https://images.unsplash.com/photo-1534751516054-127db46554b5?w=100&h=100&fit=crop', banner: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=150&fit=crop' },
    ];

    const ChannelSection = ({ title, channels }) => (
        <div className="mb-12 max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6 px-1">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                <Link to="#" className="text-sm font-semibold text-gray-500 hover:text-purple-600 transition-colors">
                    View more
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {channels.map((channel) => (
                    <ChannelCard key={channel.id} channel={channel} />
                ))}
            </div>
            <div className="border-b border-gray-200 mt-12 mx-1"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <SubHeader />
            </div>

            <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 flex-grow w-full">
                <ChannelSection title="Most Popular" channels={popularChannels} />
                <ChannelSection title="Trending" channels={trendingChannels} />
                <ChannelSection title="Most Recent" channels={recentChannels} />
            </div>
            <Footer />
        </div>
    );
};

export default Channels;
