import React from 'react';
import { Calendar, MapPin, Award, TrendingUp, Users, Shield } from 'lucide-react';
const Experience = () => {
  const experiences = [{
    title: 'ICT Intern',
    company: 'Council of Legal Education',
    period: 'Jan 2024 – Feb 2025',
    location: 'Kenya',
    type: 'Internship',
    description: 'Delivered comprehensive tier-1 & tier-2 IT support and led key digital initiatives across the organization.',
    achievements: [
      'Delivered comprehensive tier-1 & tier-2 IT support to 200+ staff across four regional offices.',
      'Engineered PowerShell automation scripts reducing incident response time by 25%.',
      'Orchestrated enterprise-wide migration to SharePoint Online with zero data loss.',
      'Implemented robust backup strategies ensuring 99.9% system availability.',
      'Conducted staff training sessions increasing digital literacy across organization.'
    ],
    icon: Award,
    color: 'accent-electric',
    gradient: 'from-accent-electric/20 to-accent-electric/5'
  }, {
    title: 'IEBC ICT Officer',
    company: 'Independent Electoral & Boundaries Commission – Gatundu South',
    period: 'Aug 2022',
    location: 'Kenya',
    type: 'Contract',
    description: 'Configured, maintained, and supported election technology infrastructure during a critical period.',
    achievements: [
      'Configured and maintained 80+ KEIMS kits achieving 99.9% uptime during elections.',
      'Architected secure LAN/WAN infrastructure for constituency tallying center.',
      'Provided real-time network troubleshooting with <5 minute resolution time.',
      'Trained 100+ temporary election clerks on system operation.',
      'Developed emergency response procedures adopted by other constituencies.'
    ],
    icon: Shield,
    color: 'accent-neon',
    gradient: 'from-accent-neon/20 to-accent-neon/5'
  }, {
    title: 'ICT Attaché',
    company: 'Gatundu Law Courts',
    period: 'Jan 2023 – Apr 2023',
    location: 'Gatundu, Kenya',
    type: 'Attachment',
    description: 'Maintained systems and improved process efficiency within the judiciary environment.',
    achievements: [
      'Managed high-priority support tickets maintaining 95% SLA compliance.',
      'Performed weekly updates on Judiciary Case Management System (CMS).',
      'Created comprehensive network documentation and SOPs.',
      'Implemented proactive monitoring reducing system downtime by 40%.',
      'Collaborated with legal staff to improve case processing efficiency.'
    ],
    icon: Users,
    color: 'accent-purple',
    gradient: 'from-accent-purple/20 to-accent-purple/5'
  }, {
    title: 'Junior Software Developer (Freelance)',
    company: 'Self-Employed',
    period: 'Jul 2021 – Feb 2022',
    location: 'Remote',
    type: 'Freelance',
    description: 'Built and optimized client-facing web applications and integrations with a focus on performance and SEO.',
    achievements: [
      'Architected and deployed 6 responsive, SEO-optimized websites using React.',
      'Integrated payment systems (PayPal, M-Pesa APIs) generating 40% revenue increase.',
      'Developed reusable React components reducing development time by 30%.',
      'Achieved 50% faster page load times through performance optimization.',
      'Established long-term client relationships with 90% retention rate.'
    ],
    icon: TrendingUp,
    color: 'accent-pink',
    gradient: 'from-accent-pink/20 to-accent-pink/5'
  }];
  const ongoingWork = {
    title: 'Freelance Graphic Designer',
    period: 'Feb 2021 – Present',
    description: 'Created 50+ brand identity packages and delivered end-to-end design solutions.',
    stats: '80% of clients reported increased engagement; productivity up 60% via automated workflows'
  };
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
          const IconComponent = exp.icon;
          const isEven = index % 2 === 0;
          return <div key={index} className={`relative flex items-center mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.gradient} glass flex items-center justify-center hover-glow`}>
                    <IconComponent className={`text-${exp.color}`} size={20} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className={`glass rounded-2xl p-6 hover-lift animate-fade-in-up`} style={{
                animationDelay: `${index * 0.2}s`
              }}>
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${exp.color}/20 text-${exp.color}`}>
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
                        {exp.achievements.map((achievement, achIndex) => <li key={achIndex} className="flex items-start text-sm text-foreground-muted">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${exp.color} mt-2 mr-3 flex-shrink-0`} />
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