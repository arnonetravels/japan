import { Utensils, Camera, Train, Zap, Music, Star } from 'lucide-react';

// Japan-inspired color palette
export const activityColors = {
  dining: 'bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-400 text-red-900',
  cultural: 'bg-gradient-to-br from-indigo-50 to-blue-50 border-l-4 border-indigo-500 text-indigo-900',
  transport: 'bg-gradient-to-br from-emerald-50 to-green-50 border-l-4 border-emerald-500 text-emerald-900',
  festival: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-l-4 border-amber-500 text-amber-900',
  nightlife: 'bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-purple-500 text-purple-900',
  activity: 'bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500 text-teal-900'
};

export const activityIcons = {
  dining: Utensils,
  cultural: Star,
  transport: Train,
  festival: Zap,
  nightlife: Music,
  activity: Camera
};