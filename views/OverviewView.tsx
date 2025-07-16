import React from 'react';
import { ChevronRight, AlertCircle, MapPin } from 'lucide-react';

export default function OverviewView({ currentDate, setCurrentDate, dates, itineraryData, totalBudget }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Overview</h2>
      
      <div className="space-y-4">
        {dates.map((date, index) => {
          const dayData = itineraryData[date];
          const isActive = date === currentDate;
          
          return (
            <div
              key={date}
              onClick={() => setCurrentDate(date)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                isActive 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-25'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      isActive ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-gray-800">{dayData.title}</h3>
                        {dayData.city && (
                          <div className="flex items-center gap-1">
                            <MapPin size={12} className="text-indigo-600" />
                            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                              {dayData.city}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {new Date(date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                      {dayData.weatherAdvisory && (
                        <div className="flex items-start gap-1 mt-1">
                          <AlertCircle size={12} className="text-orange-500 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-orange-600 leading-tight">{dayData.weatherAdvisory}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{dayData.activities.length} activities</span>
                    <span>•</span>
                    <span>¥{dayData.dayTotal.yen.toLocaleString()}</span>
                    <span>•</span>
                    <span>${dayData.dayTotal.usd.toFixed(2)}</span>
                  </div>
                </div>
                
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
        <h3 className="font-bold text-lg mb-3 text-green-800">Trip Totals</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">¥{totalBudget.yen.toLocaleString()}</div>
            <div className="text-sm text-green-500">Total Yen</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">${totalBudget.usd.toFixed(2)}</div>
            <div className="text-sm text-green-500">Total USD</div>
          </div>
        </div>
      </div>
    </div>
  );
}