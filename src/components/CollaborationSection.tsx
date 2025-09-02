
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Video, Share2 } from "lucide-react";

const CollaborationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-blue-light to-brand-teal-light rounded-3xl p-8 h-96 flex items-center justify-center">
              {/* Team Collaboration Mockup */}
              <div className="relative w-full h-full">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                {/* Orbiting Icons */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6 text-brand-blue" />
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Video className="w-6 h-6 text-brand-teal" />
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Share2 className="w-6 h-6 text-brand-blue" />
                </div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-6 h-6 text-brand-teal" />
                </div>

                {/* Team Avatars */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work with your team in <span className="text-brand-teal">real-time</span>.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From web to mobile, SprintFlow keeps everyone aligned. Collaborate seamlessly 
              with instant updates, team chat, and shared workspaces that sync across all devices.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Real-time collaboration & updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span className="text-gray-700">Cross-platform synchronization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Integrated team communication</span>
              </div>
            </div>

            <Button variant="outline" className="btn-hero-secondary">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
