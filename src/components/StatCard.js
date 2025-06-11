import React from 'react';

const StatCard = ({ title, value, color = 'blue' }) => (
  <div className={`bg-white rounded-lg p-4 shadow-sm border-l-4 border-${color}-500`}>
    <div className="text-sm text-gray-600 mb-1">{title}</div>
    <div className={`text-2xl font-bold text-${color}-600`}>{value}</div>
  </div>
);

export default StatCard; 