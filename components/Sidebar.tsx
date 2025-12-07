"use client";

import { 
  LayoutDashboard, 
  Calendar, 
  CheckSquare, 
  DollarSign, 
  FileText, 
  Book, 
  Sparkles,
  X
} from "lucide-react";

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ activeView, setActiveView, isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "calendar", label: "Calendar & Events", icon: Calendar },
    { id: "tasks", label: "Tasks & Projects", icon: CheckSquare },
    { id: "finances", label: "Financial Tracker", icon: DollarSign },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "lifelog", label: "Life Log", icon: Book },
    { id: "ai", label: "AI Assistant", icon: Sparkles },
  ];

  const handleItemClick = (id: string) => {
    setActiveView(id);
    onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
            <span className="font-semibold">Menu</span>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <div className="bg-gradient-hero rounded-lg p-4 text-white">
              <p className="text-sm font-semibold mb-1">Upgrade to Pro</p>
              <p className="text-xs opacity-90 mb-3">Unlock unlimited storage & AI features</p>
              <button className="w-full bg-white text-primary py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;