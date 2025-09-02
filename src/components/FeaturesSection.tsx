
import { CalendarDays, Users, BarChart3, Calculator } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Sprint Planning",
    description: "Organize your work into focused sprints with clear goals and timelines."
  },
  {
    icon: Users,
    title: "Task Assignment & Tracking",
    description: "Assign tasks to team members and track progress in real-time."
  },
  {
    icon: BarChart3,
    title: "Progress & Burndown Charts",
    description: "Visualize team performance with detailed analytics and reports."
  },
  {
    icon: Calculator,
    title: "Cost & Efficiency Estimation",
    description: "Estimate project costs and track efficiency metrics automatically."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-brand-blue">SprintFlow</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your agile team needs to deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-6">
                <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-feature-title">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
