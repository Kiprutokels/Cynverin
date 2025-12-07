"use client";

import { TrendingUp } from "lucide-react";

const ProgressCard = () => {
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const progressData = [20, 30, 25, 40, 35, 90, 45];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-4 md:p-6 transition-colors">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">Progress</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">6.1</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">h</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Work Time</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">this week</p>
        </div>
        <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <TrendingUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Progress Bars */}
      <div className="flex items-end justify-between gap-2 md:gap-3 h-32 mb-4">
        {weekDays.map((day, index) => {
          const height = progressData[index];
          const isHighlight = index === 5;

          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full h-full flex flex-col justify-end mb-2">
                <div
                  className={`w-full rounded-full transition-all ${
                    isHighlight ? "bg-amber-400 dark:bg-amber-500" : "bg-gray-900 dark:bg-gray-700"
                  }`}
                  style={{ height: `${height}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{day}</span>
            </div>
          );
        })}
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">+5.2%</span>
      </div>
    </div>
  );
};

export default ProgressCard;