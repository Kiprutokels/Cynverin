export const dummyData = {
  user: {
    name: "Alex Rivera",
    email: "alex.rivera@cynverin.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    timezone: "America/New_York",
  },

  stats: {
    tasksCompleted: 47,
    totalTasks: 68,
    eventsThisWeek: 12,
    documentsStored: 234,
    budgetUsed: 67,
    lifeLogEntries: 156,
  },

  events: [
    { id: 1, title: "Team Standup", date: "2024-12-05", time: "09:00", type: "meeting", color: "blue" },
    { id: 2, title: "Doctor Appointment", date: "2024-12-05", time: "14:30", type: "personal", color: "green" },
    { id: 3, title: "Project Deadline", date: "2024-12-06", time: "17:00", type: "work", color: "red" },
    { id: 4, title: "Gym Session", date: "2024-12-06", time: "18:30", type: "health", color: "orange" },
    { id: 5, title: "Client Call", date: "2024-12-07", time: "11:00", type: "meeting", color: "blue" },
    { id: 6, title: "Birthday Party", date: "2024-12-08", time: "19:00", type: "social", color: "purple" },
  ],

  tasks: [
    { id: 1, title: "Complete project proposal", project: "Website Redesign", priority: "high", completed: false, dueDate: "2024-12-06" },
    { id: 2, title: "Review design mockups", project: "Website Redesign", priority: "medium", completed: true, dueDate: "2024-12-05" },
    { id: 3, title: "Update documentation", project: "API Development", priority: "low", completed: false, dueDate: "2024-12-08" },
    { id: 4, title: "Client feedback call", project: "Mobile App", priority: "high", completed: false, dueDate: "2024-12-07" },
    { id: 5, title: "Code review", project: "API Development", priority: "medium", completed: true, dueDate: "2024-12-04" },
    { id: 6, title: "Database optimization", project: "Backend Refactor", priority: "high", completed: false, dueDate: "2024-12-09" },
  ],

  projects: [
    { id: 1, name: "Website Redesign", progress: 67, tasks: 12, completed: 8, color: "blue" },
    { id: 2, name: "API Development", progress: 45, tasks: 20, completed: 9, color: "green" },
    { id: 3, name: "Mobile App", progress: 23, tasks: 15, completed: 3, color: "purple" },
    { id: 4, name: "Backend Refactor", progress: 78, tasks: 8, completed: 6, color: "orange" },
  ],

  finances: {
    monthlyBudget: 5000,
    spent: 3350,
    categories: [
      { name: "Groceries", spent: 650, budget: 800, color: "green" },
      { name: "Rent", spent: 1500, budget: 1500, color: "blue" },
      { name: "Entertainment", spent: 280, budget: 400, color: "purple" },
      { name: "Transportation", spent: 320, budget: 500, color: "orange" },
      { name: "Utilities", spent: 250, budget: 300, color: "red" },
      { name: "Healthcare", spent: 150, budget: 250, color: "pink" },
      { name: "Shopping", spent: 200, budget: 250, color: "yellow" },
    ],
    recentTransactions: [
      { id: 1, description: "Whole Foods Market", amount: -87.32, category: "Groceries", date: "2024-12-04" },
      { id: 2, description: "Monthly Salary", amount: 5000, category: "Income", date: "2024-12-01" },
      { id: 3, description: "Netflix Subscription", amount: -15.99, category: "Entertainment", date: "2024-12-03" },
      { id: 4, description: "Uber Ride", amount: -23.45, category: "Transportation", date: "2024-12-04" },
      { id: 5, description: "Electric Bill", amount: -120.50, category: "Utilities", date: "2024-12-02" },
    ],
  },

  documents: [
    { id: 1, name: "Q4 Report.pdf", type: "pdf", size: "2.4 MB", date: "2024-11-30", folder: "Work" },
    { id: 2, name: "Passport Scan.jpg", type: "image", size: "1.8 MB", date: "2024-11-15", folder: "Personal" },
    { id: 3, name: "Project Plan.docx", type: "document", size: "456 KB", date: "2024-12-01", folder: "Work" },
    { id: 4, name: "Vacation Photos.zip", type: "archive", size: "45.2 MB", date: "2024-10-20", folder: "Personal" },
    { id: 5, name: "Tax Documents 2024.xlsx", type: "spreadsheet", size: "890 KB", date: "2024-11-25", folder: "Financial" },
    { id: 6, name: "Meeting Notes.txt", type: "text", size: "12 KB", date: "2024-12-04", folder: "Work" },
  ],

  lifeLog: [
    { id: 1, title: "Amazing sunset hike", content: "Went hiking today and caught the most beautiful sunset...", date: "2024-12-03", tags: ["nature", "outdoors"], mood: "happy" },
    { id: 2, title: "Project milestone achieved", content: "Finally finished the major feature we've been working on...", date: "2024-12-02", tags: ["work", "achievement"], mood: "excited" },
    { id: 3, title: "Productive morning routine", content: "Started the day with meditation and exercise...", date: "2024-12-01", tags: ["wellness", "productivity"], mood: "calm" },
    { id: 4, title: "Dinner with old friends", content: "Reconnected with college friends over dinner...", date: "2024-11-30", tags: ["social", "friendship"], mood: "nostalgic" },
  ],

  aiInsights: [
    { type: "productivity", message: "You're 23% more productive on Tuesdays. Consider scheduling important tasks then." },
    { type: "finance", message: "Your entertainment spending is 30% below budget this month. Great job!" },
    { type: "health", message: "You've logged 3 workout sessions this week. You're on track to meet your goal!" },
    { type: "reminder", message: "Don't forget: Project deadline in 2 days. You have 4 open tasks remaining." },
  ],
};