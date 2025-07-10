import React from 'react';
import { Calendar, MapPin, DollarSign } from 'lucide-react';

export default function BottomTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'today', label: 'Today', icon: Calendar },
    { id: 'overview', label: 'Overview', icon: MapPin },
    { id: 'budget', label: 'Budget', icon: DollarSign }
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 flex flex-col items-center gap-1 transition-colors ${
                isActive 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-600 hover:text-indigo-500'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}