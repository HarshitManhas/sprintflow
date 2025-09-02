
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in">
            <h1 className="text-hero text-gray-900 mb-6">
              Plan. Track. <span className="text-brand-blue">Deliver</span>. Smarter.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Agile project management for teams to stay on track with sprints, tasks, and progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Get Started
              </Button>
              <Button variant="outline" className="btn-hero-secondary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side - Mockup */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                {/* Kanban Board Mockup */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-gray-800">Sprint Board</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {/* To Do Column */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">To Do</h4>
                      <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-gray-300">
                        <div className="text-sm font-medium text-gray-800 mb-1">User Authentication</div>
                        <div className="text-xs text-gray-500">Story Points: 5</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-gray-300">
                        <div className="text-sm font-medium text-gray-800 mb-1">Dashboard Design</div>
                        <div className="text-xs text-gray-500">Story Points: 8</div>
                      </div>
                    </div>

                    {/* In Progress Column */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">In Progress</h4>
                      <div className="bg-brand-blue-light rounded-lg p-3 border-l-4 border-brand-blue">
                        <div className="text-sm font-medium text-gray-800 mb-1">API Integration</div>
                        <div className="text-xs text-gray-500">Story Points: 3</div>
                      </div>
                    </div>

                    {/* Done Column */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Done</h4>
                      <div className="bg-brand-teal-light rounded-lg p-3 border-l-4 border-brand-teal">
                        <div className="text-sm font-medium text-gray-800 mb-1">Project Setup</div>
                        <div className="text-xs text-gray-500">Story Points: 2</div>
                      </div>
                      <div className="bg-brand-teal-light rounded-lg p-3 border-l-4 border-brand-teal">
                        <div className="text-sm font-medium text-gray-800 mb-1">Requirements</div>
                        <div className="text-xs text-gray-500">Story Points: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
