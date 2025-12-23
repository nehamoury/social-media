import React, { useState } from 'react';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Sidebar from '../Components/Sidebar';
import { Gamepad2, Music, Trophy, Newspaper, Film, Tv } from 'lucide-react';

const Categories = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const categories = [
        { name: 'Gaming', icon: Gamepad2, color: 'bg-purple-500', count: '1.2K videos' },
        { name: 'Music', icon: Music, color: 'bg-pink-500', count: '856 videos' },
        { name: 'Sports', icon: Trophy, color: 'bg-green-500', count: '2.1K videos' },
        { name: 'News', icon: Newspaper, color: 'bg-red-500', count: '3.4K videos' },
        { name: 'Movies', icon: Film, color: 'bg-blue-500', count: '987 videos' },
        { name: 'Entertainment', icon: Tv, color: 'bg-yellow-500', count: '1.8K videos' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <SubHeader />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Categories</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className={`${category.color} rounded-lg p-8 text-white cursor-pointer hover:opacity-90 transition-opacity`}
                            >
                                <Icon className="w-12 h-12 mb-4" />
                                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                                <p className="text-white/80">{category.count}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Categories;
