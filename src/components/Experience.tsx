import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';
const Experience = () => {
  return <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A track record of delivering impactful technology solutions across various sectors, 
            from government institutions to private enterprises.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-primary" />

          {experiences.map((exp, index) => {
          const Icon = exp.icon;
          const isEven = index % 2 === 0;
          return <div
            key={exp.title}
            className={cn(
            "relative flex items-center mb-12",
            isEven ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full bg-gradient-to-br glass flex items-center justify-center hover-glow",
                      exp.gradientClassName
                    )}
                  >
                    <Icon className={exp.iconClassName} size={20} />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={cn(
                    "w-full md:w-5/12 ml-12 md:ml-0",
                    isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  )}
                >
                  <div className={`glass rounded-2xl p-6 hover-lift animate-fade-in-up`} style={{
                animationDelay: `${index * 0.2}s`
              }}>
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-full text-xs font-medium",
                            exp.badgeClassName
                          )}
                        >
                          {exp.type}
                        </span>
                        <div className="flex items-center text-sm text-foreground-muted">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center text-sm text-foreground-muted">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground-muted mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => <li key={achievement} className="flex items-start text-sm text-foreground-muted">
                            <div
                              className={cn(
                                "w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0",
                                exp.dotClassName
                              )}
                            />
                            {achievement}
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* Ongoing Work Highlight */}
        {/* Additional highlight could be rendered here if needed */}
      </div>
    </section>;
};
export default Experience;