import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="w-full py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-2">
            Let's Work Together
          </h2>
          <p className="text-slate-600">
            Have a project? Send me a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-white"
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="bg-white"
              />
            </div>
            <Textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project..."
              required
              rows={4}
              className="bg-white resize-none"
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-5"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-4">
            <a
              href="mailto:jumadisetiawanyusuf@gmail.com"
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Email</div>
                <div className="text-sm font-medium text-slate-900">
                  jumadisetiawanyusuf@gmail.com
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Location</div>
                <div className="text-sm font-medium text-slate-900">Indonesia</div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/jumadi-setiawan-yusuf-276b99378/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Linkedin className="w-5 h-5" /> sasa
              </div>
              <div>
                <div className="text-xs text-slate-500">LinkedIn</div>
                <div className="text-sm font-medium text-slate-900">
                  Connect with me
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            © 2024 Jumadi Setiawan Yusuf. AI Data Specialist.
          </p>
        </div>
      </div>
    </section>
  );
}
