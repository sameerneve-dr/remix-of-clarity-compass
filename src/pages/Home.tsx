import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Rocket, Leaf, CheckCircle, Sparkles, Download, Chrome, Settings, Puzzle } from "lucide-react";
import logo from "@/assets/ConsenTerra_Logo.png";
import AuroraBackground from "@/components/AuroraBackground";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import RotatingHeadlinePhrase from "@/components/RotatingHeadlinePhrase";

const solutions = [
  {
    id: "prixplainer",
    name: "PriXplainer",
    tagline: "Understand before you consent.",
    description: "PriXplainer decodes privacy policies and terms of service using AI-driven analysis, risk indicators, and human-readable summaries—making invisible data practices visible.",
    capabilities: [
      "AI-generated policy summaries",
      "Risk and severity indicators",
      "Ontology-based clause classification",
      "User-centric explanations (no legal jargon)"
    ],
    icon: Shield,
    href: "/solutions/prixplainer",
    color: "text-primary"
  },
  {
    id: "foundrfate",
    name: "FoundrFATE",
    tagline: "Founder success shouldn't feel like luck.",
    description: "FoundrFATE helps early-stage founders understand the forces shaping their journey—before those forces decide for them.",
    capabilities: [
      "Funding readiness assessment",
      "Investor education & outreach guidance",
      "Plain-language fundraising explanations",
      "Founder-first, bias-aware design"
    ],
    icon: Rocket,
    href: "/solutions/foundrfate",
    color: "text-ocean"
  },
  {
    id: "trustearthy",
    name: "TrustEarthy",
    tagline: "Small swaps. Real impact.",
    description: "TrustEarthy helps users make sustainable consumption choices through trusted comparisons, impact snapshots, and habit-friendly recommendations.",
    capabilities: [
      "Sustainable product comparisons",
      "Impact snapshots",
      "Practical, low-overwhelm education",
      "Habit-based nudges"
    ],
    icon: Leaf,
    href: "/solutions/trusteartthy",
    color: "text-eco-green"
  }
];

export default function Home() {
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden">
        <AuroraBackground showParticles={true} />
        
        <div className="section-container h-full py-8 lg:py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Side - Large Logo with parallax effect */}
            <motion.div
              className="flex justify-center lg:justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.img
                src={logo}
                alt="ConsenTerra"
                className="w-80 h-80 sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] xl:w-[650px] xl:h-[650px] object-contain"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "drop-shadow(0 0 60px hsl(270 80% 60% / 0.2))",
                }}
              />
            </motion.div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left flex flex-col">
              {/* Eyebrow Text */}
              <motion.p
                className="text-xs tracking-[0.25em] text-primary/80 mb-6 uppercase flex items-center justify-center lg:justify-start gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="h-3 w-3" />
                CLARITY FOR EVERYDAY DECISIONS
                <Sparkles className="h-3 w-3" />
              </motion.p>

              {/* Main Headline */}
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                ConsenTerra builds simple{" "}
                <span className="text-gradient">AI tools</span>
                <br />
                for clarity in <RotatingHeadlinePhrase />
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-3 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
              >
                Privacy, early-stage entrepreneurship, and sustainable living,
                <br className="hidden sm:block" />
                explained without the noise.
              </motion.p>

              {/* Micro-copy */}
              <motion.p
                className="text-sm text-muted-foreground/60 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                Less guesswork. More clear choices.
              </motion.p>

              {/* Solutions Button */}
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                <Button
                  size="lg"
                  variant="glow"
                  className="rounded-full px-8 text-base spark-hover"
                  onClick={() => setShowSolutions(!showSolutions)}
                >
                  Explore our tools
                  <motion.span
                    animate={{ rotate: showSolutions ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>

              {/* Solutions Dropdown */}
              {showSolutions && (
                <motion.div
                  className="mt-6 w-full max-w-4xl mx-auto lg:mx-0 glass-strong rounded-2xl shadow-2xl p-6 relative z-50"
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{
                    boxShadow: "0 0 50px hsl(270 80% 60% / 0.15), 0 25px 50px -12px hsl(0 0% 0% / 0.5)",
                  }}
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => {
                      const Icon = solution.icon;
                      return (
                        <motion.div
                          key={solution.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.12 }}
                        >
                          <Link
                            to={solution.href}
                            className="group block p-5 bg-surface-1 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 text-left h-full"
                            style={{
                              background: "linear-gradient(145deg, hsl(240 10% 10%) 0%, hsl(240 10% 7%) 100%)",
                            }}
                          >
                            <motion.div
                              className={`inline-flex p-2 rounded-lg bg-primary/10 mb-3 ${solution.color}`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon className="h-5 w-5" />
                            </motion.div>
                            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                              {solution.name}
                            </h3>
                            <p className="text-sm text-primary/80 italic mb-3">
                              {solution.tagline}
                            </p>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                              {solution.description}
                            </p>
                            <ul className="space-y-1.5">
                              {solution.capabilities.map((cap) => (
                                <li
                                  key={cap}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                                  {cap}
                                </li>
                              ))}
                            </ul>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Click outside to close */}
      {showSolutions && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowSolutions(false)}
        />
      )}

      {/* Welcome Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl mx-auto" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
              Welcome to{" "}
              <span className="text-gradient">ConsenTerra</span>
            </h2>

            <div className="prose-editorial text-base sm:text-lg space-y-6">
              <AnimatedSection delay={0.2}>
                <p>
                  ConsenTerra builds thoughtful AI tools that help people understand complex
                  information and make better choices in their daily lives. We focus on areas
                  where decisions often feel confusing, rushed, or unclear, such as digital
                  privacy, early-stage entrepreneurship, and sustainable living.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p>
                  Our goal is not to overwhelm users with technical detail or marketing language.
                  Instead, we aim to explain things clearly, highlight what matters most, and
                  support informed decision-making. Each product we build is designed to be
                  practical, transparent, and easy to use, so people can move forward with
                  confidence rather than uncertainty.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="mb-0">
                  At ConsenTerra, we believe clarity builds trust. By turning complexity into
                  understanding, we help individuals and organizations make choices that align
                  with their values, responsibilities, and long-term goals.
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Chrome Extension Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Chrome className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Browser Extension</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get the <span className="text-gradient">PriXplainer Extension</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scan any website's privacy policy instantly with our Chrome extension. Get AI-powered risk analysis right in your browser.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left - Extension Preview */}
            <AnimatedSection delay={0.1}>
              <GlowCard className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">PriXplainer</h3>
                      <p className="text-sm text-muted-foreground">Privacy Policy Scanner</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "One-click privacy policy analysis",
                      "Real-time risk scoring",
                      "AI-powered summaries",
                      "Works on any website"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                    <Puzzle className="h-3 w-3" />
                    <span>Free Chrome Extension</span>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>

            {/* Right - Installation Steps */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  How to Install (Developer Mode)
                </h3>
                
                {[
                  {
                    step: 1,
                    title: "Download the extension",
                    description: "Download the extension files from our repository or contact us for the latest version."
                  },
                  {
                    step: 2,
                    title: "Open Chrome Extensions",
                    description: "Navigate to chrome://extensions/ in your Chrome browser."
                  },
                  {
                    step: 3,
                    title: "Enable Developer Mode",
                    description: "Toggle on 'Developer mode' in the top-right corner of the extensions page."
                  },
                  {
                    step: 4,
                    title: "Load the extension",
                    description: "Click 'Load unpacked' and select the browser-extension folder."
                  },
                  {
                    step: 5,
                    title: "Pin & Use",
                    description: "Pin the extension to your toolbar and click it on any website to scan!"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-4">
                  <Link to="/extension">
                    <Button variant="glow" className="rounded-full px-6">
                      <Download className="h-4 w-4 mr-2" />
                      View Extension Details
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features/Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built on <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every tool we create is designed with clarity, trust, and user-first principles at its heart.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Clarity",
                description: "We transform complex information into understandable insights that empower better decisions.",
                icon: "✨",
              },
              {
                title: "Trust",
                description: "Every product is built with transparency and ethical AI principles at its foundation.",
                icon: "🛡️",
              },
              {
                title: "Impact",
                description: "We focus on real-world outcomes that make a meaningful difference in people's lives.",
                icon: "🎯",
              },
            ].map((value, index) => (
              <GlowCard key={value.title} delay={index * 0.15} className="p-8">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}