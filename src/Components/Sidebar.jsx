import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  TrendingUp,
  Youtube,
  History,
  Clock,
  ShoppingBag,
  Heart,
  List,
  Users,
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: TrendingUp, label: 'Trending', path: '/trending' },
    { icon: Youtube, label: 'Subscriptions', path: '/subscriptions' },
  ];

  const libraryItems = [
    { icon: History, label: 'History', path: '/history' },
    { icon: Clock, label: 'Watch Later', path: '/watch-later' },
    { icon: ShoppingBag, label: 'Purchases', path: '/purchases' },
    { icon: Heart, label: 'Liked Videos', path: '/liked' },
    { icon: List, label: 'Playlist', path: '/playlist' },
  ];

  const subscriptions = [
    { name: 'Dr Disrespect', count: 3, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop' },
    { name: 'ASMR', count: 6, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop' },
    { name: 'Rivvrs', count: 2, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop' },
    { name: 'The Verge', count: 11, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' },
    { name: 'Seeker', count: 7, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="white" />
              </svg>
            </div>
            <span className="text-xl font-bold">Oren</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Menu */}
        <div className="py-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.path}
                onClick={onClose}
                className="flex items-center gap-4 px-6 py-3 hover:bg-gray-100 transition-colors"
              >
                <Icon className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-900">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Library Section */}
        <div className="border-t py-3">
          <h3 className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Library
          </h3>
          {libraryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.path}
                onClick={onClose}
                className="flex items-center gap-4 px-6 py-3 hover:bg-gray-100 transition-colors"
              >
                <Icon className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-900">{item.label}</span>
                {item.label === 'History' && (
                  <span className="ml-auto text-xs text-gray-400">go</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Subscriptions Section */}
        <div className="border-t py-3">
          <h3 className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Subscriptions
          </h3>
          {subscriptions.map((sub, index) => (
            <Link
              key={index}
              to={`/channel/${sub.name.toLowerCase().replace(' ', '-')}`}
              onClick={onClose}
              className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100 transition-colors"
            >
              <img
                src={sub.avatar}
                alt={sub.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm text-gray-900 flex-1">{sub.name}</span>
              <span className="text-xs text-gray-400">{sub.count}</span>
            </Link>
          ))}
        </div>

        {/* Air Poor Badge */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div>
              <div className="text-xs font-semibold">Air Poor</div>
              <div className="text-xs">Thursday</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
