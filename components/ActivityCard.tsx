import React, { useState } from 'react';
import { Clock, MapPin, ChevronDown, ChevronUp, Utensils, Camera } from 'lucide-react';
import { activityColors, activityIcons } from '../constants/activity-config';

export default function ActivityCard({ activity }) {
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showTransportDetails, setShowTransportDetails] = useState(false);
  const colorClass = activityColors[activity.type] || activityColors.activity;
  const Icon = activityIcons[activity.type] || Camera;
  
  // For transport cards, show collapsed by default
  const isTransport = activity.type === 'transport';
  
  return (
    <div className={`rounded-xl p-5 mb-4 shadow-sm transition-all duration-200 hover:shadow-md ${colorClass}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white bg-opacity-70 rounded-lg">
            <Icon size={20} />
          </div>
          <div>
            <span className="font-medium text-sm uppercase tracking-wide opacity-75 block">
              {activity.type.replace('_', ' ')}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <Clock size={14} className="opacity-60" />
              <span className="text-sm opacity-75">{activity.time}</span>
            </div>
          </div>
        </div>
        {(activity.cost.yen > 0 || activity.cost.usd > 0) && (
          <div className="text-right bg-white bg-opacity-70 rounded-lg px-3 py-1">
            <div className="text-sm font-bold">¥{activity.cost.yen.toLocaleString()}</div>
            <div className="text-xs opacity-75">${activity.cost.usd.toFixed(2)}</div>
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-lg">{activity.title}</h3>
        {isTransport && (
          <button
            onClick={() => setShowTransportDetails(!showTransportDetails)}
            className="flex items-center gap-1 text-sm font-medium bg-white bg-opacity-70 px-2 py-1 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            {showTransportDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}
      </div>
      
      {activity.location && (
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={14} className="opacity-60" />
          <span className="text-sm opacity-75">{activity.location}</span>
        </div>
      )}
      
      {/* For transport cards, show minimal info when collapsed */}
      {isTransport && !showTransportDetails ? (
        <p className="text-sm mb-3 leading-relaxed">{activity.description}</p>
      ) : (
        <>
          <p className="text-sm mb-3 leading-relaxed">{activity.description}</p>
          
          {activity.significance && (
            <div className="mb-3 p-3 bg-white bg-opacity-50 rounded-lg">
              <h4 className="font-medium text-sm mb-1">Why This Matters:</h4>
              <p className="text-sm">{activity.significance}</p>
            </div>
          )}
          
          {activity.whatToDo && (
            <div className="mb-3">
              <h4 className="font-medium text-sm mb-2">What to Do:</h4>
              <ul className="text-sm space-y-1">
                {activity.whatToDo.map((item, idx) => {
                  // Strategic emoji mapping for key actions
                  let emoji = "•";
                  const itemLower = item.toLowerCase();
                  
                  if (itemLower.includes("walk") || itemLower.includes("stroll")) emoji = "🚶";
                  else if (itemLower.includes("take photo") || itemLower.includes("photos")) emoji = "📸";
                  else if (itemLower.includes("train") || itemLower.includes("subway") || itemLower.includes("metro")) emoji = "🚆";
                  else if (itemLower.includes("taxi") || itemLower.includes("bus")) emoji = "🚌";
                  else if (itemLower.includes("food") || itemLower.includes("eat") || itemLower.includes("try") || itemLower.includes("sample")) emoji = "🍜";
                  else if (itemLower.includes("temple") || itemLower.includes("shrine") || itemLower.includes("pray")) emoji = "⛩️";
                  else if (itemLower.includes("bow") || itemLower.includes("purify")) emoji = "🙏";
                  else if (itemLower.includes("view") || itemLower.includes("see") || itemLower.includes("watch")) emoji = "👀";
                  else if (itemLower.includes("shop") || itemLower.includes("buy") || itemLower.includes("browse")) emoji = "🛍️";
                  else if (itemLower.includes("experience") || itemLower.includes("enjoy")) emoji = "✨";
                  else if (itemLower.includes("exit") || itemLower.includes("entrance")) emoji = "🚪";
                  else if (itemLower.includes("transfer") || itemLower.includes("change")) emoji = "🔄";
                  
                  return (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sm mt-0.5">{emoji}</span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          
          {activity.whatToExpect && (
            <div className="mb-3 p-3 bg-white bg-opacity-50 rounded-lg">
              <h4 className="font-medium text-sm mb-1">What to Expect:</h4>
              <p className="text-sm">{activity.whatToExpect}</p>
            </div>
          )}
        </>
      )}
      
      {activity.festivalHighlights && (
        <div className="mb-3 p-3 bg-yellow-50 bg-opacity-70 rounded-lg border border-yellow-200">
          <div className="flex items-start gap-2">
            <span className="text-yellow-600 mt-0.5">🎌</span>
            <div>
              <h4 className="font-medium text-sm mb-1 text-yellow-800">Festival Highlights:</h4>
              <ul className="text-sm space-y-1">
                {activity.festivalHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-yellow-700">
                    <span className="text-sm mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {activity.culturalEtiquette && (
        <div className="mb-3 p-3 bg-amber-50 bg-opacity-70 rounded-lg border border-amber-200">
          <div className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">🙏</span>
            <div>
              <h4 className="font-medium text-sm mb-1 text-amber-800">Cultural Etiquette:</h4>
              <p className="text-sm text-amber-700">{activity.culturalEtiquette}</p>
            </div>
          </div>
        </div>
      )}
      
      {activity.note && (
        <div className="mb-3 p-3 bg-orange-50 bg-opacity-70 rounded-lg border border-orange-200">
          <div className="flex items-start gap-2">
            <span className="text-orange-600 mt-0.5">⚠️</span>
            <div>
              <h4 className="font-medium text-sm mb-1 text-orange-800">Important Note:</h4>
              <p className="text-sm text-orange-700">{activity.note}</p>
              {activity.alternative && (
                <p className="text-sm text-orange-700 mt-1">
                  <strong>Alternative:</strong> {activity.alternative}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {activity.restaurants && (
        <div className="mt-4">
          <button
            onClick={() => setShowRestaurants(!showRestaurants)}
            className="flex items-center gap-2 font-medium text-sm mb-2 bg-white bg-opacity-70 px-3 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            <Utensils size={16} />
            Restaurant Options ({activity.restaurants.length})
            {showRestaurants ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {showRestaurants && (
            <div className="space-y-3">
              {activity.restaurants.map((restaurant, idx) => (
                <div key={idx} className="p-3 bg-white bg-opacity-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-sm">{restaurant.name}</h5>
                    <span className="text-xs font-medium px-2 py-1 bg-white bg-opacity-70 rounded">
                      {restaurant.cost}
                    </span>
                  </div>
                  <p className="text-sm mb-2">{restaurant.description}</p>
                  {restaurant.whyRecommended && (
                    <p className="text-xs text-green-700 bg-green-50 bg-opacity-70 p-2 rounded">
                      <strong>Why recommended:</strong> {restaurant.whyRecommended}
                    </p>
                  )}
                  {restaurant.whatToExpect && (
                    <p className="text-xs text-blue-700 bg-blue-50 bg-opacity-70 p-2 rounded mt-1">
                      <strong>What to expect:</strong> {restaurant.whatToExpect}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}