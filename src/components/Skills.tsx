import React, { useState, useEffect, useRef } from 'react';
import { Section } from '@/components/layout/Section';
import { coreCompetencies, skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      ref={sectionRef}
      id="skills"
      eyebrow="Technical Stack"
      title={(
        <>
          Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
        </>
      )}
      description="A snapshot of the toolchains, languages, and platforms I reach for when shipping resilient digital products."
      contentClassName="space-y-16"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={cn("group skill-card bg-gradient-to-br animate-fade-in-up", category.gradientClass)}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={cn("mr-4 rounded-lg bg-gradient-to-br p-3", category.gradientClass)}>
                    <Icon className={category.colorClass} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-foreground-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-background-tertiary rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

      <div className="glass rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-primary">Core Competencies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {coreCompetencies.map((competency, index) => (
            <span
              key={competency}
              className="px-4 py-2 glass rounded-full text-sm hover-glow cursor-default animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {competency}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;