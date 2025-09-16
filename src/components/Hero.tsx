import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Software Engineer | Network Solutions | Web Development';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center particles overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-electric/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-neon/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Image Placeholder */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 hover-glow">
            <div className="w-full h-full rounded-full bg-background-secondary flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">MK</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="block text-foreground">Mike Kagera</span>
          <span className="block bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
            Waitindi
          </span>
        </h1>

        {/* Animated Subtitle */}
        <div className="h-16 flex items-center justify-center mb-8">
          <h2 className="text-xl md:text-2xl text-foreground-muted font-mono">
            {displayedText}
            <span className="animate-blink">|</span>
          </h2>
        </div>

        {/* Bio Text */}
        <p className="text-lg md:text-xl text-foreground-subtle max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
          Passionate ICT professional specializing in system development, network solutions, and digital transformation. 
          Dedicated to improving public service delivery through innovative technology solutions.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
          <Button size="lg" className="btn-electric px-8 py-3 text-lg font-semibold">
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Mail className="mr-2" size={20} />
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up" style={{animationDelay: '2s'}}>
          <a 
            href="https://linkedin.com/in/mr-mike-654bb2344" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover-glow transition-all"
          >
            <Linkedin size={24} className="text-primary" />
          </a>
          <a 
            href="https://github.com/garymike07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover-glow transition-all"
          >
            <Github size={24} className="text-primary" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNextSection}
          className="animate-bounce animate-fade-in-up" 
          style={{animationDelay: '3s'}}
        >
          <ChevronDown size={32} className="text-primary hover:text-primary-glow transition-colors cursor-pointer" />
        </button>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-8 text-accent-electric/30 font-mono text-sm animate-float hidden lg:block">
        {'<code>'}
      </div>
      <div className="absolute top-3/4 right-8 text-accent-neon/30 font-mono text-sm animate-float hidden lg:block" style={{animationDelay: '3s'}}>
        {'</developer>'}
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-accent-purple/30 font-mono text-sm animate-float hidden lg:block" style={{animationDelay: '1.5s'}}>
        {'const skills = ["React", "Node.js", "Python"];'}
      </div>
    </section>
  );
};

export default Hero;