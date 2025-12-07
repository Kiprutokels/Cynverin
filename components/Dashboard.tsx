"use client";

import { dummyData } from "@/lib/dummy-data";
import { 
  Calendar, 
  CheckSquare, 
  DollarSign, 
  FileText, 
  Book, 
  Sparkles,
  TrendingUp,
  Clock,
  ArrowRight,
  Target,
  Zap
} from "lucide-react";

interface DashboardProps {
  onNavigate: (view: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const { stats, events, tasks, finances, aiInsights } = dummyData;

  const upcomingEvents = events.slice(0, 3);
  const urgentTasks = tasks.filter(t => !t.completed && t.priority === "high").slice(0, 3);

  const moduleCards = [
    {
      id: "calendar",
      title: "Calendar & Events",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      stats: `${stats.eventsThisWeek} events this week`,
      preview: `${upcomingEvents.length} upcoming`,
    },
    {
      id: "tasks",
      title: "Tasks & Projects",
      icon: CheckSquare,
      color: "from-green-500 to-green-600",
      stats: `${stats.tasksCompleted}/${stats.totalTasks} completed`,
      preview: `${tasks.filter(t => !t.completed).length} active`,
    },
    {
      id: "finances",
      title: "Financial Tracker",
      icon: DollarSign,
      color: "from-purple-500 to-purple-600",
      stats: `${stats.budgetUsed}% budget used`,
      preview: `$${finances.monthlyBudget - finances.spent} remaining`,
    },
    {
      id: "documents",
      title: "Documents",
      icon: FileText,
      color: "from-orange-500 to-orange-600",
      stats: `${stats.documentsStored} files`,
      preview: "All organized",
    },
    {
      id: "lifelog",
      title: "Life Log",
      icon: Book,
      color: "from-pink-500 to-pink-600",
      stats: `${stats.lifeLogEntries} entries`,
      preview: "Capture memories",
    },
    {
      id: "ai",
      title: "AI Assistant",
      icon: Sparkles,
      color: "from-indigo-500 to-indigo-600",
      stats: "Smart insights",
      preview: "Ask me anything",
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Welcome back, {dummyData.user.name.split(" ")[0]}! 👋
        </h1>
        <p className="text-muted-foreground text-lg">
          Here's your digital life at a glance
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-2xl p-5 border border-border hover:shadow-lg transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">Completion</p>
          </div>
          <p className="text-3xl font-bold">{Math.round((stats.tasksCompleted / stats.totalTasks) * 100)}%</p>
        </div>

        <div className="bg-card rounded-2xl p-5 border border-border hover:shadow-lg transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-success" />
            <p className="text-sm text-muted-foreground">Events</p>
          </div>
          <p className="text-3xl font-bold">{stats.eventsThisWeek}</p>
        </div>

        <div className="bg-card rounded-2xl p-5 border border-border hover:shadow-lg transition-all">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-warning" />
            <p className="text-sm text-muted-foreground">Budget</p>
          </div>
          <p className="text-3xl font-bold">{stats.budgetUsed}%</p>
        </div>

        <div className="bg-card rounded-2xl p-5 border border-border hover:shadow-lg transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-accent" />
            <p className="text-sm text-muted-foreground">Streak</p>
          </div>
          <p className="text-3xl font-bold">7d</p>
        </div>
      </div>

      {/* AI Insights Banner */}
      <div className="bg-gradient-hero rounded-2xl p-6 md:p-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6" />
          <h2 className="text-xl md:text-2xl font-bold">AI Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiInsights.slice(0, 2).map((insight, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm md:text-base">{insight.message}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => onNavigate("ai")}
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          View All Insights
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Module Cards */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {moduleCards.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => onNavigate(module.id)}
                className="group bg-card rounded-2xl p-6 border border-border hover:shadow-2xl hover:-translate-y-1 transition-all text-left"
              >
                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                <p className="text-muted-foreground mb-3">{module.stats}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{module.preview}</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Upcoming Events</h3>
            </div>
            <button
              onClick={() => onNavigate("calendar")}
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors">
                <div className={`w-2 h-12 rounded-full bg-${event.color}-500`}></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date} at {event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Urgent Tasks */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-destructive" />
              <h3 className="text-lg font-semibold">High Priority Tasks</h3>
            </div>
            <button
              onClick={() => onNavigate("tasks")}
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {urgentTasks.map((task) => (
              <div key={task.id} className="flex items-start gap-3 p-3 hover:bg-muted rounded-lg transition-colors">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-border"
                  checked={task.completed}
                  readOnly
                />
                <div className="flex-1">
                  <p className="font-medium text-sm">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.project} • Due {task.dueDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-success" />
            <h3 className="text-lg font-semibold">Financial Snapshot</h3>
          </div>
          <button
            onClick={() => onNavigate("finances")}
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Monthly Budget</span>
              <span className="font-semibold">${finances.spent} / ${finances.monthlyBudget}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all"
                style={{ width: `${(finances.spent / finances.monthlyBudget) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {finances.categories.slice(0, 3).map((cat) => (
              <div key={cat.name} className="text-center p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">{cat.name}</p>
                <p className="text-sm font-bold">${cat.spent}</p>
                <p className="text-xs text-muted-foreground">of ${cat.budget}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;