import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-180px)] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 max-w-4xl">
          Watch share and upload with friends
        </h1>

        <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium text-base hover:bg-gray-100 transition-colors shadow-lg">
          Create my account
        </button>
      </div>

      {/* Video Attribution */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <p className="text-white text-sm">
          Video of the Day by <span className="font-semibold">newlox media</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
