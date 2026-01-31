import { ArrowDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            <img
              src="/profile.jpg"
              alt="Jumadi Setiawan Yusuf"
              className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
          Jumadi Setiawan Yusuf
        </h1>
        <p className="text-xl text-primary font-medium mb-4">
          AI Data Specialist
        </p>
        <p className="text-slate-600 max-w-lg mx-auto mb-8">
          Data Collection · Annotation · Quality Assurance
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-5 rounded-lg font-medium"
          >
            View Projects
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-slate-300 hover:border-primary hover:text-primary px-6 py-5 rounded-lg font-medium"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-slate-400" />
      </div>
    </section>
  );
}
