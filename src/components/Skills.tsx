import React, { useState, useEffect, useRef } from 'react';
import { Code, Cloud, Palette, Settings, Database, Globe } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'text-accent-neon',
      gradient: 'from-accent-neon/20 to-accent-neon/5',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Bootstrap', level: 88 },
        { name: 'Responsive Design', level: 92 },
        { name: 'PWA', level: 80 },
        { name: 'Performance Optimization', level: 88 },
      ]
    },
    {
      title: 'Backend',
      icon: Code,
      color: 'text-accent-electric',
      gradient: 'from-accent-electric/20 to-accent-electric/5',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Spring Boot', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'Microservices', level: 75 },
        { name: 'Auth (Authentication & Authorization)', level: 85 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-accent-neon',
      gradient: 'from-accent-neon/20 to-accent-neon/5',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Supabase', level: 80 },
        { name: 'Firebase', level: 80 },
        { name: 'Convex', level: 70 },
        { name: 'MongoDB', level: 80 },
        { name: 'Database Optimization', level: 80 },
        { name: 'Data Migration & Recovery', level: 78 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-accent-purple',
      gradient: 'from-accent-purple/20 to-accent-purple/5',
      skills: [
        { name: 'AWS (EC2, S3, IAM, Lambda)', level: 80 },
        { name: 'Vercel', level: 85 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Git & GitHub Actions', level: 90 },
        { name: 'Docker', level: 78 },
        { name: 'Server Management', level: 85 },
      ]
    },
    {
      title: 'IT Support',
      icon: Settings,
      color: 'text-accent-electric',
      gradient: 'from-accent-electric/20 to-accent-electric/5',
      skills: [
        { name: 'Network Design & Implementation', level: 88 },
        { name: 'LAN/WAN Configuration', level: 88 },
        { name: 'Hardware Diagnostics', level: 90 },
        { name: 'System Administration', level: 85 },
      ]
    },
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