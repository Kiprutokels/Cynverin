"use client";

import { ChevronDown, ChevronUp, Laptop } from "lucide-react";
import { useState } from "react";

const ProfileCard = () => {
  const [openSections, setOpenSections] = useState({
    pension: false,
    devices: true,
    compensation: false,
    benefits: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-4 md:p-6 space-y-4 transition-colors">
      {/* Profile Header */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
          alt="Lora Piterson"
          className="w-full h-40 md:h-48 object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-2xl"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg md:text-xl font-semibold">Lora Piterson</h3>
          <p className="text-xs md:text-sm opacity-90">UX/UI Designer</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full">
          <span className="text-white font-semibold text-sm md:text-base">$1,200</span>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-2">
        <button
          onClick={() => toggleSection("pension")}
          className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <span className="font-medium text-gray-900 dark:text-gray-100 text-sm md:text-base">Pension contributions</span>
          {openSections.pension ? (
            <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>

        <button
          onClick={() => toggleSection("devices")}
          className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <span className="font-medium text-gray-900 dark:text-gray-100 text-sm md:text-base">Devices</span>
          {openSections.devices ? (
            <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>

        {openSections.devices && (
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <Laptop className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm md:text-base">MacBook Air</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Version M1</p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => toggleSection("compensation")}
          className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <span className="font-medium text-gray-900 dark:text-gray-100 text-sm md:text-base">Compensation Summary</span>
          {openSections.compensation ? (
            <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>

        <button
          onClick={() => toggleSection("benefits")}
          className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <span className="font-medium text-gray-900 dark:text-gray-100 text-sm md:text-base">Employee Benefits</span>
          {openSections.benefits ? (
            <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;