import React from 'react';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { educationHistory, professionalCertifications } from '@/data/education';

const Education = () => {
  return (
    <Section
      id="education"
      eyebrow="Lifelong Learning"
      title={(
        <>
          Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
        </>
      )}
      description="Continuous learning from foundational education to specialized industry credentials."
      contentClassName="space-y-20"
    >
      <div>
        <h3 className="text-center text-2xl font-semibold mb-12 text-primary">Academic Background</h3>
        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            <div
              key={edu.degree}
              className="glass rounded-2xl p-8 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-4 flex items-center lg:mb-0">
                  <div className="mr-4 rounded-lg bg-gradient-to-br from-accent-electric/20 to-accent-electric/5 p-3">
                    <GraduationCap className="text-accent-electric" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 text-sm text-foreground-muted sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
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

              <p className="mb-4 leading-relaxed text-foreground-muted">{edu.description}</p>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="grid gap-2 md:grid-cols-2">
                  {edu.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start text-sm text-foreground-muted">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-electric" />
                      {highlight}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-center text-2xl font-semibold mb-12 text-primary">Professional Certifications</h3>
        <div className="cert-grid">
          {professionalCertifications.map((cert, index) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <div
                  className="cert-card animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-background-tertiary to-background-secondary">
                    <Award className="text-primary" size={48} />
                  </div>

                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className={`rounded px-2 py-1 text-xs font-medium ${
                          cert.date === 'In Progress'
                            ? 'bg-accent-neon/20 text-accent-neon'
                            : 'bg-accent-electric/20 text-accent-electric'
                        }`}
                      >
                        {cert.date === 'In Progress' ? 'In Progress' : 'Certified'}
                      </span>
                      <ExternalLink size={16} className="text-foreground-subtle" />
                    </div>

                    <h4 className="mb-2 text-lg font-semibold text-foreground">{cert.title}</h4>
                    <p className="mb-2 text-primary font-medium">{cert.issuer}</p>
                    <p className="mb-4 text-sm text-foreground-muted">
                      {cert.date === 'In Progress' ? `Expected: ${cert.expectedDate}` : cert.date}
                      {cert.hours && ` • ${cert.hours}`}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="rounded bg-background-tertiary px-2 py-1 text-xs text-foreground-muted">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="rounded bg-background-tertiary px-2 py-1 text-xs text-foreground-muted">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="glass border-border max-w-2xl">
                <div className="p-6">
                  <div className="mb-6 flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-background-tertiary to-background-secondary">
                    <Award className="text-primary" size={64} />
                  </div>

                  <h3 className="mb-2 text-2xl font-semibold text-foreground">{cert.title}</h3>
                  <p className="mb-4 text-primary font-medium">{cert.issuer}</p>

                  <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-foreground-muted">Issue Date:</span>
                      <p className="text-foreground font-medium">{cert.date}</p>
                    </div>
                    {cert.credentialId && (
                      <div>
                        <span className="text-foreground-muted">Credential ID:</span>
                        <p className="font-mono text-foreground font-medium">{cert.credentialId}</p>
                      </div>
                    )}
                  </div>

                  <p className="mb-6 leading-relaxed text-foreground-muted">{cert.description}</p>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">Skills Validated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 px-3 py-1 text-sm text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;