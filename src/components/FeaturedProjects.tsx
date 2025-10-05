import React from 'react';
import { ArrowUpRight, ExternalLink, Code2, Users, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 'techlearn',
    title: 'TechLearn LMS Platform',
    summary:
      'An interactive learning management system providing curated tech courses, instructor dashboards, and progress tracking for students.',
    contributions: [
      'Architected responsive course browsing experience with animated hero and trackable milestones.',
      'Integrated reusable UI patterns powered by shadcn/ui for consistent design language.',
      'Optimized content delivery for fast navigation across modules and lessons.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/techlearn-thumbnail.png',
    url: 'https://techlearn-pi.vercel.app/',
    roleLabel: 'Product Lead',
    metrics: '1k+ demo visitors | Sub-second route transitions',
  },
  {
    id: 'network-three-tau',
    title: 'Network Infrastructure Showcase',
    summary:
      'A modern landing experience highlighting enterprise network services, on-prem support, and managed cloud monitoring.',
    contributions: [
      'Crafted narrative-driven sections weaving together services, testimonials, and call-to-actions.',
      'Implemented gradient-heavy glassmorphism system for premium visual storytelling.',
      'Delivered accessibility-friendly layout with keyboard and screen reader support.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/network-three-tau-thumbnail.png',
    url: 'https://network-three-tau.vercel.app/',
    roleLabel: 'Lead Frontend Engineer',
    metrics: '4 service verticals | 100% Lighthouse accessibility score',
  },
  {
    id: 'artful-bice',
    title: 'Artful Creative Studio',
    summary:
      'A bold portfolio for a creative studio featuring gallery reels, service breakdowns, and brand storytelling moments.',
    contributions: [
      'Designed immersive hero transitions with layered parallax and spotlight effects.',
      'Built modular content blocks enabling rapid iteration on campaigns and offerings.',
      'Optimized imagery with lazy loading strategies to keep interactions smooth.',
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/artful-bice-thumbnail.png',
    url: 'https://artful-bice.vercel.app/',
    roleLabel: 'Design Technologist',
    metrics: '30+ portfolio pieces | <1.5s Largest Contentful Paint',
  },
];

const iconMap = {
  contributions: Code2,
  techStack: Rocket,
  metrics: Users,
};

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A curated selection of live deployments showcasing the breadth of my product thinking,
            interaction design, and full-stack engineering capabilities.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const ContributionIcon = iconMap.contributions;
            const TechIcon = iconMap.techStack;
            const MetricIcon = iconMap.metrics;

            return (
              <article
                key={project.id}
                className="group glass rounded-3xl overflow-hidden flex flex-col hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 glass-intense rounded-full text-xs uppercase tracking-wide text-foreground-muted">
                      {project.roleLabel}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-3">
                      {project.title}
                      <ExternalLink className="text-primary" size={20} />
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">{project.summary}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                        <ContributionIcon size={16} /> Impact Highlights
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm text-foreground-muted">
                        {project.contributions.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                        <TechIcon size={16} /> Core Stack
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-background-tertiary text-xs font-medium text-foreground-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                        <MetricIcon size={16} /> Snapshot
                      </h4>
                      <p className="mt-2 text-sm text-foreground-muted">{project.metrics}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <Button asChild className="w-full btn-electric">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        View Live Project
                        <ArrowUpRight size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
