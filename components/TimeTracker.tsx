"use client";

import { Play, Pause, Square, TrendingUp } from "lucide-react";
import { useState } from "react";

const TimeTracker = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-4 md:p-6 transition-colors">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100">Time tracker</h3>
        <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <TrendingUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Circular Progress */}
      <div className="relative flex items-center justify-center mb-6">
        <svg className="w-40 h-40 md:w-48 md:h-48 transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="88"
            stroke="currentColor"
            className="text-gray-200 dark:text-gray-700"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r="88"
            stroke="currentColor"
            className="text-amber-400 dark:text-amber-500"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${(2.35 / 8) * 553} 553`}
            strokeLinecap="round"
          />
          <circle cx="50%" cy="4%" r="4" fill="currentColor" className="text-gray-900 dark:text-gray-100" />
          <circle cx="96%" cy="50%" r="4" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
          <circle cx="50%" cy="96%" r="4" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
        </svg>

        <div className="absolute text-center">
          <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">02:35</div>
          <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">Work Time</div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          {isRunning ? (
            <Pause className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          ) : (
            <Play className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          )}
        </button>

        <button className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
          <Pause className="w-5 h-5 text-gray-900 dark:text-gray-100" />
        </button>

        <button className="p-4 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 rounded-full transition-colors">
          <Square className="w-6 h-6 text-white" fill="white" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;