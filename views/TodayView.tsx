import React from 'react';
import { AlertCircle } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';

export default function TodayView({ currentDate, itineraryData }) {
  const dayData = itineraryData[currentDate];
  
  if (!dayData) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">No data available for this date</p>
      </div>
    );
  }
  
  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-2xl font-bold text-gray-800">{dayData.title}</h2>
          {dayData.city && (
            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
              {dayData.city}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-1">{dayData.date}</p>
        <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg mb-2">
          <AlertCircle size={16} />
          <span>{dayData.weather}</span>
        </div>
        {dayData.weatherAdvisory && (
          <div className="flex items-start gap-2 text-sm text-orange-600 bg-orange-50 p-3 rounded-lg border border-orange-200">
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
            <span>{dayData.weatherAdvisory}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        {dayData.activities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200">
        <h3 className="font-bold text-lg mb-3 text-indigo-800">Daily Cost Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">¥{dayData.dayTotal.yen.toLocaleString()}</div>
            <div className="text-sm text-indigo-500">Japanese Yen</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">${dayData.dayTotal.usd.toFixed(2)}</div>
            <div className="text-sm text-indigo-500">US Dollars</div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-indigo-200">
          <h4 className="font-medium text-sm mb-2 text-indigo-700">Breakdown:</h4>
          <div className="space-y-1 text-sm">
            {Object.entries(dayData.costBreakdown).map(([category, cost]) => (
              <div key={category} className="flex justify-between text-indigo-600">
                <span className="capitalize">{category}:</span>
                <span>¥{cost.yen.toLocaleString()} (${cost.usd.toFixed(2)})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}