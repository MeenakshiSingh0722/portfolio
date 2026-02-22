import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      company: 'Deloitte Australia',
      role: 'Data Analytics Job Simulation',
      period: 'Virtual Internship',
      description: 'Completed comprehensive data analytics simulation focusing on real-world business scenarios and data-driven decision making.',
      skills: ['Data Analytics', 'Business Intelligence', 'Problem Solving']
    },
    {
      type: 'internship',
      company: 'Oasis Infobyte',
      role: 'Data Science Intern',
      period: 'Internship Offer',
      description: 'Received internship offer to work on data science projects and machine learning applications.',
      skills: ['Data Science', 'Machine Learning', 'Python']
    },
    {
      type: 'certification',
      company: 'YBI Foundation',
      role: 'Data Analytics Fundamentals',
      period: 'Program Completion',
      description: 'Successfully completed comprehensive program covering fundamental concepts of data analytics and statistical analysis.',
      skills: ['Data Analytics', 'Statistics', 'Data Visualization']
    },
    {
      type: 'certification',
      company: 'Microsoft',
      role: 'Power Query Badge',
      period: 'Certification',
      description: 'Earned certification in automating data cleaning processes using Power Query tools.',
      skills: ['Power Query', 'Data Cleaning', 'Excel']
    }
  ];

  const education = {
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    university: 'Lucknow University',
    status: 'Currently in 3rd Year',
    description: 'Pursuing comprehensive education in computer science fundamentals, programming, algorithms, and emerging technologies.'
  };

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional experience in data science and analytics.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{education.degree}</h4>
                    <p className="text-primary font-medium">{education.field}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{education.university}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{education.status}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {education.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Building className="h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{exp.role}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-secondary/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;