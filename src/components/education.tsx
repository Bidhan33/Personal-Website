import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Business Information Technology',
    institution: 'Haaga-Helia University of Applied Sciences',
    period: '2022 - 2026',
    location: 'Helsinki, Finland',
    details: [
      'Major in Software Development',
      'Focus on cybersecurity and cloud computing',
      'Practical project experience in full-stack development',
    ],
  },
  {
    degree: 'Physics Science',
    institution: 'Golden Gate International College',
    period: '2019 - 2021',
    location: 'Kathmandu, Nepal',
    details: [
      'Foundation in analytical thinking',
      'Advanced mathematics and problem-solving',
      'Scientific research methodology',
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <Card key={edu.degree}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription>
                      {edu.institution} · {edu.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {edu.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {detail}
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