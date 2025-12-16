import React, { useState } from 'react';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Hero from '../Components/Hero';
import Benefits from '../Components/Benefits';
import FeaturedVideos from '../Components/FeaturedVideos';
import SubscriptionUpdates from '../Components/SubscriptionUpdates';
import NewVideos from '../Components/NewVideos';
import PopularVideos from '../Components/PopularVideos';
import PopularChannels from '../Components/PopularChannels';
import Sidebar from '../Components/Sidebar';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <SubHeader />
      </div>
      <Hero />
      <Benefits />
      <FeaturedVideos />
      <SubscriptionUpdates />
      <NewVideos />
      <PopularVideos />
      <PopularChannels />
    </div>
  );
};

export default Home;
