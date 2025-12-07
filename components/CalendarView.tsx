"use client";

const CalendarView = () => {
  const months = ["August", "September 2024", "October"];
  const currentMonth = 1;

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarDays = [
    { day: "", date: 0 },
    { day: "22", date: 22 },
    { day: "23", date: 23 },
    { day: "24", date: 24 },
    { day: "25", date: 25 },
    { day: "26", date: 26 },
    { day: "27", date: 27 },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-4 md:p-6 transition-colors">
      {/* Month Selector */}
      <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 overflow-x-auto">
        {months.map((month, index) => (
          <button
            key={month}
            className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
              index === currentMonth
                ? "text-gray-900 dark:text-gray-100 font-semibold"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-6 gap-2 mb-3">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-xs text-gray-500 dark:text-gray-400 font-medium">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-2">
          {calendarDays.map((item, index) => (
            <div
              key={index}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                item.date === 0
                  ? ""
                  : item.date === 24
                  ? "bg-gray-900 dark:bg-gray-700 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
              }`}
            >
              {item.day}
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span>8:00 am</span>
          <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
        </div>

        {/* Event 1 */}
        <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Weekly Team Sync</span>
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 rounded-full bg-amber-400 border-2 border-gray-900 dark:border-gray-800"></div>
              <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-900 dark:border-gray-800"></div>
              <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-gray-900 dark:border-gray-800"></div>
            </div>
          </div>
          <p className="text-xs text-gray-300 dark:text-gray-400">check new employee</p>
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span>9:00 am</span>
          <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span>10:00 am</span>
          <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
        </div>

        {/* Event 2 */}
        <div className="border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Onboarding Session</span>
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 rounded-full bg-amber-400 border-2 border-white dark:border-gray-900"></div>
              <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white dark:border-gray-900"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">September, 9:00 am</p>
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span>11:00 am</span>
          <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;