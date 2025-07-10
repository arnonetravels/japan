import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DayNavigation({ currentDate, setCurrentDate, dates }) {
  const currentIndex = dates.indexOf(currentDate);
  const dayNumber = currentIndex + 1;
  
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentDate(dates[currentIndex - 1]);
    }
  };
  
  const goToNext = () => {
    if (currentIndex < dates.length - 1) {
      setCurrentDate(dates[currentIndex + 1]);
    }
  };
  
  return (
    <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            currentIndex === 0 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-indigo-600 hover:bg-indigo-50'
          }`}
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        
        <div className="text-center">
          <div className="text-lg font-bold text-gray-800">
            {new Date(currentDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
          <div className="text-sm text-gray-600">Day {dayNumber} of {dates.length}</div>
        </div>
        
        <button
          onClick={goToNext}
          disabled={currentIndex === dates.length - 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            currentIndex === dates.length - 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-indigo-600 hover:bg-indigo-50'
          }`}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}