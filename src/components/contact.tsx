import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adhikari12bidhan@gmail.com',
    href: 'mailto:adhikari12bidhan@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0415756062',
    href: 'tel:0415756062',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Uomakuja 2c, Vantaa, Finland',
    href: 'https://maps.google.com/?q=Uomakuja+2c,+Vantaa,+Finland',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Bidhan Adhikari',
    href: 'https://linkedin.com/in/bidhan-adhikari',
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-muted-foreground">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}