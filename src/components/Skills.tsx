import React, { useState, useEffect, useRef } from 'react';
import { Code, Cloud, Palette, Settings, Database, Globe } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-accent-electric',
      gradient: 'from-accent-electric/20 to-accent-electric/5',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Perl', level: 70 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'text-accent-neon',
      gradient: 'from-accent-neon/20 to-accent-neon/5',
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Bootstrap', level: 88 },
        { name: 'XML', level: 75 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-accent-purple',
      gradient: 'from-accent-purple/20 to-accent-purple/5',
      skills: [
        { name: 'AWS (EC2, S3, IAM)', level: 80 },
        { name: 'Server Management', level: 85 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'CI/CD Basics', level: 75 },
      ]
    },
    {
      title: 'Design & Analytics',
      icon: Palette,
      color: 'text-accent-pink',
      gradient: 'from-accent-pink/20 to-accent-pink/5',
      skills: [
        { name: 'Adobe Photoshop', level: 85 },
        { name: 'Adobe Illustrator', level: 80 },
        { name: 'Figma', level: 88 },
        { name: 'Google Analytics', level: 82 },
      ]
    },
    {
      title: 'Network & Support',
      icon: Settings,
      color: 'text-accent-electric',
      gradient: 'from-accent-electric/20 to-accent-electric/5',
      skills: [
        { name: 'Network Troubleshooting', level: 92 },
        { name: 'LAN/WAN Setup', level: 88 },
        { name: 'Hardware Installation', level: 90 },
        { name: 'IT Service Desk', level: 95 },
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: Database,
      color: 'text-accent-neon',
      gradient: 'from-accent-neon/20 to-accent-neon/5',
      skills: [
        { name: 'MS Office', level: 95 },
        { name: 'Agile/Scrum', level: 80 },
        { name: 'SharePoint', level: 85 },
        { name: 'System Documentation', level: 90 },
      ]
    }
  ];

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
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development and IT infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className={`skill-card bg-gradient-to-br ${category.gradient} animate-fade-in-up`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} mr-4`}>
                    <IconComponent className={category.color} size={24} />
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

        {/* Additional Skills Summary */}
        <div className="mt-16 glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Full-Stack Development', 'Cloud Architecture', 'Network Administration', 
              'System Integration', 'Digital Transformation', 'Agile Methodologies',
              'UI/UX Design', 'Database Management', 'DevOps Practices', 'Technical Leadership'
            ].map((competency, index) => (
              <span 
                key={competency}
                className={`px-4 py-2 glass rounded-full text-sm hover-glow cursor-default animate-bounce-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;