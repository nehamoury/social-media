import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Social Media</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Welcome Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome</h2>
            <p className="text-gray-600 mb-6">
              Connect with friends and share moments that matter to you.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
              Get Started
            </button>
          </section>

          {/* Features Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span> Real-time updates
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span> Connect with friends
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span> Share your moments
              </li>
            </ul>
          </section>
        </div>

        {/* Posts Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200">
                <div className="bg-indigo-200 rounded-lg h-48 mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Post {post}</h3>
                <p className="text-gray-600">
                  This is an example post. Share your thoughts and connect with others!
                </p>
                <div className="mt-4 flex justify-between">
                  <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Like</button>
                  <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Comment</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            &copy; 2025 Social Media. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
