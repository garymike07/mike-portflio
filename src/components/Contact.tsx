import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 792 618 156',
      href: 'tel:+254792618156',
      color: 'text-accent-electric'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'wrootmike@gmail.com',
      href: 'mailto:wrootmike@gmail.com',
      color: 'text-accent-neon'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'mike-portfolio.vercel.app',
      href: 'https://mike-portfolio.vercel.app',
      color: 'text-accent-pink'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gatundu, Kenya',
      href: '#',
      color: 'text-accent-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mr-mike-654bb2344',
      color: 'text-accent-electric',
      username: 'mr-mike-654bb2344'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/garymike07',
      color: 'text-accent-neon',
      username: 'garymike07'
    }
  ];

  const references = [
    {
      name: 'Returning Officer',
      title: 'Gatundu South',
      phone: '+254 723 698 430'
    },
    {
      name: 'Samuel Muiruri',
      title: 'Vice-Chairman, Metropolitan Sacco',
      phone: '+254 724 509 778'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life 
            with innovative technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 hover-lift">
            <div className="flex items-center mb-6">
              <MessageCircle className="text-accent-electric mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="John"
                    className="bg-background-tertiary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Doe"
                    className="bg-background-tertiary border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="john.doe@example.com"
                  className="bg-background-tertiary border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  type="text" 
                  placeholder="Project Collaboration Opportunity"
                  className="bg-background-tertiary border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project or how I can help you..."
                  rows={5}
                  className="bg-background-tertiary border-border focus:border-primary resize-none"
                />
              </div>

              <Button size="lg" className="btn-electric w-full">
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center p-4 rounded-lg bg-background-tertiary/50 hover:bg-hover-bg transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-background-tertiary to-background-secondary mr-4">
                        <IconComponent className={contact.color} size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-muted">{contact.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-background-tertiary/50 hover:bg-hover-bg transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-background-tertiary to-background-secondary mr-4">
                        <IconComponent className={social.color} size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-muted">{social.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          @{social.username}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Professional References */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Professional References</h3>
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <div key={index} className="p-4 rounded-lg bg-background-tertiary/50">
                    <h4 className="text-foreground font-medium">{ref.name}</h4>
                    <p className="text-sm text-primary mb-2">{ref.title}</p>
                    <p className="text-sm text-foreground-muted">{ref.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center glass rounded-2xl p-8 bg-gradient-to-r from-background-secondary to-background-tertiary">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
            Whether you need a full-stack web application, network infrastructure setup, or IT consultancy, 
            I'm here to help transform your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-electric">
              <Mail className="mr-2" size={20} />
              Email Me Directly
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="mr-2" size={20} />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;