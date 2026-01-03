import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/ConsenTerra_Logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "PriXplainer",
    description: "Understand before you consent. AI-powered privacy policy analysis.",
    href: "/solutions/prixplainer",
  },
  {
    title: "FoundrFATE",
    description: "Founder success shouldn't feel like luck. Startup guidance.",
    href: "/solutions/foundrfate",
  },
  {
    title: "TrustEarthy",
    description: "Small swaps. Real impact. Sustainable choices made easy.",
    href: "/solutions/trusteartthy",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <img src={logo} alt="ConsenTerra" className="h-10 w-10" />
          <span className="hidden sm:block text-xl font-semibold text-foreground">
            ConsenTerra
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger 
                      className={cn(
                        "bg-transparent hover:bg-secondary/50",
                        isActive(link.href) && "text-primary font-medium"
                      )}
                    >
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 bg-popover">
                        {solutions.map((solution) => (
                          <li key={solution.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={solution.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none text-foreground">
                                  {solution.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {solution.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                        isActive(link.href) && "text-primary font-semibold"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="section-container py-4 space-y-2">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className={cn(
                      "flex items-center justify-between w-full py-2 px-3 rounded-md text-sm font-medium transition-colors hover:bg-secondary",
                      isActive(link.href) && "text-primary"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isSolutionsOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isSolutionsOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.title}
                          to={solution.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {solution.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block py-2 px-3 rounded-md text-sm font-medium transition-colors hover:bg-secondary",
                    isActive(link.href) && "text-primary bg-secondary"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
