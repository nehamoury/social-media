import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, TrendingUp, Film, Play, Grid3x3, LayoutGrid, ChevronDown, ChevronRight } from 'lucide-react';

const SubHeader = () => {
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsPagesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        { label: 'Pages', icon: null, isDropdown: true },
        { label: 'Categories', path: '/categories' },
        { label: 'Channels', path: '/channels' },
        { label: 'Trending', path: '/trending' },
        { label: 'LIVE', path: '/live' },
        { label: 'Movies', path: '/movies' },
        { label: 'Go to :', icon: null, isLabel: true },
    ];

    const pageLinks = {
        left: [
            { label: 'Homepage', path: '/' },
            { label: 'Single Video Page', path: '/video/1' },
            { label: 'Single Video Simplified Page', path: '/video/1' },
            { label: 'Bingel Video Full Width Page', path: '/video/1' },
            { label: 'Single Video Playlist Page', path: '/playlist' },
            { label: 'Upload Video Page', path: '/upload' },
            { label: 'Upload Video Edit Page', path: '/upload' },
            { label: 'Browse Channels Page', path: '/channels' },
            { label: 'Searched Videos Page', path: '/search' },
        ],
        right: [
            { label: 'Single Channel', path: '/channel/newfox-media', hasArrow: true },
            { label: 'History Page', path: '/history' },
            { label: 'Browse Categories Page', path: '/categories' },
            { label: 'Updates From Subscription Page', path: '/subscriptions' },
            { label: 'Login Page', path: '/login' },
            { label: 'Signup Page', path: '/signup' },
            { label: 'User Account Page', path: '/profile' },
        ]
    };

    return (
        <div className="bg-white relative z-40">
            <div className="px-4 md:px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Navigation Items */}
                    <div className="flex items-center gap-6 overflow-visible">
                        {navItems.map((item, index) => {
                            if (item.isLabel) {
                                return (
                                    <span key={index} className="text-gray-900 font-medium text-sm whitespace-nowrap">
                                        {item.label}
                                    </span>
                                );
                            }

                            if (item.isDropdown) {
                                return (
                                    <div key={index} className="relative" ref={dropdownRef}>
                                        <button
                                            onClick={() => setIsPagesOpen(!isPagesOpen)}
                                            className={`text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${isPagesOpen ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
                                                }`}
                                        >
                                            {item.label}
                                        </button>

                                        {/* Dropdown Menu */}
                                        {isPagesOpen && (
                                            <div className="absolute top-full left-0 mt-4 w-[500px] bg-white shadow-xl rounded-b-lg border border-gray-100 p-6 grid grid-cols-2 gap-x-12 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                                {/* Left Column */}
                                                <div className="flex flex-col gap-4">
                                                    {pageLinks.left.map((link, i) => (
                                                        <Link
                                                            key={i}
                                                            to={link.path}
                                                            onClick={() => setIsPagesOpen(false)}
                                                            className="text-gray-600 hover:text-blue-600 text-sm transition-colors text-left"
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    ))}
                                                </div>

                                                {/* Right Column */}
                                                <div className="flex flex-col gap-4">
                                                    {pageLinks.right.map((link, i) => (
                                                        <Link
                                                            key={i}
                                                            to={link.path}
                                                            onClick={() => setIsPagesOpen(false)}
                                                            className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center justify-between group text-left"
                                                        >
                                                            <span>{link.label}</span>
                                                            {link.hasArrow && (
                                                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="text-gray-700 hover:text-gray-900 font-medium text-sm whitespace-nowrap transition-colors"
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* Icon Buttons */}
                        <div className="flex items-center gap-2 ml-2">
                            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                                <Clock className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                                <TrendingUp className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                                <Play className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                                <Film className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* View Toggle */}
                    <div className="hidden md:flex items-center gap-2 ml-4">
                        <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                            <Grid3x3 className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 bg-gray-900 hover:bg-black rounded transition-colors">
                            <LayoutGrid className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
