import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-50 via-white to-red-50 shadow-sm border-b border-gray-200 relative overflow-hidden">
      {/* Mount Fuji silhouette background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 400 100" className="w-full h-full">
          <path d="M0,80 Q100,20 200,50 Q300,20 400,80 L400,100 L0,100 Z" fill="currentColor" className="text-indigo-600"/>
        </svg>
      </div>
      
      {/* Cherry blossom decorative elements */}
      <div className="absolute top-2 left-4 opacity-20">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12,2C12.5,2 13,2.5 13,3V4.5C13,5 12.5,5.5 12,5.5C11.5,5.5 11,5 11,4.5V3C11,2.5 11.5,2 12,2M12,18.5C12.5,18.5 13,19 13,19.5V21C13,21.5 12.5,22 12,22C11.5,22 11,21.5 11,21V19.5C11,19 11.5,18.5 12,18.5M20,13C20.5,13 21,12.5 21,12C21,11.5 20.5,11 20,11H18.5C18,11 17.5,11.5 17.5,12C17.5,12.5 18,13 18.5,13H20M5.5,13C6,13 6.5,12.5 6.5,12C6.5,11.5 6,11 5.5,11H4C3.5,11 3,11.5 3,12C3,12.5 3.5,13 4,13H5.5M18.5,5.5C18.8,5.8 18.8,6.2 18.5,6.5L17.4,7.6C17.1,7.9 16.7,7.9 16.4,7.6C16.1,7.3 16.1,6.9 16.4,6.6L17.5,5.5C17.8,5.2 18.2,5.2 18.5,5.5M7.6,16.4C7.9,16.7 7.9,17.1 7.6,17.4L6.5,18.5C6.2,18.8 5.8,18.8 5.5,18.5C5.2,18.2 5.2,17.8 5.5,17.5L6.6,16.4C6.9,16.1 7.3,16.1 7.6,16.4Z" fill="currentColor" className="text-red-400"/>
        </svg>
      </div>
      
      {/* Traditional wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 opacity-30"></div>
      
      <div className="relative p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">🇯🇵 Japan Adventure</h1>
        <p className="text-sm text-gray-600">July 14-24, 2025</p>
      </div>
    </header>
  );
}