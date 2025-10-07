import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CalendarDays, 
  Users, 
  BarChart3, 
  Calculator, 
  Timer,
  GitBranch,
  MessageSquare,
  FileText,
  Zap,
  Shield,
  Globe,
  Smartphone
} from "lucide-react";

const coreFeatures = [
  {
    icon: CalendarDays,
    title: "Sprint Planning",
    description: "Plan and organize your work into focused sprints with clear goals, timelines, and deliverables.",
    benefits: [
      "Create time-boxed sprints",
      "Set sprint goals and objectives", 
      "Backlog prioritization",
      "Sprint review and retrospectives"
    ]
  },
  {
    icon: Users,
    title: "Task Assignment & Tracking",
    description: "Assign tasks to team members and track progress in real-time with detailed visibility.",
    benefits: [
      "Drag-and-drop task assignment",
      "Real-time progress tracking",
      "Task dependencies management",
      "Team workload balancing"
    ]
  },
  {
    icon: BarChart3,
    title: "Progress & Analytics",
    description: "Visualize team performance with detailed analytics, burndown charts, and comprehensive reports.",
    benefits: [
      "Burndown & burnup charts",
      "Velocity tracking",
      "Time tracking analytics",
      "Custom reporting dashboards"
    ]
  },
  {
    icon: Calculator,
    title: "Cost & Efficiency Estimation",
    description: "Estimate project costs and track efficiency metrics automatically with smart algorithms.",
    benefits: [
      "Story point estimation",
      "Cost per sprint analysis",
      "Resource utilization tracking",
      "ROI calculations"
    ]
  }
];

const additionalFeatures = [
  {
    icon: Timer,
    title: "Time Tracking",
    description: "Built-in time tracking for accurate project cost estimation"
  },
  {
    icon: GitBranch,
    title: "Version Control Integration",
    description: "Connect with GitHub, GitLab, and Bitbucket repositories"
  },
  {
    icon: MessageSquare,
    title: "Team Communication",
    description: "Built-in chat and comment system for seamless collaboration"
  },
  {
    icon: FileText,
    title: "Documentation Hub",
    description: "Centralized documentation with wiki-style editing"
  },
  {
    icon: Zap,
    title: "Automation Rules",
    description: "Automate repetitive tasks with custom workflow rules"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with advanced security features"
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Available in 15+ languages for global teams"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS and Android apps for on-the-go management"
  }
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-light to-brand-teal-light">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-brand-blue block">Agile Teams</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything your team needs to plan, track, and deliver exceptional results. 
            Streamline your agile workflow with our comprehensive feature set.
          </p>
          <Button className="btn-hero" asChild>
            <Link to="/auth">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-blue-light text-brand-blue border-brand-blue/20">
              Core Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core features are designed to support every aspect of agile project management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="feature-card group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-brand-blue-light rounded-xl flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300 flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-teal-light text-brand-teal border-brand-teal/20">
              Additional Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Even More Ways to Boost Productivity
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover additional features that make SprintFlow the complete solution for agile teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="feature-card group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300 mb-4">
                    <feature.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who have streamlined their agile processes with SprintFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cta" asChild>
              <Link to="/auth">Start Free Trial</Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;