import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'IT Support Engineer',
    company: 'Classic Tech',
    period: '2021 - 2022',
    location: 'Nepal',
    responsibilities: [
      'Remote system troubleshooting',
      'Cloud operations management',
      'CI/CD pipeline maintenance',
      'Service monitoring and performance optimization',
    ],
  },
  {
    title: 'Volunteer',
    company: 'Slush',
    period: '2021 - 2023',
    location: 'Helsinki, Finland',
    responsibilities: [
      'Community outreach',
      'Event coordination',
      'Operations management',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} · {exp.period}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {exp.location}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp) => (
                    <li
                      key={resp}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}