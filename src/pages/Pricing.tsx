import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, X, Star } from "lucide-react";

interface PricingFeature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

const pricingFeatures: PricingFeature[] = [
  {
    name: "Team Members",
    starter: "Up to 5",
    professional: "Up to 25",
    enterprise: "Unlimited"
  },
  {
    name: "Projects",
    starter: "3 active projects",
    professional: "Unlimited projects",
    enterprise: "Unlimited projects"
  },
  {
    name: "Storage",
    starter: "2GB",
    professional: "100GB",
    enterprise: "1TB+"
  },
  {
    name: "Kanban Boards",
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: "Sprint Planning",
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: "Task Management",
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: "Time Tracking",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: "Advanced Analytics",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: "Custom Fields",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: "API Access",
    starter: false,
    professional: "Limited",
    enterprise: "Full API"
  },
  {
    name: "Integrations",
    starter: "Basic (5)",
    professional: "Advanced (25+)",
    enterprise: "All integrations"
  },
  {
    name: "Priority Support",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: "SSO & Advanced Security",
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    name: "Custom Branding",
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    name: "Dedicated Success Manager",
    starter: false,
    professional: false,
    enterprise: true
  }
];

const plans = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for small teams getting started with agile",
    popular: false,
    cta: "Start Free",
    features: [
      "Up to 5 team members",
      "3 active projects",
      "Basic Kanban boards",
      "Sprint planning",
      "Task management",
      "2GB storage",
      "Community support"
    ]
  },
  {
    name: "Professional",
    price: 12,
    description: "Ideal for growing teams that need advanced features",
    popular: true,
    cta: "Start Free Trial",
    features: [
      "Up to 25 team members",
      "Unlimited projects",
      "Advanced Kanban boards",
      "Time tracking & analytics",
      "Custom fields & workflows",
      "100GB storage",
      "Priority support",
      "25+ integrations"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex requirements",
    popular: false,
    cta: "Contact Sales",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Advanced security & SSO",
      "Custom branding",
      "Dedicated success manager",
      "1TB+ storage",
      "Full API access",
      "All integrations",
      "24/7 premium support"
    ]
  }
];

const FeatureCell = ({ feature }: { feature: boolean | string }) => {
  if (typeof feature === "boolean") {
    return feature ? (
      <Check className="w-5 h-5 text-brand-teal mx-auto" />
    ) : (
      <X className="w-5 h-5 text-gray-300 mx-auto" />
    );
  }
  return (
    <span className="text-sm text-gray-700 text-center block">{feature}</span>
  );
};

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="text-brand-blue block">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your team. Start free and scale as you grow. 
            No hidden fees, no surprises.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Badge className="bg-brand-teal-light text-brand-teal border-brand-teal/20">
              14-day free trial
            </Badge>
            <Badge className="bg-brand-blue-light text-brand-blue border-brand-blue/20">
              No credit card required
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${
                plan.popular 
                  ? "feature-card ring-2 ring-brand-blue shadow-2xl scale-105" 
                  : "feature-card"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-blue text-white border-brand-blue flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Most Popular</span>
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    {typeof plan.price === "number" ? (
                      <>
                        <span className="text-5xl font-bold text-gray-900">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500 ml-2">
                          {plan.price === 0 ? "Forever free" : "/user/month"}
                        </span>
                      </>
                    ) : (
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <Button 
                    className={
                      plan.popular 
                        ? "btn-hero w-full" 
                        : "btn-hero-secondary w-full"
                    }
                    asChild
                  >
                    <Link to={plan.name === "Enterprise" ? "/contact" : "/auth"}>
                      {plan.cta}
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent className="pt-6 border-t">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-brand-blue-light">
                      Professional
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricingFeatures.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4">
                        <FeatureCell feature={feature.starter} />
                      </td>
                      <td className="px-6 py-4 bg-brand-blue-light/50">
                        <FeatureCell feature={feature.professional} />
                      </td>
                      <td className="px-6 py-4">
                        <FeatureCell feature={feature.enterprise} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and you'll be prorated for the current billing period.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is there a free trial?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! All paid plans come with a 14-day free trial. No credit card required to start. 
                The Starter plan is free forever for up to 5 team members.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What happens if I exceed my plan limits?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We'll notify you when you're approaching your limits. You can either upgrade your plan 
                or we'll help you manage your usage to stay within your current plan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer discounts for annual billing?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! Save 20% when you choose annual billing on Professional and Enterprise plans. 
                The discount is applied automatically at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using SprintFlow to deliver better results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cta" asChild>
              <Link to="/auth">Start Free Trial</Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;