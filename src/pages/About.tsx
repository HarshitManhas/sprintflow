import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Target, 
  Globe, 
  Award,
  Lightbulb,
  Shield,
  TrendingUp
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We put our customers at the center of everything we do, building features and services that truly solve their problems."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "We believe the best results come from diverse teams working together toward common goals."
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "We focus on outcomes that matter, measuring success by the value we create for our customers."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore new ways to improve agile project management through technology and design."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We maintain the highest standards of security and privacy to protect our customers' data."
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We're committed to learning, improving, and evolving to better serve our growing community."
  }
];

const team = [
  {
    name: "ABCD",
    role: "CEO & Co-founder",
    bio: "Passionate about helping teams deliver their best work.",
    image: "SC"
  },
  {
    name: "EFGH",
    role: "CTO & Co-founder", 
    bio: "Full-stack engineer with expertise in scalable systems. Previously built dev tools at GitHub and Stripe.",
    image: "MR"
  },
  {
    name: "IJKL",
    role: "Head of Design",
    bio: "UX designer focused on creating intuitive experiences. Former design lead at Figma and Notion.",
    image: "ET"
  },
  {
    name: "MNOP",
    role: "VP of Engineering",
    bio: "Engineering leader passionate about building reliable, performant software. Ex-Google, Ex-Microsoft.",
    image: "DK"
  },
  {
    name: "QRST",
    role: "Head of Customer Success",
    bio: "Customer advocate with deep expertise in agile coaching and organizational transformation.",
    image: "LZ"
  },
  {
    name: "UVWX",
    role: "Head of Sales",
    bio: "Sales leader focused on building authentic relationships and helping teams find the right solutions.",
    image: "JW"
  }
];

const stats = [
  {
    number: "1K+",
    label: "Active Teams"
  },
  {
    number: "100+",
    label: "Tasks Completed"
  },
  {
    number: "150+",
    label: "Countries"
  },
  {
    number: "99.9%",
    label: "Uptime"
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We're Building the Future of
            <span className="text-brand-blue block">Agile Collaboration</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            SprintFlow was born from our own frustration with clunky project management tools. 
            We set out to create something better—software that actually makes teams more productive, 
            not less.
          </p>
          <Button className="btn-hero" asChild>
            <Link to="/contact">Join Our Mission</Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-teal-light text-brand-teal border-brand-teal/20">
              Our Story
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From Frustration to Innovation
            </h2>
          </div>

          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              In 2025, our founders ABCD and EFGH were leading engineering teams at fast-growing 
              tech companies. Despite using the "best" project management tools available, they 
              found themselves constantly fighting with the software instead of focusing on delivering 
              great products.
            </p>
            
            <p>
              The existing tools were either too simple (lacking essential features for agile teams) 
              or too complex (requiring weeks of training and setup). There had to be a better way.
            </p>
            
            <p>
              That's when they decided to build SprintFlow—a project management tool designed by 
              agile practitioners, for agile teams. Something that would be powerful enough for 
              complex projects, yet intuitive enough that anyone could start using it immediately.
            </p>
            
            <p>
              Today, SprintFlow helps over 50,000 teams in 150+ countries deliver better results 
              faster. But we're just getting started. We're on a mission to transform how teams 
              collaborate and build amazing things together.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-brand-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower every team to deliver their best work by providing intuitive, 
                powerful tools that make agile project management simple and enjoyable. 
                We believe great software should amplify human potential, not hinder it.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-teal-light rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-brand-teal" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where every team—regardless of size, industry, or location—has access to 
                world-class project management tools that help them collaborate seamlessly, 
                deliver exceptional results, and love the work they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-blue-light text-brand-blue border-brand-blue/20">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These values guide how we build our product, serve our customers, and work together as a team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="feature-card group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300 mb-4">
                    <value.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-teal-light text-brand-teal border-brand-teal/20">
              Meet the Team
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The People Behind SprintFlow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a diverse team of builders, designers, and problem-solvers united by our passion for great software
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="feature-card group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-brand-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue transition-colors duration-300">
                    <span className="text-2xl font-bold text-brand-blue group-hover:text-white transition-colors duration-300">
                      {member.image}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-blue font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-blue-light text-brand-blue border-brand-blue/20">
              Recognition
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Awards & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're honored to be recognized by the industry and our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Best Project Management Tool</h3>
              <p className="text-gray-600 text-sm">TechCrunch Awards 2025</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Fastest Growing SaaS</h3>
              <p className="text-gray-600 text-sm">SaaS Awards 2025</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Top Rated Software</h3>
              <p className="text-gray-600 text-sm">G2 Summer 2025</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Customer Choice Award</h3>
              <p className="text-gray-600 text-sm">Capterra 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a team looking for better project management or a talented individual wanting to join our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cta" asChild>
              <Link to="/auth">Try SprintFlow Free</Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;