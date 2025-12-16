import React, { useState } from 'react';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Sidebar from '../Components/Sidebar';
import PopularChannels from '../Components/PopularChannels';

const Channels = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <SubHeader />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Channels</h1>
                <PopularChannels />
            </div>
        </div>
    );
};

export default Channels;
