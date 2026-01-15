import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const designResponsibilities = [
  "Brand design & visual assets creation",
  "Website & campaign design",
  "Social media planning and content creation",
  "Competitor analysis and market research",
];

const designSkills = [
  "Canva, Adobe Creative Suite, MS Office",
  "AI/LLM tools for content creation",
  "Website development basics",
  "Creative strategy and ideation",
];

const sweResponsibilities = [
  "Develop and maintain web applications using React and TypeScript",
  "Build and integrate APIs and backend services",
  "Collaborate on AI-powered feature development",
  "Write clean, tested, and documented code",
];

const sweSkills = [
  "React, TypeScript, JavaScript",
  "REST APIs and database fundamentals",
  "Git version control",
  "Problem-solving and debugging skills",
];

const benefits = [
  "Portfolio-ready work with real impact",
  "Direct mentorship from founders",
  "Contribute to meaningful, ethical tech",
  "Networking opportunities in AI & sustainability",
];

export default function Career() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="section-container text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
            <Briefcase className="h-7 w-7" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Join Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of a mission-driven team building AI solutions that empower everyday decisions.
          </p>
        </div>
      </section>

      {/* About ConsenTerra */}
      <section className="py-12">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">About ConsenTerra</h2>
            <p className="text-muted-foreground leading-relaxed">
              ConsenTerra, Inc. is an AI-powered solutions company focused on bringing clarity to 
              everyday decisions. Our tools help users navigate privacy, sustainability, and 
              strategic choices with confidence. We're building technology that's trustworthy, 
              transparent, and human-centered.
            </p>
          </div>
        </div>
      </section>

      {/* Open Role */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Role Header */}
            <div className="bg-background rounded-2xl border border-border p-8 mb-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Design and Advertising Intern
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      100% Remote
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      Jan 2026 – May 2026
                    </span>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/contact">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Responsibilities */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {designResponsibilities.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Skills Required</h3>
                  <ul className="space-y-2">
                    {designSkills.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">What's In It For You</h3>
                  <ul className="space-y-2">
                    {benefits.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Software Engineering Intern Role */}
            <div className="bg-background rounded-2xl border border-border p-8 mb-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500">
                      <Code className="h-4 w-4" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      Software Engineering Intern
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      100% Remote
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      Jan 2026 – May 2026
                    </span>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/contact">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Responsibilities */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {sweResponsibilities.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Skills Required</h3>
                  <ul className="space-y-2">
                    {sweSkills.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">What's In It For You</h3>
                  <ul className="space-y-2">
                    {benefits.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* No Open Roles Notice */}
            <div className="text-center p-8 bg-background rounded-2xl border border-border">
              <p className="text-muted-foreground mb-4">
                Don't see the right fit? We're always looking for talented individuals.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">
                  Send Us Your Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
