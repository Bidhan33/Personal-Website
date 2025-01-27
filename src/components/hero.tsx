import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';

import image from './abc.jpg';
export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 pt-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
              Bidhan Adhikari
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Cybersecurity Specialist & Full-Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            Specializing in AWS cloud services and secure application development,
            with expertise in full-stack development and cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" /> Download Resume
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Send className="w-4 h-4" /> Contact Me
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-72 h-72 md:w-96 md:h-96 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-600 opacity-20 blur-3xl animate-pulse" />
            <img
              src={image}
              alt="Bidhan Adhikari"
              className="rounded-full w-full h-full object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}