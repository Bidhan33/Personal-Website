import { Card } from '@/components/ui/card';
import {
  Cloud,
  Shield,
  Code,
  Layout,
  Database,
  Wrench,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS (Practitioner & SysOps)', 'Cloud Computing', 'CI/CD', 'Docker'],
  },
  {
    title: 'Security',
    icon: Shield,
    skills: [
      'Wireshark',
      'Network Security',
      'Vulnerability Assessment',
      'System Hardening',
      'Firewall Implementation',
    ],
  },
  {
    title: 'Development',
    icon: Code,
    skills: ['JavaScript (ES6+)', 'React.js', 'TypeScript', 'Spring Boot', 'Java', 'C/C++'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      'Tailwind CSS',
      'Material-UI',
      'Bootstrap',
      'Responsive Design',
      'State Management',
    ],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['Node.js', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: ['Git/GitHub', 'Linux', 'Agile/Scrum', 'Testing'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}