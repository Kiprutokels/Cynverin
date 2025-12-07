"use client";

import { Check, Circle } from "lucide-react";

const OnboardingCard = () => {
  const tasks = [
    { id: 1, title: "Onboarding Task", date: "Sep 11, 08:30", completed: false },
    { id: 2, title: "Team Meeting", date: "Sep 11, 10:30", completed: true },
    { id: 3, title: "Project Update", date: "Sep 13, 09:00", completed: false },
    { id: 4, title: "Discuss UI Goals", date: "Sep 13, 11:30", completed: true },
    { id: 5, title: "HR Policy Review", date: "Sep 14, 14:00", completed: false },
  ];

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-4 md:p-6 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100">Onboarding</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">{completionPercentage}%</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
            <span className="font-medium">{completedTasks}/{totalTasks}</span>
          </div>
        </div>
      </div>

      {/* Task Counter */}
      <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-4 mb-4 flex items-center justify-between">
        <span className="text-sm font-medium">Onboarding Task</span>
        <span className="text-xl md:text-2xl font-bold">{completedTasks}/{totalTasks}</span>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  task.completed
                    ? "bg-amber-400 dark:bg-amber-500"
                    : "bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-600"
                }`}
              >
                {task.completed ? (
                  <Check className="w-4 h-4 text-gray-900" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-medium truncate ${
                    task.completed 
                      ? "text-gray-400 dark:text-gray-500 line-through" 
                      : "text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {task.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{task.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingCard;