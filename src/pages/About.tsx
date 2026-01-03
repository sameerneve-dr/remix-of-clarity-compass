import { Linkedin, Users, Target, Eye } from "lucide-react";

const team = [
  {
    name: "Shikha Soneji, Ph.D. (C)",
    role: "CEO & President",
    linkedin: "https://www.linkedin.com/in/shikha-soneji-22620b111/",
    bio: "I'm a Data Scientist and a Ph.D. candidate in Informatics (ABD) with a passion for human-centered AI, digital privacy, and ethical automation. My work bridges enterprise AI systems with research-grade rigor to make AI not just smarter—but more trustworthy, interpretable, and impactful.",
  },
  {
    name: "Sameer Neve, Ph.D.",
    role: "Secretary & Chief Sustainability Officer",
    linkedin: "https://www.linkedin.com/in/nevesameer/",
    bio: "Innovative Environmental Engineer & Sustainability Strategist with a Ph.D. and 7+ years of experience bridging engineering, climate resilience, and policy. Expert in decarbonization, remediation, renewable energy, and ESG analytics. Known for translating complex R&D into scalable, cost-effective solutions.",
  },
  {
    name: "Neelam Mulchandani, Ph.D.",
    role: "Financial Advisor",
    linkedin: null,
    bio: "Professor of English at R.K.T. College (University of Mumbai), PG-recognized educator, and published scholar. Her work spans feminism, cultural displacement, and Indian literary studies, bringing humanistic insight to financial and ethical decision-making.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="section-container text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About ConsenTerra
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe everyone deserves to understand what they invest their time, money, data, and trust in.
          </p>
        </div>
      </section>

      {/* Start With Why */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex flex-col lg:flex-row items-center gap-12">
              {/* Circle Visual */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary to-forest-light flex items-center justify-center shadow-xl">
                  <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full bg-background flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-2xl lg:text-3xl font-bold text-gradient">
                        Understanding
                      </p>
                      <p className="text-lg lg:text-xl font-semibold text-foreground mt-1">
                        is Power
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Start With Why
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In today's world, understanding is power. We believe everyone deserves to understand 
                  what they invest their time, money, data, and trust in. Our solutions translate 
                  dense information into insight, context, and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="p-8 bg-background rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals and organizations with AI-driven clarity, helping them make 
                informed, ethical, and confident decisions in an increasingly complex world.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-background rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                ConsenTerra aims to become a trusted AI solutions provider for everyone—from everyday 
                consumers to global enterprises—by transforming complexity into clarity across privacy, 
                sustainability, and strategic decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Meet the experts driving ConsenTerra's mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-forest-light/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
