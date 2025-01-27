import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'React Admin Dashboard',
    description:
      'Full responsive web application with real-time data visualization and live broadcasting functionality.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tech: [
      'ReactJS',
      'Syncfusion UI',
      'Appwrite',
      'GraphQL',
      'Node.js',
      'Chart.js',
      'Tailwind CSS',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Network Traffic Analysis Tool',
    description:
      'Advanced network vulnerability assessment and packet analysis implementation with security risk identification.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tech: ['Wireshark', 'tcpdump', 'Network Protocols'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Waste Classification System',
    description:
      'Automated waste sorting system with image capture, classification, and real-time processing capabilities.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    tech: ['ESP32', 'GPT API', 'Node.js', 'C++', 'Custom APIs'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Network Scanner',
    description:
      'Real-time network scanning tool with automated risk analysis and firewall protection features.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    tech: ['Linux', 'Apache2', 'PHP', 'Nmap', 'UFW'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'GitHub Repository Search Tool',
    description:
      'Dynamic repository search application with smooth animations and comprehensive API integration.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'GitHub API', 'Axios', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}