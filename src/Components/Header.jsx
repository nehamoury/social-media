import React, { useState, useRef, useEffect } from 'react';
import { Search, MessageSquare, Bell, Upload, ChevronDown, User, CreditCard, Settings, LogOut, Moon, Globe, HelpCircle, MapPin, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onMenuClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white py-3 px-4 md:px-6 flex items-center justify-between">

      {/* Left: Logo & Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link to="/" className="flex items-center gap-1 cursor-pointer">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Oren
          </span>
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-2xl mx-8">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Videos"
            className="w-full bg-gray-100 text-gray-700 py-2.5 pl-5 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-gray-800">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
          <MessageSquare className="w-5 h-5" />
        </button>

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-1 cursor-pointer ml-1"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
              alt={user?.username || "User"}
              className="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {/* User Header */}
              <div className="px-4 py-3 border-b flex items-center justify-between">
                <span className="font-semibold text-gray-900 truncate pr-2">
                  {user?.username || user?.email || 'Guest User'}
                </span>
                <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded font-bold">PRO</span>
              </div>

              {/* Menu Links */}
              <div className="py-2 border-b">
                <Link to={`/channel/${user?.username || 'user'}`} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">My Channel</span>
                </Link>
                <Link to="/subscriptions" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors">
                  <CreditCard className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">Paid subscriptions</span>
                </Link>
                <Link to="/settings" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors">
                  <Settings className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">Settings</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors text-left"
                >
                  <LogOut className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">Sign out</span>
                </button>
              </div>

              {/* Settings Toggles */}
              <div className="py-2 border-b">
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Moon className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-medium">Dark Theme</span>
                  </div>
                  <div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer">
                    <div className="w-3 h-3 bg-white rounded-full absolute top-1 left-1"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-medium">Language</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-medium">Send feedback</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-medium">India</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 rotate-[-90deg]" />
                </div>
              </div>

              {/* Restricted Mode */}
              <div className="py-2">
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium pl-8">Restricted Mode</span>
                  </div>
                  <div className="w-10 h-5 bg-blue-500 rounded-full relative cursor-pointer">
                    <div className="w-3 h-3 bg-white rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        <Link to="/upload" className="hidden sm:flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-full font-medium text-sm transition-colors shadow-sm ml-2">
          <Upload className="w-4 h-4" />
          <span>Upload</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
