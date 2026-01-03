import { Link } from "react-router-dom";
import { ArrowRight, Shield, Rocket, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ConsenTerra_Logo.png";
import FunFactCard from "@/components/FunFactCard";

const solutions = [
  {
    icon: Shield,
    name: "PriXplainer",
    tagline: "Understand before you consent.",
    description: "AI-powered privacy policy analysis that makes invisible data practices visible.",
    href: "/solutions/prixplainer",
  },
  {
    icon: Rocket,
    name: "FoundrFATE",
    tagline: "Founder success shouldn't feel like luck.",
    description: "Helping early-stage founders understand the forces shaping their journey.",
    href: "/solutions/foundrfate",
  },
  {
    icon: Leaf,
    name: "TrustEarthy",
    tagline: "Small swaps. Real impact.",
    description: "Make sustainable consumption choices with trusted comparisons.",
    href: "/solutions/trusteartthy",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-earth/10 rounded-full blur-3xl" />

        <div className="section-container relative">
          <div className="flex flex-col items-center text-center animate-fade-in-up">
            {/* Animated Logo */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-gentle" />
              <img
                src={logo}
                alt="ConsenTerra"
                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 animate-float"
              />
            </div>

            {/* Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Clarity for{" "}
              <span className="text-gradient">Everyday Decisions</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              In today's complex world, understanding is power. ConsenTerra empowers you with 
              AI-driven insights for privacy, sustainability, and strategic decision-making.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI-powered tools designed to translate dense information into insight, context, and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={solution.name}
                to={solution.href}
                className="group relative p-6 lg:p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {solution.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {solution.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Did You Know?
            </h2>
            <p className="text-muted-foreground">
              Daily insights on privacy, startups, and sustainability
            </p>
          </div>
          <FunFactCard />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-forest-light text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to gain clarity?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join us in transforming complexity into confidence. Let's make informed decisions together.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-base px-8">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
