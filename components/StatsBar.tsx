"use client";

const StatsBar = () => {
  const tabs = [
    { label: "Daily News", active: true },
    { label: "Hired", active: false },
    { label: "Project Time", active: false },
  ];

  const stats = [
    { label: "Employee", value: "78" },
    { label: "Hiring", value: "56" },
    { label: "Projects", value: "203" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mt-6">
      {/* Tabs */}
      <div className="flex items-center gap-2 md:gap-3 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all ${
              tab.active
                ? "bg-gray-900 dark:bg-gray-700 text-white"
                : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 md:gap-6 flex-wrap">
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium hidden md:block">Output</span>
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;