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
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Start With <span className="text-gradient">Why</span></h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
              The Golden Circle: Great leaders and organizations think, act, and communicate from the inside out.
            </p>
          </AnimatedSection>
          
          <div className="flex justify-center items-center">
            <div className="relative w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] lg:w-[650px] lg:h-[650px]">
              
              {/* Rotating outer ring decoration */}
              <motion.div
                className="absolute inset-[-12px] sm:inset-[-18px] rounded-full border border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Outer Circle - What */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-border/50 flex items-start justify-center pt-8 sm:pt-12 lg:pt-14"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  background: 'radial-gradient(circle at center, transparent 55%, hsl(var(--muted) / 0.15) 100%)',
                }}
              >
                <div className="text-center px-6 sm:px-8 max-w-[320px] sm:max-w-sm">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-muted-foreground mb-2">What</h3>
                  <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
                    We create AI-powered solutions to solve everyday problems.
                  </p>
                </div>
              </motion.div>

              {/* Middle Circle - How */}
              <motion.div
                className="absolute rounded-full border-2 border-primary/40 flex items-start justify-center pt-6 sm:pt-8 lg:pt-10"
                style={{
                  top: '18%',
                  left: '18%',
                  right: '18%',
                  bottom: '18%',
                  background: 'radial-gradient(circle at center, transparent 50%, hsl(var(--primary) / 0.08) 100%)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 hsl(var(--primary) / 0)',
                    '0 0 25px 8px hsl(var(--primary) / 0.12)',
                    '0 0 0 0 hsl(var(--primary) / 0)',
                  ],
                }}
              >
                <div className="text-center px-4 sm:px-6 max-w-[220px] sm:max-w-[280px] lg:max-w-[320px]">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground/90 mb-2">How</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Our solutions translate dense information into insight, context, and confidence.
                  </p>
                </div>
              </motion.div>

              {/* Inner Circle - Why (Core) */}
              <motion.div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  top: '32%',
                  left: '32%',
                  right: '32%',
                  bottom: '32%',
                  background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 40px hsl(var(--glow-primary) / 0.35), 0 0 80px hsl(var(--glow-primary) / 0.2)',
                    '0 0 60px hsl(var(--glow-primary) / 0.55), 0 0 120px hsl(var(--glow-primary) / 0.3)',
                    '0 0 40px hsl(var(--glow-primary) / 0.35), 0 0 80px hsl(var(--glow-primary) / 0.2)',
                  ],
                }}
              >
                <div className="text-center px-4 sm:px-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-foreground mb-1 sm:mb-2">Why</h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-primary-foreground/90 leading-relaxed max-w-[100px] sm:max-w-[140px] lg:max-w-[180px]">
                    Everyone deserves clarity and understanding.
                  </p>
                </div>
              </motion.div>

              {/* Sequential Flow Arrows with Labels */}
              {/* Arrow 1 - Top Right - First in sequence */}
              <motion.div
                className="absolute flex flex-col items-center gap-1"
                style={{ top: '8%', right: '8%' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary sm:w-5 sm:h-5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <span className="text-[9px] sm:text-[10px] text-primary font-medium">Step 1</span>
              </motion.div>

              {/* Arrow 2 - Right - Second in sequence */}
              <motion.div
                className="absolute flex flex-col items-center gap-1"
                style={{ top: '50%', right: '-2%', transform: 'translateY(-50%)' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, type: "spring" }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary sm:w-5 sm:h-5">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <span className="text-[9px] sm:text-[10px] text-primary font-medium">Step 2</span>
              </motion.div>

              {/* Arrow 3 - Bottom Right - Third in sequence */}
              <motion.div
                className="absolute flex flex-col items-center gap-1"
                style={{ bottom: '8%', right: '8%' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.0 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary sm:w-5 sm:h-5">
                    <path d="M17 7L7 17M7 17H17M7 17V7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <span className="text-[9px] sm:text-[10px] text-primary font-medium">Step 3</span>
              </motion.div>

              {/* Inside Out Label - Left side */}
              <motion.div
                className="absolute left-[-60px] sm:left-[-90px] lg:left-[-120px] top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
              >
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary sm:w-6 sm:h-6">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.div>
                  <div className="text-center">
                    <p className="text-xs sm:text-sm font-bold text-primary">Inside</p>
                    <p className="text-xs sm:text-sm font-bold text-primary">Out</p>
                  </div>
                  <motion.div
                    className="h-16 sm:h-20 w-0.5 bg-gradient-to-b from-primary/50 to-transparent"
                    animate={{ scaleY: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Flow Direction Indicator - Bottom */}
              <motion.div
                className="absolute bottom-[-50px] sm:bottom-[-60px] left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 }}
              >
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <motion.svg 
                    width="16" height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-primary"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                  <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap">
                    Why → How → What
                  </span>
                </div>
              </motion.div>

              {/* Connecting arc lines between circles */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {/* Animated flow line from center outward */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="none"
                  stroke="url(#flowGradient)"
                  strokeWidth="0.5"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="url(#flowGradient)"
                  strokeWidth="0.4"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#flowGradient)"
                  strokeWidth="0.3"
                  strokeDasharray="4 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1.1 }}
                />
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Decorative orbiting dots */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={angle}
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                  style={{
                    top: `${50 + 46 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 46 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                    background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                    boxShadow: '0 0 12px hsl(var(--glow-primary) / 0.6)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                />
              ))}
            </div>
          </div>

          {/* Philosophy Explanation */}
          <motion.div 
            className="mt-16 sm:mt-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-lg sm:text-xl font-bold text-primary-foreground">1</span>
                </div>
                <h4 className="font-bold text-foreground mb-1">Start with Why</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Purpose and belief drive everything we do.</p>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center">
                  <span className="text-lg sm:text-xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-bold text-foreground mb-1">Define the How</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Our unique approach and values guide our methods.</p>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-xl bg-muted/30 border border-border/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-muted/50 border-2 border-border flex items-center justify-center">
                  <span className="text-lg sm:text-xl font-bold text-muted-foreground">3</span>
                </div>
                <h4 className="font-bold text-foreground mb-1">Deliver the What</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Our products are the tangible proof of our beliefs.</p>
              </div>
            </div>
          </motion.div>
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