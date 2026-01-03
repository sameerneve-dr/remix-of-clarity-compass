import { Link } from "react-router-dom";
import { Leaf, CheckCircle, Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Sustainable Comparisons",
    description: "Compare products based on their environmental impact.",
  },
  {
    title: "Impact Snapshots",
    description: "Quick visual summaries of your choices' environmental footprint.",
  },
  {
    title: "Low-Overwhelm Education",
    description: "Practical tips without the guilt or information overload.",
  },
  {
    title: "Habit-Based Nudges",
    description: "Small, sustainable swaps that fit naturally into your routine.",
  },
];

export default function TrustEarthy() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-earth to-sage text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/20 mb-6">
              <Leaf className="h-8 w-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">TrustEarthy</h1>
            <p className="text-xl text-primary-foreground/90 font-medium mb-4">
              Small swaps. Real impact.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              TrustEarthy helps users make sustainable consumption choices through trusted 
              comparisons, impact snapshots, and habit-friendly recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-earth/5 border border-earth/20 rounded-xl">
              <Sprout className="h-6 w-6 text-earth flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">The Opportunity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The smallest daily swaps often create the largest lifetime impact. 80% of a 
                  product's environmental impact is determined at the design phase. By making 
                  informed choices, you can drive meaningful change without overwhelming effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Key Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-6 bg-background rounded-xl border border-border"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to make sustainable choices easier?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us to learn more about TrustEarthy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
