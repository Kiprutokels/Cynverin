"use client";

import { useState } from "react";
import { dummyData } from "@/lib/dummy-data";
import { Send, Sparkles, Clock, TrendingUp, Brain, Zap, MessageSquare } from "lucide-react";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content: "Hello! I'm your AI assistant. I can help you with insights about your tasks, finances, schedule, and more. What would you like to know?",
      time: "10:30 AM",
    },
  ]);

  const { aiInsights } = dummyData;

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "assistant",
        content: "I've analyzed your request. Based on your current data, here's what I found...",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const quickActions = [
    { label: "Summarize my week", icon: Clock },
    { label: "Financial insights", icon: TrendingUp },
    { label: "Task priorities", icon: Zap },
    { label: "Productivity tips", icon: Brain },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            AI Assistant
          </h1>
          <p className="text-muted-foreground">Your intelligent companion for insights and automation</p>
        </div>
      </div>

      {/* AI Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aiInsights.map((insight, index) => {
          const getInsightIcon = () => {
            switch (insight.type) {
              case "productivity":
                return Brain;
              case "finance":
                return TrendingUp;
              case "health":
                return Zap;
              case "reminder":
                return Clock;
              default:
                return Sparkles;
            }
          };

          const Icon = getInsightIcon();

          return (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 capitalize">{insight.type} Insight</h3>
                  <p className="text-sm text-muted-foreground">{insight.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chat Interface */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-hero p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
                  <h2 className="font-semibold">Cynverin AI</h2>
              <p className="text-sm text-white/80">Always here to help</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-[400px] overflow-y-auto p-6 space-y-4 scrollbar-hide">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  msg.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p
                  className={`text-xs mt-2 ${
                    msg.type === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="px-6 py-3 border-t border-border bg-muted/30">
          <p className="text-xs text-muted-foreground mb-2">Quick Actions:</p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  onClick={() => setMessage(action.label)}
                  className="flex items-center gap-2 px-3 py-2 bg-card hover:bg-muted rounded-lg text-xs font-medium transition-colors border border-border"
                >
                  <Icon className="w-3 h-3" />
                  {action.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything about your digital life..."
              className="flex-1 px-4 py-3 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSend}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span className="hidden md:inline">Send</span>
            </button>
          </div>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Semantic Search</h3>
          <p className="text-sm text-muted-foreground">
            Find anything across your documents, notes, and logs using natural language queries.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Smart Summaries</h3>
          <p className="text-sm text-muted-foreground">
            Get instant summaries of your week, month, or any time period with key insights.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
          <p className="text-sm text-muted-foreground">
            AI-powered predictions for spending, productivity, and goal completion.
          </p>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-gradient-accent rounded-2xl p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Privacy-First AI</h3>
            <p className="text-sm text-white/90 mb-4">
              Your data never leaves your secure database. All AI processing respects your privacy
              and can be run locally with open-source models if preferred.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                End-to-End Encrypted
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                Local Processing Available
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                No Data Sharing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;