import React from 'react';
import { MapPin, Phone, Mail, Code, Heart, BookOpen, Gamepad2 } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: BookOpen, label: 'Reading', color: 'text-accent-electric' },
    { icon: Code, label: 'Programming', color: 'text-accent-neon' },
    { icon: Gamepad2, label: 'Chess', color: 'text-accent-purple' },
    { icon: Heart, label: 'Swimming', color: 'text-accent-pink' },
  ];

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
              <p className="text-foreground-muted leading-relaxed mb-4">
                Dynamic Fullstack Engineer and ICT professional with 4+ years of experience delivering end-to-end
                digital solutions across government, legal, and private sectors. Expertise spans full-stack web
                development, enterprise IT infrastructure management, and user-centric design. Proven track record of
                architecting scalable applications, optimizing system performance, and leading digital transformation
                initiatives.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Passionate about leveraging cutting-edge technologies to solve complex business challenges while
                ensuring robust security and exceptional user experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-accent-electric" size={20} />
                  <span className="text-foreground-muted">Gatundu, Kenya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-accent-neon" size={20} />
                  <span className="text-foreground-muted">+254 792 618 156</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-accent-purple" size={20} />
                  <span className="text-foreground-muted">wrootmike@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Interests */}
          <div className="space-y-6">
            {/* Achievement Stats */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Key Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-electric mb-2">200+</div>
                  <div className="text-sm text-foreground-muted">Staff Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-neon mb-2">99.9%</div>
                  <div className="text-sm text-foreground-muted">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-purple mb-2">25%</div>
                  <div className="text-sm text-foreground-muted">Response Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-pink mb-2">6+</div>
                  <div className="text-sm text-foreground-muted">Websites Built</div>
                </div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Personal Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <div 
                      key={interest.label} 
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-hover-bg transition-all group"
                    >
                      <IconComponent 
                        className={`${interest.color} group-hover:scale-110 transition-transform`} 
                        size={24} 
                      />
                      <span className="text-foreground-muted group-hover:text-foreground transition-colors">
                        {interest.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Languages */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">English</span>
                    <span className="text-accent-electric">Fluent</span>
                  </div>
                  <div className="w-full bg-background-tertiary rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">Kiswahili</span>
                    <span className="text-accent-neon">Conversational</span>
                  </div>
                  <div className="w-full bg-background-tertiary rounded-full h-2">
                    <div className="bg-gradient-secondary h-2 rounded-full w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;