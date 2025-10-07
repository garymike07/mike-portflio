import React from 'react';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  contactInformation,
  professionalReferences,
  socialLinks,
  primaryEmail,
  primaryPhone,
} from '@/data/contact';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const firstName = (formData.get('firstName') as string | null)?.trim() ?? '';
    const lastName = (formData.get('lastName') as string | null)?.trim() ?? '';
    const email = (formData.get('email') as string | null)?.trim() ?? '';
    const subjectInput = (formData.get('subject') as string | null)?.trim() ?? '';
    const message = (formData.get('message') as string | null)?.trim() ?? '';

    const fullName = [firstName, lastName].filter(Boolean).join(' ');
    const subject = subjectInput || `New message from ${fullName || 'portfolio visitor'}`;

    const bodyLines = [
      fullName ? `Name: ${fullName}` : null,
      email ? `Email: ${email}` : null,
      subjectInput ? `Subject: ${subjectInput}` : null,
      '',
      'Message:',
      message || '(No message provided)',
    ].filter((line) => line !== null) as string[];

    const mailto = `mailto:wrootmike@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;
    event.currentTarget.reset();
  };
  return (
    <Section
      id="contact"
      eyebrow="Let's Collaborate"
      title={(
        <>
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </>
      )}
      description="Ready to collaborate on your next project? Let’s discuss how I can help bring your ideas to life with innovative technology solutions."
      contentClassName="space-y-16"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="glass rounded-2xl p-8 hover-lift">
          <div className="mb-6 flex items-center">
            <MessageCircle className="mr-3 text-accent-electric" size={24} />
            <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">First Name</label>
                <Input
                  type="text"
                  placeholder="John"
                  name="firstName"
                  required
                  className="border-border bg-background-tertiary focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Last Name</label>
                <Input
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  className="border-border bg-background-tertiary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
              <Input
                type="email"
                placeholder="john.doe@example.com"
                name="email"
                required
                className="border-border bg-background-tertiary focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Subject</label>
              <Input
                type="text"
                placeholder="Project Collaboration Opportunity"
                name="subject"
                className="border-border bg-background-tertiary focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
              <Textarea
                placeholder="Tell me about your project or how I can help you..."
                rows={5}
                name="message"
                required
                className="resize-none border-border bg-background-tertiary focus:border-primary"
              />
            </div>

            <Button size="lg" className="btn-electric w-full">
              <Send className="mr-2" size={20} />
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-2xl p-8 hover-lift">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInformation.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.href}
                    href={contact.href}
                    className="group flex items-center rounded-lg bg-background-tertiary/50 p-4 transition-all hover:bg-hover-bg"
                  >
                    <div className="mr-4 rounded-lg bg-gradient-to-br from-background-tertiary to-background-secondary p-3">
                      <IconComponent className={contact.color} size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-muted">{contact.label}</p>
                      <p className="text-foreground font-medium transition-colors group-hover:text-primary">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 hover-lift">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center rounded-lg bg-background-tertiary/50 p-4 transition-all hover:bg-hover-bg"
                  >
                    <div className="mr-4 rounded-lg bg-gradient-to-br from-background-tertiary to-background-secondary p-3">
                      <IconComponent className={social.color} size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-muted">{social.label}</p>
                      <p className="text-foreground font-medium transition-colors group-hover:text-primary">@{social.username}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 hover-lift">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Professional References</h3>
            <div className="space-y-4">
              {professionalReferences.map((ref) => (
                <div key={ref.phone} className="rounded-lg bg-background-tertiary/50 p-4">
                  <h4 className="text-foreground font-medium">{ref.name}</h4>
                  <p className="text-sm text-primary mb-2">{ref.title}</p>
                  <p className="text-sm text-foreground-muted">{ref.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl bg-gradient-to-r from-background-secondary to-background-tertiary p-8 text-center">
        <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Start Your Project?</h3>
        <p className="mx-auto mb-6 max-w-2xl text-foreground-muted">
          Whether you need a full-stack web application, network infrastructure setup, or IT consultancy,
          I’m here to help transform your ideas into reality.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href={`mailto:${primaryEmail}`}>
            <Button size="lg" className="btn-electric">
              <Mail className="mr-2" size={20} />
              Email Me Directly
            </Button>
          </a>
          <a href={`tel:${primaryPhone.replace(/\s+/g, '')}`}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="mr-2" size={20} />
              Schedule a Call
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;