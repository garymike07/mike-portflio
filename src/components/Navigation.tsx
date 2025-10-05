import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Mail, Layers, ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Layers },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certificates', label: 'Certificates', icon: ScrollText },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= 120) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-intense">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Mike K. Waitindi
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NAV_ITEMS.map((item) => {
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
            {NAV_ITEMS.map((item) => {
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
          style={{
            width: `${Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>
    </>
  );
};

export default Navigation;