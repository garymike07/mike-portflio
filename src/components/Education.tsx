import React, { useState } from 'react';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
const Education = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const education = [{
    degree: 'B.Sc. Information Technology',
    institution: 'South Eastern Kenya University',
    period: '2015-2019',
    location: 'Kitui, Kenya',
    description: 'Comprehensive program covering software development, database management, networking, and system analysis.',
    highlights: ['Graduated with honors in Software Engineering track', 'Final year project: Network Management System for SMEs', 'Active member of Computer Science Society', 'Completed internship at Kenya Power & Lighting Company']
  }, {
    degree: 'KCSE Grade B',
    institution: 'Muhoho High School',
    period: '2011-2014',
    location: 'Kenya',
    description: 'Strong foundation in mathematics, sciences, and languages with focus on analytical thinking.',
    highlights: ['Mathematics: A-, Physics: B+, Chemistry: B', 'Computer Studies: A (Top in class)', 'Member of Science Club and Mathematics Society', 'Represented school in inter-school programming competitions']
  }, {
    degree: 'KCPE 345/500',
    institution: 'Samrose Academy',
    period: '2010',
    location: 'Kenya',
    description: 'Solid primary education foundation with excellence in science and mathematics.',
    highlights: ['Science: 85/100, Mathematics: 78/100', 'English: 72/100, Kiswahili: 75/100', 'School prefect and peer tutor', 'Founded school computer club']
  }];
  const certifications = [{
    id: 'google-analytics',
    title: 'Google Analytics for Beginners',
    issuer: 'Google',
    date: '2023',
    credentialId: 'GA-2023-MKW-001',
    skills: ['Web Analytics', 'Data Analysis', 'Digital Marketing'],
    description: 'Comprehensive certification covering GA4, conversion tracking, and advanced reporting.',
    image: '/api/placeholder/300/200' // Placeholder for cert image
  }, {
    id: 'freecodecamp-responsive',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2022',
    hours: '300+ hours',
    credentialId: 'RWD-2022-MKW-001',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility'],
    description: 'Hands-on certification with 5 responsive web design projects and modern CSS techniques.',
    image: '/api/placeholder/300/200'
  }, {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'In Progress',
    expectedDate: 'Q2 2024',
    skills: ['Cloud Computing', 'AWS Services', 'Cloud Security', 'Cost Optimization'],
    description: 'Foundation-level certification covering AWS cloud concepts, services, and best practices.',
    image: '/api/placeholder/300/200'
  }];
  return <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Continuous learning journey from foundational education to specialized industry certifications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-primary">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => <div key={index} className={`glass rounded-2xl p-8 hover-lift animate-fade-in-up`} style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-accent-electric/20 to-accent-electric/5 mr-4">
                      <GraduationCap className="text-accent-electric" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-foreground-muted">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <p className="text-foreground-muted mb-4 leading-relaxed">{edu.description}</p>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-3">Key Highlights:</h5>
                  <div className="grid md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, hIndex) => {})}
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12 text-primary">Professional Certifications</h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <div className={`cert-card animate-fade-in-up cursor-pointer`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    {/* Certificate Preview Image */}
                    <div className="aspect-video bg-gradient-to-br from-background-tertiary to-background-secondary rounded-lg mb-4 flex items-center justify-center">
                      <Award className="text-primary" size={48} />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${cert.date === 'In Progress' ? 'bg-accent-neon/20 text-accent-neon' : 'bg-accent-electric/20 text-accent-electric'}`}>
                          {cert.date === 'In Progress' ? 'In Progress' : 'Certified'}
                        </span>
                        <ExternalLink size={16} className="text-foreground-subtle" />
                      </div>

                      <h4 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h4>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                      <p className="text-sm text-foreground-muted mb-4">
                        {cert.date === 'In Progress' ? `Expected: ${cert.expectedDate}` : cert.date}
                        {cert.hours && ` • ${cert.hours}`}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 3).map((skill, skillIndex) => <span key={skillIndex} className="px-2 py-1 bg-background-tertiary rounded text-xs text-foreground-muted">
                            {skill}
                          </span>)}
                        {cert.skills.length > 3 && <span className="px-2 py-1 bg-background-tertiary rounded text-xs text-foreground-muted">
                            +{cert.skills.length - 3} more
                          </span>}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-2xl glass border-border">
                  <div className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-background-tertiary to-background-secondary rounded-lg mb-6 flex items-center justify-center">
                      <Award className="text-primary" size={64} />
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-primary font-medium mb-4">{cert.issuer}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-foreground-muted">Issue Date:</span>
                        <p className="text-foreground font-medium">{cert.date}</p>
                      </div>
                      {cert.credentialId && <div>
                          <span className="text-foreground-muted">Credential ID:</span>
                          <p className="text-foreground font-medium font-mono">{cert.credentialId}</p>
                        </div>}
                    </div>

                    <p className="text-foreground-muted mb-6 leading-relaxed">{cert.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full text-sm text-foreground">
                            {skill}
                          </span>)}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Education;