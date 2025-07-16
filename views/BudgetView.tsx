import React from 'react';
import { DollarSign, Utensils, Train, Camera, Music, Zap } from 'lucide-react';

export default function BudgetView({ itineraryData, totalBudget, dates }) {
  // Calculate category totals
  const categoryTotals = {};
  const cityTotals = {};
  
  Object.values(itineraryData).forEach(day => {
    // Category totals
    Object.entries(day.costBreakdown).forEach(([category, cost]) => {
      if (!categoryTotals[category]) {
        categoryTotals[category] = { yen: 0, usd: 0 };
      }
      categoryTotals[category].yen += cost.yen;
      categoryTotals[category].usd += cost.usd;
    });
    
    // City totals
    if (day.city) {
      if (!cityTotals[day.city]) {
        cityTotals[day.city] = { yen: 0, usd: 0, days: 0 };
      }
      cityTotals[day.city].yen += day.dayTotal.yen;
      cityTotals[day.city].usd += day.dayTotal.usd;
      cityTotals[day.city].days += 1;
    }
  });
  
  const categoryColors = {
    food: 'bg-red-100 text-red-800 border-red-200',
    transport: 'bg-green-100 text-green-800 border-green-200',
    attractions: 'bg-blue-100 text-blue-800 border-blue-200',
    nightlife: 'bg-purple-100 text-purple-800 border-purple-200',
    festival: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };
  
  const categoryIcons = {
    food: Utensils,
    transport: Train,
    attractions: Camera,
    nightlife: Music,
    festival: Zap
  };
  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Budget Breakdown</h2>
      
      <div className="mb-6 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200">
        <h3 className="font-bold text-lg mb-3 text-indigo-800">Total Budget</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">¥{totalBudget.yen.toLocaleString()}</div>
            <div className="text-sm text-indigo-500">Japanese Yen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">${totalBudget.usd.toFixed(2)}</div>
            <div className="text-sm text-indigo-500">US Dollars</div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-4 text-gray-800">By Category</h3>
        <div className="space-y-3">
          {Object.entries(categoryTotals).map(([category, cost]) => {
            const Icon = categoryIcons[category] || DollarSign;
            const colorClass = categoryColors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
            const percentage = ((cost.usd / totalBudget.usd) * 100).toFixed(1);
            
            return (
              <div key={category} className={`p-4 rounded-lg border ${colorClass}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span className="font-medium capitalize">{category}</span>
                  </div>
                  <span className="text-sm font-medium">{percentage}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>¥{cost.yen.toLocaleString()}</span>
                  <span>${cost.usd.toFixed(2)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-4 text-gray-800">By City</h3>
        <div className="space-y-3">
          {Object.entries(cityTotals).map(([city, cost]) => {
            const percentage = ((cost.usd / totalBudget.usd) * 100).toFixed(1);
            const avgPerDay = cost.usd / cost.days;
            
            return (
              <div key={city} className="p-4 rounded-lg border bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-purple-800">{city}</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {cost.days} days
                    </span>
                  </div>
                  <span className="text-sm font-medium text-purple-800">{percentage}%</span>
                </div>
                <div className="flex justify-between text-sm text-purple-700">
                  <span>¥{cost.yen.toLocaleString()}</span>
                  <span>${cost.usd.toFixed(2)} (avg ${avgPerDay.toFixed(0)}/day)</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div>
        <h3 className="font-bold text-lg mb-4 text-gray-800">Daily Breakdown</h3>
        <div className="space-y-2">
          {dates.map((date, index) => {
            const dayData = itineraryData[date];
            return (
              <div key={date} className="p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-800">Day {index + 1}</span>
                      {dayData.city && (
                        <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                          {dayData.city}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-600">
                      {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-800">¥{dayData.dayTotal.yen.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">${dayData.dayTotal.usd.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}