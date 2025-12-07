"use client";

import { dummyData } from "@/lib/dummy-data";
import { TrendingUp, TrendingDown } from "lucide-react";

const QuickStats = () => {
  const { stats } = dummyData;

  const statCards = [
    {
      label: "Tasks Completed",
      value: `${stats.tasksCompleted}/${stats.totalTasks}`,
      percentage: Math.round((stats.tasksCompleted / stats.totalTasks) * 100),
      trend: "up",
      color: "primary",
    },
    {
      label: "Events This Week",
      value: stats.eventsThisWeek,
      change: "+3 from last week",
      trend: "up",
      color: "success",
    },
    {
      label: "Budget Used",
      value: `${stats.budgetUsed}%`,
      change: "Below target",
      trend: "down",
      color: "warning",
    },
    {
      label: "Documents",
      value: stats.documentsStored,
      change: "+12 this month",
      trend: "up",
      color: "accent",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl p-5 border border-border hover:shadow-lg transition-all animate-scale-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            {stat.trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-success" />
            ) : (
              <TrendingDown className="w-4 h-4 text-warning" />
            )}
          </div>
          <p className="text-3xl font-bold mb-2">{stat.value}</p>
          {stat.change && (
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          )}
          {stat.percentage && (
            <div className="mt-3 w-full bg-muted rounded-full h-1.5">
              <div
                className={`bg-${stat.color} h-1.5 rounded-full transition-all`}
                style={{ width: `${stat.percentage}%` }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
