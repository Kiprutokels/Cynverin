"use client";

import { useState } from "react";
import { dummyData } from "@/lib/dummy-data";
import { Plus, Search, Calendar, Tag, Smile, Heart, Zap, Coffee } from "lucide-react";

const LifeLog = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const { lifeLog } = dummyData;

  const moods = [
    { id: "happy", label: "Happy", icon: Smile, color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30" },
    { id: "excited", label: "Excited", icon: Zap, color: "text-orange-500 bg-orange-100 dark:bg-orange-900/30" },
    { id: "calm", label: "Calm", icon: Coffee, color: "text-blue-500 bg-blue-100 dark:bg-blue-900/30" },
    { id: "nostalgic", label: "Nostalgic", icon: Heart, color: "text-purple-500 bg-purple-100 dark:bg-purple-900/30" },
  ];

  const filteredEntries = selectedMood
    ? lifeLog.filter((entry) => entry.mood === selectedMood)
    : lifeLog;

  const getMoodIcon = (mood: string) => {
    const moodData = moods.find((m) => m.id === mood);
    return moodData || moods[0];
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Life Log</h1>
          <p className="text-muted-foreground">Capture and cherish your life's moments</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          New Entry
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-4 border border-border">
          <p className="text-sm text-muted-foreground mb-1">Total Entries</p>
          <p className="text-3xl font-bold">{lifeLog.length}</p>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
          <p className="text-sm text-muted-foreground mb-1">This Month</p>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
          <p className="text-sm text-muted-foreground mb-1">Current Streak</p>
          <p className="text-3xl font-bold">7 days</p>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
          <p className="text-sm text-muted-foreground mb-1">Most Used Tag</p>
          <p className="text-xl font-bold">productivity</p>
        </div>
      </div>

      {/* Mood Filter */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-2 mb-4">
          <Smile className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Filter by Mood</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedMood(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedMood === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            All Moods
          </button>
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedMood === mood.id
                    ? mood.color
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                {mood.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Entries Timeline */}
      <div className="space-y-4">
        {filteredEntries.map((entry) => {
          const moodData = getMoodIcon(entry.mood);
          const MoodIcon = moodData.icon;

          return (
            <div
              key={entry.id}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${moodData.color}`}>
                  <MoodIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{entry.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {entry.date}
                        </span>
                        <span className={`flex items-center gap-1 ${moodData.color.split(" ")[0]}`}>
                          <MoodIcon className="w-4 h-4" />
                          {moodData.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{entry.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-xs font-medium"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Insights */}
      <div className="bg-gradient-accent rounded-2xl p-6 text-white">
        <h2 className="text-lg font-semibold mb-4">Your Life Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white/80 text-sm mb-1">Most Common Mood</p>
            <div className="flex items-center gap-2">
              <Smile className="w-5 h-5" />
              <p className="text-xl font-bold">Happy</p>
            </div>
            <p className="text-sm text-white/80 mt-1">45% of entries</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white/80 text-sm mb-1">Most Productive Day</p>
            <p className="text-xl font-bold">Tuesday</p>
            <p className="text-sm text-white/80 mt-1">Based on activity</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white/80 text-sm mb-1">Popular Tags</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {["work", "wellness", "social"].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-white/20 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeLog;