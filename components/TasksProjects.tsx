"use client";

import { useState } from "react";
import { dummyData } from "@/lib/dummy-data";
import { Plus, Filter, CheckSquare, Circle, AlertCircle, Clock } from "lucide-react";

const TasksProjects = () => {
  const [activeTab, setActiveTab] = useState<"tasks" | "projects">("tasks");
  const [filterPriority, setFilterPriority] = useState<"all" | "high" | "medium" | "low">("all");

  const { tasks, projects } = dummyData;

  const filteredTasks = tasks.filter((task) => {
    if (filterPriority === "all") return true;
    return task.priority === filterPriority;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-destructive bg-destructive/10";
      case "medium":
        return "text-warning bg-warning/10";
      case "low":
        return "text-success bg-success/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tasks & Projects</h1>
          <p className="text-muted-foreground">Track your work and achieve your goals</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          {activeTab === "tasks" ? "Add Task" : "New Project"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("tasks")}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            activeTab === "tasks"
              ? "bg-primary text-primary-foreground"
              : "bg-card border border-border hover:bg-muted"
          }`}
        >
          Tasks
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            activeTab === "projects"
              ? "bg-primary text-primary-foreground"
              : "bg-card border border-border hover:bg-muted"
          }`}
        >
          Projects
        </button>
      </div>

      {activeTab === "tasks" ? (
        <>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Priority:</span>
            </div>
            {(["all", "high", "medium", "low"] as const).map((priority) => (
              <button
                key={priority}
                onClick={() => setFilterPriority(priority)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterPriority === priority
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </button>
            ))}
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Active Tasks */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Circle className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Active Tasks</h2>
                <span className="ml-auto text-sm text-muted-foreground">
                  {filteredTasks.filter((t) => !t.completed).length} tasks
                </span>
              </div>
              <div className="space-y-3">
                {filteredTasks
                  .filter((task) => !task.completed)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="p-4 bg-muted/50 hover:bg-muted rounded-lg transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          className="mt-1 w-5 h-5 rounded border-border cursor-pointer"
                          checked={task.completed}
                          readOnly
                        />
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{task.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="text-muted-foreground">{task.project}</span>
                            <span className={`px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {task.dueDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Completed Tasks */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <CheckSquare className="w-5 h-5 text-success" />
                <h2 className="text-lg font-semibold">Completed</h2>
                <span className="ml-auto text-sm text-muted-foreground">
                  {filteredTasks.filter((t) => t.completed).length} tasks
                </span>
              </div>
              <div className="space-y-3">
                {filteredTasks
                  .filter((task) => task.completed)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="p-4 bg-muted/50 hover:bg-muted rounded-lg transition-colors opacity-60"
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          className="mt-1 w-5 h-5 rounded border-border cursor-pointer"
                          checked={task.completed}
                          readOnly
                        />
                        <div className="flex-1">
                          <h3 className="font-medium mb-1 line-through">{task.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="text-muted-foreground">{task.project}</span>
                            <span className={`px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Task Summary */}
          <div className="bg-gradient-hero rounded-2xl p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-white/80 text-sm mb-1">Total Tasks</p>
                <p className="text-3xl font-bold">{tasks.length}</p>
              </div>
              <div>
                <p className="text-white/80 text-sm mb-1">Completed</p>
                <p className="text-3xl font-bold">{tasks.filter((t) => t.completed).length}</p>
              </div>
              <div>
                <p className="text-white/80 text-sm mb-1">In Progress</p>
                <p className="text-3xl font-bold">{tasks.filter((t) => !t.completed).length}</p>
              </div>
              <div>
                <p className="text-white/80 text-sm mb-1">High Priority</p>
                <p className="text-3xl font-bold">
                  {tasks.filter((t) => !t.completed && t.priority === "high").length}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.completed} of {project.tasks} tasks completed
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-${project.color}-100 dark:bg-${project.color}-900/30`}></div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`bg-${project.color}-500 h-2 rounded-full transition-all`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">{project.tasks}</p>
                      <p className="text-xs text-muted-foreground">Total Tasks</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">{project.completed}</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Projects Overview */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h2 className="text-lg font-semibold mb-4">All Projects Overview</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full bg-${project.color}-500`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{project.name}</span>
                      <span className="text-muted-foreground">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className={`bg-${project.color}-500 h-1.5 rounded-full transition-all`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TasksProjects;