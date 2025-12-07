"use client";

import { Bell, Settings, User, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/app/providers";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("Dashboard");

  // Debug: Log current theme and HTML class
  useEffect(() => {
    console.log("Current theme:", theme);
    console.log("HTML has dark class:", document.documentElement.classList.contains("dark"));
  }, [theme]);

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "People", path: "/people" },
    { name: "Hiring", path: "/hiring" },
    { name: "Devices", path: "/devices" },
    { name: "Apps", path: "/apps" },
    { name: "Salary", path: "/salary" },
    { name: "Calendar", path: "/calendar" },
    { name: "Reviews", path: "/reviews" },
  ];

  const handleNavigation = (name: string, path: string) => {
    setActiveItem(name);
    router.push(path);
    setMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <header className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-4 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="font-semibold text-gray-900 dark:text-gray-100">Crextio</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-900 dark:bg-gray-800 rounded-full p-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name, item.path)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeItem === item.name
                  ? "bg-gray-800 dark:bg-gray-700 text-white"
                  : "text-gray-400 dark:text-gray-500 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
          <button 
            onClick={() => router.push("/settings")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            onClick={() => router.push("/notifications")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            onClick={() => router.push("/profile")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.name, item.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeItem === item.name
                    ? "bg-gray-900 dark:bg-gray-700 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;