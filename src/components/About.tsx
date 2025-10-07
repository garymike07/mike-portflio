import React from 'react';
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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
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

            {/* Contact Info */}
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

          {/* Right Column - Stats & Interests */}
          <div className="space-y-6">
            {/* Achievement Stats */}
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

            {/* Personal Interests */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Personal Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map(({ icon: Icon, label, colorClass }) => (
                  <div
                    key={label}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-hover-bg transition-all group"
                  >
                    <Icon className={cn(colorClass, "group-hover:scale-110 transition-transform")} size={24} />
                    <span className="text-foreground-muted group-hover:text-foreground transition-colors">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Languages</h3>
              <div className="space-y-4">
                {languages.map(({ name, proficiency, progressClass, progressWidth, labelClass }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{name}</span>
                      <span className={cn("font-medium", labelClass)}>{proficiency}</span>
                    </div>
                    <div className="w-full bg-background-tertiary rounded-full h-2">
                      <div className={cn("h-2 rounded-full", progressClass, progressWidth)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;