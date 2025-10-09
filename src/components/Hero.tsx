import React, { useState, useEffect } from 'react';
import { Download, Mail, ChevronDown, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroProfile } from '@/data/hero';
import { socialLinks } from '@/data/contact';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = heroProfile.title;
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(fullText);
      setCurrentIndex(fullText.length);
      return;
    }

    if (currentIndex < fullText.length) {
      const timeout = window.setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => window.clearTimeout(timeout);
    }
  }, [currentIndex, fullText, prefersReducedMotion]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroSectionClass = cn(
    'relative min-h-screen flex items-center justify-center overflow-hidden',
    prefersReducedMotion ? '' : 'particles',
  );
  const fadeInUp = prefersReducedMotion ? '' : 'animate-fade-in-up';
  const scaleIn = prefersReducedMotion ? '' : 'animate-scale-in';
  const glowPulse = prefersReducedMotion ? '' : 'animate-glow-pulse';
  const blink = prefersReducedMotion ? '' : 'animate-blink';
  const bounce = prefersReducedMotion ? '' : 'animate-bounce';

  return (
    <section id="home" className={heroSectionClass}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className={cn(
            'absolute top-20 left-10 w-72 h-72 bg-accent-electric/20 rounded-full blur-3xl',
            prefersReducedMotion ? '' : 'animate-float',
          )}
        />
        <div
          className={cn(
            'absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl',
            prefersReducedMotion ? '' : 'animate-float',
          )}
          style={{ animationDelay: prefersReducedMotion ? undefined : '2s' }}
        />
        <div
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-neon/10 rounded-full blur-3xl',
            prefersReducedMotion ? '' : 'animate-float',
          )}
          style={{ animationDelay: prefersReducedMotion ? undefined : '4s' }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <div className={cn('mb-8', scaleIn)}>
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 hover-glow">
            <picture>
              <source srcSet={heroProfile.profileImageWebp} type="image/webp" />
              <source srcSet={heroProfile.profileImage} type="image/jpeg" />
              <img
                src={heroProfile.profileImage}
                alt="Mike Kagera"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={cn('text-5xl md:text-7xl font-bold mb-6', fadeInUp)}>
          <span className="block text-foreground">{heroProfile.name}</span>
          <span className={cn('block bg-gradient-primary bg-clip-text text-transparent', glowPulse)}>
            {heroProfile.surname}
          </span>
        </h1>

        {/* Animated Subtitle */}
        <div className="h-16 flex items-center justify-center mb-6">
          <h2 className="text-xl md:text-2xl text-foreground-muted font-mono">
            {displayedText}
            <span className={blink}>|</span>
          </h2>
        </div>

        <p
          className={cn('text-lg md:text-xl text-foreground mx-auto mb-8 max-w-3xl', fadeInUp)}
          style={prefersReducedMotion ? undefined : { animationDelay: '0.75s' }}
        >
          {heroProfile.valueProposition}
        </p>

        {/* Bio Text */}
        <p
          className={cn('text-lg md:text-xl text-foreground-subtle max-w-2xl mx-auto mb-12', fadeInUp)}
          style={prefersReducedMotion ? undefined : { animationDelay: '1.25s' }}
        >
          {heroProfile.bio}
        </p>

        {/* Call to Action Buttons */}
        <div
          className={cn('flex flex-col sm:flex-row gap-4 justify-center mb-16', fadeInUp)}
          style={prefersReducedMotion ? undefined : { animationDelay: '1.75s' }}
        >
          <Button size="lg" className="btn-electric px-8 py-3 text-lg font-semibold" asChild>
            <a href={heroProfile.resumeLink} download>
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="px-8 py-3 text-lg font-semibold" asChild>
            <a href={heroProfile.callToActionLink}>
              <Calendar className="mr-2" size={20} />
              {heroProfile.callToActionLabel}
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href={`mailto:${heroProfile.contactEmail}`}>
              <Mail className="mr-2" size={20} />
              Get In Touch
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div
          className={cn('flex justify-center gap-6 mb-16', fadeInUp)}
          style={prefersReducedMotion ? undefined : { animationDelay: '2s' }}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover-glow transition-all"
              >
                <Icon size={24} className="text-primary" />
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNextSection}
          className={cn('inline-flex items-center justify-center', fadeInUp, bounce)}
          style={prefersReducedMotion ? undefined : { animationDelay: '2.25s' }}
        >
          <ChevronDown size={32} className="text-primary hover:text-primary-glow transition-colors cursor-pointer" />
        </button>
      </div>

      {/* Floating Code Elements */}
      <div
        className={cn(
          'absolute top-1/4 left-8 text-accent-electric/30 font-mono text-sm hidden lg:block',
          prefersReducedMotion ? '' : 'animate-float',
        )}
      >
        {'<code>'}
      </div>
      <div
        className={cn(
          'absolute top-3/4 right-8 text-accent-neon/30 font-mono text-sm hidden lg:block',
          prefersReducedMotion ? '' : 'animate-float',
        )}
        style={prefersReducedMotion ? undefined : { animationDelay: '3s' }}
      >
        {'</developer>'}
      </div>
      <div
        className={cn(
          'absolute bottom-1/4 left-1/4 text-accent-purple/30 font-mono text-sm hidden lg:block',
          prefersReducedMotion ? '' : 'animate-float',
        )}
        style={prefersReducedMotion ? undefined : { animationDelay: '1.5s' }}
      >
        {'const skills = ["React", "Node.js", "Python"];'}
      </div>
    </section>
  );
};

export default Hero;