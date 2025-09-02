
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 gradient-cta">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Boost your team's productivity today.
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of teams who've transformed their workflow with SprintFlow
        </p>
        <Button className="btn-cta text-lg">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
