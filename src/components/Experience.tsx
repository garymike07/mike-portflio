import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Career Journey"
      title={(
        <>
          Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
        </>
      )}
      description="A track record of delivering impactful technology solutions across the public and private sectors."
      contentClassName="relative"
    >
      <div className="pointer-events-none absolute inset-y-0 left-4 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2" />
      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={exp.title}
              className={cn(
                "relative flex flex-col gap-6 md:flex-row md:items-center",
                isEven ? "md:flex-row" : "md:flex-row-reverse",
              )}
            >
              <div className="absolute left-4 top-10 z-10 flex -translate-y-1/2 md:left-1/2 md:-translate-x-1/2">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br glass hover-glow",
                    exp.gradientClassName,
                  )}
                >
                  <Icon className={exp.iconClassName} size={20} />
                </div>
              </div>

              <div
                className={cn(
                  "w-full rounded-2xl",
                  isEven ? "md:pr-16 md:text-left" : "md:pl-16 md:text-left",
                )}
              >
                <div
                  className="glass rounded-2xl p-6 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className={cn("rounded-full px-3 py-1 text-xs font-medium", exp.badgeClassName)}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-sm text-foreground-muted">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <h3 className="mb-1 text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="mb-2 text-primary font-medium">{exp.company}</p>
                    <div className="flex items-center text-sm text-foreground-muted">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="mb-4 text-foreground-muted leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start text-sm text-foreground-muted">
                          <div className={cn("mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full", exp.dotClassName)} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;