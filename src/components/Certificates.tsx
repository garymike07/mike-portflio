import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck, Download, Eye } from 'lucide-react';

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  file: string;
  downloadName: string;
};

const certificates: Certificate[] = [
  {
    id: 'internship',
    title: 'ICT Internship Certificate',
    issuer: 'Council of Legal Education',
    year: '2024',
    file: '/certificates/internship.pdf',
    downloadName: 'Mike-Kagera-ICT-Internship.pdf',
  },
  {
    id: 'resume',
    title: 'Professional Résumé',
    issuer: 'Mike Kagera Waitindi',
    year: '2025',
    file: '/certificates/mike-resume.pdf',
    downloadName: 'Mike-Kagera-Resume.pdf',
  },
  {
    id: 'degree',
    title: 'BSc Information Technology',
    issuer: 'South Eastern Kenya University',
    year: '2019',
    file: '/certificates/degree.pdf',
    downloadName: 'Mike-Kagera-BSc-IT-Degree.pdf',
  },
  {
    id: 'kcse',
    title: 'KCSE Certificate',
    issuer: 'Muhoho High School',
    year: '2014',
    file: '/certificates/kcse.pdf',
    downloadName: 'Mike-Kagera-KCSE.pdf',
  },
];

const REQUIRED_PASSWORD = 'Shutters500#';

const Certificates = () => {
  const { toast } = useToast();

  const handleProtectedDownload = (certificate: Certificate) => {
    if (typeof window === 'undefined') return;

    const input = window.prompt('Enter password to download this credential');
    if (input === null) {
      return;
    }

    if (input !== REQUIRED_PASSWORD) {
      toast({
        title: 'Download blocked',
        description: 'Incorrect password supplied. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    const link = document.createElement('a');
    link.href = certificate.file;
    link.download = certificate.downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: 'Download starting',
      description: `${certificate.title} is being downloaded.`,
    });
  };

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Credential <span className="bg-gradient-primary bg-clip-text text-transparent">Vault</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            View and verify my academic and professional credentials. Previews render the original document, and downloads are password-protected.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.id}
              className="group glass rounded-3xl overflow-hidden flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 bg-background-secondary overflow-hidden">
                <iframe
                  title={`${certificate.title} thumbnail`}
                  src={`${certificate.file}#page=1&zoom=120`}
                  className="absolute inset-0 h-full w-full border-none pointer-events-none scale-110 origin-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 glass-intense rounded-full text-xs uppercase tracking-wide text-foreground-muted">
                  <ShieldCheck size={14} />
                  Verified Credential
                </div>
              </div>

              <div className="flex flex-col flex-1 p-8 space-y-5">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1">{certificate.title}</h3>
                  <p className="text-sm text-primary font-medium">
                    {certificate.issuer} • {certificate.year}
                  </p>
                </div>
                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full sm:w-auto">
                        <Eye size={18} className="mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-full glass-intense border border-border p-0 overflow-hidden">
                      <div className="flex flex-col max-h-[85vh]">
                        <header className="px-6 py-5 border-b border-border bg-background-secondary/60 backdrop-blur">
                          <h4 className="text-xl font-semibold text-foreground">{certificate.title}</h4>
                          <p className="text-sm text-foreground-muted">
                            {certificate.issuer} • {certificate.year}
                          </p>
                        </header>
                        <div className="flex-1 overflow-auto bg-background-secondary">
                          <iframe
                            title={`${certificate.title} preview`}
                            src={`${certificate.file}#view=FitH`}
                            className="h-full w-full border-none"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    className="w-full sm:w-auto btn-electric"
                    onClick={() => handleProtectedDownload(certificate)}
                  >
                    <Download size={18} className="mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
