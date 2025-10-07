import React from 'react';
import { Section } from '@/components/layout/Section';
import {
  achievementStats,
  contactDetails,
  interests,
  languages,
  professionalSummary,
} from '@/data/about';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="Profile Snapshot"
      title={(
        <>
          About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
        </>
      )}
      description="From hands-on ICT support to full-stack product delivery, here’s the story behind the solutions I build."
      contentClassName="grid items-center gap-12 lg:grid-cols-2"
    >
      <div className="space-y-6">
        <div className="glass rounded-2xl p-8 hover-lift">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
          <div className="space-y-4">
            {professionalSummary.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-foreground-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-8 hover-lift">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
          <div className="space-y-4">
            {contactDetails.map(({ icon: Icon, value, colorClass }) => (
              <div key={value} className="flex items-center space-x-3">
                <Icon className={colorClass} size={20} />
                <span className="text-foreground-muted">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="glass rounded-2xl p-8 hover-lift">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Key Achievements</h3>
          <div className="grid grid-cols-2 gap-6">
            {achievementStats.map(({ label, value, colorClass }) => (
              <div key={label} className="text-center">
                <div className={cn("text-3xl font-bold mb-2", colorClass)}>{value}</div>
                <div className="text-sm text-foreground-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-8 hover-lift">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Personal Interests</h3>
          <div className="grid grid-cols-2 gap-4">
            {interests.map(({ icon: Icon, label, colorClass }) => (
              <div
                key={label}
                className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:bg-hover-bg group"
              >
                <Icon className={cn(colorClass, "transition-transform group-hover:scale-110")} size={24} />
                <span className="text-foreground-muted transition-colors group-hover:text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-8 hover-lift">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Languages</h3>
          <div className="space-y-4">
            {languages.map(({ name, proficiency, progressClass, progressWidth, labelClass }) => (
              <div key={name}>
                <div className="mb-2 flex justify-between">
                  <span className="text-foreground">{name}</span>
                  <span className={cn("font-medium", labelClass)}>{proficiency}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-background-tertiary">
                  <div className={cn("h-2 rounded-full", progressClass, progressWidth)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;