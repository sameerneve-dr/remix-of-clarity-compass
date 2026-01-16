import { motion } from "framer-motion";
import { Linkedin, Users, Target, Eye } from "lucide-react";
import SameerPhoto from "@/assets/Sameer_Neve.png";
import ShikhaPhoto from "@/assets/Shikha_Soneji.jpg";
import AuroraBackground from "@/components/AuroraBackground";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const team = [
  {
    name: "Shikha Soneji, Ph.D. (C)",
    role: "CEO & President",
    linkedin: "https://www.linkedin.com/in/shikha-soneji-22620b111/",
    bio: "I'm a Data Scientist and a Ph.D. candidate in Informatics (ABD) with a passion for human-centered AI, digital privacy, and ethical automation.",
    photo: ShikhaPhoto,
  },
  {
    name: "Sameer Neve, Ph.D.",
    role: "Secretary & Chief Sustainability Officer",
    linkedin: "https://www.linkedin.com/in/nevesameer/",
    bio: "Innovative Environmental Engineer & Sustainability Strategist with a Ph.D. and 7+ years of experience bridging engineering, climate resilience, and policy.",
    photo: SameerPhoto,
  },
  {
    name: "Neelam Mulchandani, Ph.D.",
    role: "Financial Advisor",
    linkedin: null,
    bio: "Professor of English at R.K.T. College (University of Mumbai), PG-recognized educator, and published scholar.",
    photo: null,
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <AuroraBackground showParticles={false} />
        <div className="section-container text-center relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gradient mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About ConsenTerra
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe everyone deserves to understand what they invest their time, money, data, and trust in.
          </motion.p>
        </div>
      </section>

      {/* Golden Circle - Concentric Circles Design */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Start With <span className="text-gradient">Why</span></h2>
          </AnimatedSection>
          
          <div className="flex justify-center items-center">
            <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px]">
              
              {/* Rotating outer ring decoration */}
              <motion.div
                className="absolute inset-[-10px] sm:inset-[-15px] rounded-full border border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Outer Circle - What */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-border/50 flex items-start justify-center pt-6 sm:pt-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  background: 'radial-gradient(circle at center, transparent 60%, hsl(var(--muted) / 0.1) 100%)',
                }}
              >
                <div className="text-center px-4 max-w-[280px] sm:max-w-xs">
                  <h3 className="text-base sm:text-lg font-bold text-muted-foreground mb-1">What</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                    We create AI-powered solutions to solve everyday problems.
                  </p>
                </div>
              </motion.div>

              {/* Middle Circle - How (with pulse animation) */}
              <motion.div
                className="absolute rounded-full border-2 border-primary/30 flex items-start justify-center pt-4 sm:pt-6"
                style={{
                  top: '15%',
                  left: '15%',
                  right: '15%',
                  bottom: '15%',
                  background: 'radial-gradient(circle at center, transparent 55%, hsl(var(--primary) / 0.05) 100%)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 hsl(var(--primary) / 0)',
                    '0 0 20px 5px hsl(var(--primary) / 0.1)',
                    '0 0 0 0 hsl(var(--primary) / 0)',
                  ],
                }}
              >
                <div className="text-center px-3 max-w-[200px] sm:max-w-[240px]">
                  <h3 className="text-base sm:text-lg font-bold text-foreground/80 mb-1">How</h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                    Our solutions translate dense information into insight, context, and confidence.
                  </p>
                </div>
              </motion.div>

              {/* Inner Circle - Why (Core) with pulse glow */}
              <motion.div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  top: '30%',
                  left: '30%',
                  right: '30%',
                  bottom: '30%',
                  background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 30px hsl(var(--glow-primary) / 0.3), 0 0 60px hsl(var(--glow-primary) / 0.15)',
                    '0 0 50px hsl(var(--glow-primary) / 0.5), 0 0 100px hsl(var(--glow-primary) / 0.25)',
                    '0 0 30px hsl(var(--glow-primary) / 0.3), 0 0 60px hsl(var(--glow-primary) / 0.15)',
                  ],
                }}
              >
                <div className="text-center px-3 sm:px-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-foreground mb-1">Why</h3>
                  <p className="text-[9px] sm:text-[10px] lg:text-xs text-primary-foreground/90 leading-relaxed">
                    Everyone deserves to understand what they invest their time, money, data, and trust in.
                  </p>
                </div>
              </motion.div>

              {/* Flow arrows - From center outward */}
              {/* Arrow 1 - Top */}
              <motion.div
                className="absolute"
                style={{ top: '22%', left: '50%', transform: 'translateX(-50%)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <motion.svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="text-primary/60"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.div>

              {/* Arrow 2 - Bottom */}
              <motion.div
                className="absolute"
                style={{ bottom: '22%', left: '50%', transform: 'translateX(-50%) rotate(180deg)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="text-primary/60"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.div>

              {/* Arrow 3 - Left */}
              <motion.div
                className="absolute"
                style={{ top: '50%', left: '22%', transform: 'translateY(-50%) rotate(-90deg)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <motion.svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="text-primary/60"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.div>

              {/* Arrow 4 - Right */}
              <motion.div
                className="absolute"
                style={{ top: '50%', right: '22%', transform: 'translateY(-50%) rotate(90deg)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <motion.svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="text-primary/60"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                >
                  <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.div>

              {/* Connecting arc lines between circles */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {/* Outer to middle connection lines */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="url(#gradientLine)"
                  strokeWidth="0.3"
                  strokeDasharray="4 8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="27"
                  fill="none"
                  stroke="url(#gradientLine)"
                  strokeWidth="0.3"
                  strokeDasharray="3 6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                />
                <defs>
                  <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Decorative orbiting dots */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <motion.div
                  key={angle}
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                  style={{
                    top: `${50 + 48 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 48 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                    background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                    boxShadow: '0 0 10px hsl(var(--glow-primary) / 0.5)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                />
              ))}

              {/* Inner orbiting dots (smaller, faster) */}
              {[30, 150, 270].map((angle, i) => (
                <motion.div
                  key={`inner-${angle}`}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/50"
                  style={{
                    top: `${50 + 28 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 28 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mobile-friendly text below circles */}
          <div className="mt-10 sm:mt-12 max-w-2xl mx-auto text-center">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4">
              In today's world, understanding is power. We believe everyone deserves to understand 
              what they invest their time, money, data, and trust in.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Our Mission", desc: "To empower individuals and organizations with AI-driven clarity, helping them make informed, ethical, and confident decisions." },
              { icon: Eye, title: "Our Vision", desc: "ConsenTerra aims to become a trusted AI solutions provider by transforming complexity into clarity across privacy, sustainability, and strategic decision-making." },
            ].map((item, i) => (
              <GlowCard key={item.title} delay={i * 0.15} className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <GlowCard key={member.name} delay={i * 0.15} className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl font-bold text-primary">{member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}