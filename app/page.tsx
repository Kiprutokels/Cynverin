import Header from "@/components/Header";
import StatsBar from "@/components/StatsBar";
import ProfileCard from "@/components/ProfileCard";
import ProgressCard from "@/components/ProgressCard";
import TimeTracker from "@/components/TimeTracker";
import OnboardingCard from "@/components/OnboardingCard";
import CalendarView from "@/components/CalendarView";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-6">
      <div className="max-w-[1400px] mx-auto">
        <Header />
        
        <div className="mt-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Welcome in, Nixtio
          </h1>
          
          <StatsBar />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
            <div className="space-y-4 md:space-y-6">
              <ProfileCard />
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <ProgressCard />
              <CalendarView />
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <TimeTracker />
              <OnboardingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}