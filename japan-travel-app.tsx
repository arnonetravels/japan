import React, { useState } from 'react';
import itineraryData from './itinerary-data.json';
import Header from './components/Header';
import DayNavigation from './components/DayNavigation';
import BottomTabs from './components/BottomTabs';
import TodayView from './views/TodayView';
import OverviewView from './views/OverviewView';
import BudgetView from './views/BudgetView';


// Get all dates in chronological order
const dates = Object.keys(itineraryData).sort();

// Calculate total budget
const totalBudget = Object.values(itineraryData).reduce((sum, day) => ({
  yen: sum.yen + day.dayTotal.yen,
  usd: sum.usd + day.dayTotal.usd
}), { yen: 0, usd: 0 });


// Get the appropriate initial date based on today's date
const getInitialDate = () => {
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const tripStart = dates[0]; // First day of trip
  const tripEnd = dates[dates.length - 1]; // Last day of trip
  
  // If today is during the trip, use today
  if (today >= tripStart && today <= tripEnd) {
    return today;
  }
  // If today is before the trip, use first day
  if (today < tripStart) {
    return tripStart;
  }
  // If today is after the trip, use last day
  return tripEnd;
};

// Main App Component
export default function JapanTravelApp() {
  const [activeTab, setActiveTab] = useState('today');
  const [currentDate, setCurrentDate] = useState(getInitialDate());
  
  const renderContent = () => {
    switch (activeTab) {
      case 'today':
        return <TodayView currentDate={currentDate} itineraryData={itineraryData} />;
      case 'overview':
        return <OverviewView currentDate={currentDate} setCurrentDate={setCurrentDate} dates={dates} itineraryData={itineraryData} totalBudget={totalBudget} />;
      case 'budget':
        return <BudgetView itineraryData={itineraryData} totalBudget={totalBudget} dates={dates} />;
      default:
        return <TodayView currentDate={currentDate} itineraryData={itineraryData} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      
      <main className="pb-32">
        {renderContent()}
      </main>
      
      {activeTab === 'today' && (
        <DayNavigation currentDate={currentDate} setCurrentDate={setCurrentDate} dates={dates} />
      )}
      
      <BottomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}