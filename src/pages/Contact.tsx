import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  HelpCircle,
  Building
} from "lucide-react";
import { useState } from "react";

const contactOptions = [
  {
    icon: MessageSquare,
    title: "General Inquiries",
    description: "Questions about SprintFlow or need help getting started?",
    email: "hello@sprintflow.com",
    response: "Within 24 hours"
  },
  {
    icon: Users,
    title: "Sales & Partnerships",
    description: "Looking to upgrade or explore enterprise solutions?",
    email: "sales@sprintflow.com",
    response: "Within 4 hours"
  },
  {
    icon: HelpCircle,
    title: "Customer Support",
    description: "Need technical support or have account questions?",
    email: "support@sprintflow.com",
    response: "Within 2 hours"
  },
  {
    icon: Building,
    title: "Press & Media",
    description: "Media inquiries, interviews, or partnership opportunities?",
    email: "press@sprintflow.com",
    response: "Within 24 hours"
  }
];

const offices = [
  {
    city: "Gandhinagar",
    country: "India",
    address: "ABCD EFGH",
    phone: "+91 99999 88888",
    isHeadquarters: true
  },

];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to your backend API
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
            <span className="text-brand-blue block">We're Here to Help</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions about SprintFlow? Want to explore how we can help your team? 
            We'd love to hear from you. Choose the best way to reach us below.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <Card key={index} className="feature-card group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300 mb-4">
                    <option.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <div className="space-y-2">
                    <a 
                      href={`mailto:${option.email}`}
                      className="block text-brand-blue font-semibold text-sm hover:underline"
                    >
                      {option.email}
                    </a>
                    <p className="text-gray-500 text-xs">
                      Response time: {option.response}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="teamSize">Team Size</Label>
                        <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1-5 people</SelectItem>
                            <SelectItem value="6-15">6-15 people</SelectItem>
                            <SelectItem value="16-50">16-50 people</SelectItem>
                            <SelectItem value="51-200">51-200 people</SelectItem>
                            <SelectItem value="200+">200+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="sales">Sales & Pricing</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="press">Press & Media</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us more about how we can help you..."
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="btn-hero">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-brand-blue mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-brand-blue mr-3" />
                      <a href="mailto:hello@sprintflow.com" className="text-gray-600 hover:text-brand-blue">
                        hello@sprintflow.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-brand-blue mr-3" />
                      <a href="tel:+91 9292929292" className="text-gray-600 hover:text-brand-blue">
                        +91 9292929292
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Need Immediate Help */}
              <Card className="shadow-lg bg-brand-blue text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-brand-blue-light mb-4 text-sm">
                    Check out our comprehensive help center with tutorials, FAQs, and guides.
                  </p>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
                    Visit Help Center
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a global team with offices around the world. Visit us or get in touch with your local team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className={`feature-card ${office.isHeadquarters ? 'ring-2 ring-brand-blue' : ''}`}>
                <CardContent className="p-6">
                  {office.isHeadquarters && (
                    <div className="mb-4">
                      <span className="inline-block bg-brand-blue text-white text-xs font-semibold px-2 py-1 rounded">
                        Headquarters
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {office.city}
                  </h3>
                  <p className="text-brand-blue font-semibold mb-4">{office.country}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-brand-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-brand-blue mr-3" />
                      <a href={`tel:${office.phone}`} className="text-gray-600 text-sm hover:text-brand-blue">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;