import React from 'react';
import Navbar from '../components/Navbar';

export default function Profile() {
  const userProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    subscribers: '100K',
    videos: 45,
    description: 'Content creator focused on technology and programming tutorials.',
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Navbar />
      
      <div className="max-w-2xl mx-auto w-full p-6 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
            <div>
              <h1 className="text-3xl font-bold">{userProfile.name}</h1>
              <p className="text-gray-600">{userProfile.email}</p>
              <p className="text-sm text-gray-500 mt-1">{userProfile.subscribers} subscribers</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Name</label>
                <input type="text" value={userProfile.name} className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <input type="email" value={userProfile.email} className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Bio</label>
                <textarea value={userProfile.description} rows="4" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"></textarea>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm">Total Videos</p>
              <p className="text-3xl font-bold text-red-600">{userProfile.videos}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm">Subscribers</p>
              <p className="text-3xl font-bold text-red-600">{userProfile.subscribers}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold">
              Save Changes
            </button>
            <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
