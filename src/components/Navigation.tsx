import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationItems } from '@/data/navigation';
import { heroProfile } from '@/data/hero';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const sections = navigationItems.map((item) => document.getElementById(item.id));
    let frameId = 0;

    const updateFromScroll = () => {
      frameId = 0;
      const viewportThreshold = 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= viewportThreshold) {
          const nextId = navigationItems[i].id;
          setActiveSection((prev) => (prev === nextId ? prev : nextId));
          break;
        }
      }

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0;
      setScrollProgress(nextProgress);
    };

    const onScroll = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      frameId = window.requestAnimationFrame(updateFromScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateFromScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const roles = heroProfile.title.split('|').map((segment) => segment.trim());
  const badges = [...roles, heroProfile.location];

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-intense">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Mike K. Waitindi
              </span>
              <div className="mt-2 hidden md:flex flex-wrap items-center gap-2 text-xs text-foreground-muted">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-border/70 bg-background-secondary/70 px-2.5 py-1 leading-none"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        activeSection === item.id
                          ? 'text-primary shadow-glow'
                          : 'text-foreground-muted hover:text-foreground hover:bg-hover-bg'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <IconComponent size={16} />
                        <span>{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 glass-intense border-t border-border">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-primary bg-active-bg shadow-glow'
                      : 'text-foreground-muted hover:text-foreground hover:bg-hover-bg'
                  }`}
                >
                  <IconComponent size={20} className="mr-3" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-background-secondary">
        <div
          className="h-full bg-gradient-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};

export default Navigation;