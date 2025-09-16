import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground-muted">
            © 2024 Mike Kagera Waitindi. Crafted with passion and cutting-edge technology.
          </p>
          <p className="text-sm text-foreground-subtle mt-2">
            Software Engineer | Network Solutions | Web Development
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
