import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import FeaturedProjects from '@/components/FeaturedProjects';
import Education from '@/components/Education';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" className="space-y-24 sm:space-y-28 lg:space-y-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground-muted">© 2025 Mike Kagera Waitindi. Crafted with passion and cutting-edge technology.</p>
          
        </div>
      </footer>
    </div>;
};
export default Index;