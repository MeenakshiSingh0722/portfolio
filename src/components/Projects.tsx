import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Lock, Calculator, Newspaper, Coffee } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Password Guessing Game',
      description: 'Interactive Python game that challenges users to guess passwords using various difficulty levels and hints. Features secure password generation and educational gameplay.',
      icon: <Lock className="h-8 w-8 text-primary" />,
      technologies: ['Python', 'Random Module', 'Game Logic'],
      features: [
        'Multiple difficulty levels',
        'Hint system',
        'Score tracking',
        'Educational gameplay'
      ],
      github: 'https://github.com/MeenakshiSingh0722/Password-Guessing-Game',
      demo: 'https://www.linkedin.com/posts/meenakshi-singh-698b8329a_python-miniproject-gamedev-activity-7349825492201435136-GYUl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhuxBQBC8Yh5s8BD8PisHa2RC-3vcytg-Q'
    },
    {
      title: 'Robust Calculator with History',
      description: 'Advanced calculator application built in Python that performs complex mathematical operations and saves calculation history for future reference.',
      icon: <Calculator className="h-8 w-8 text-primary" />,
      technologies: ['Python', 'File I/O', 'GUI'],
      features: [
        'Complex mathematical operations',
        'Calculation history storage',
        'User-friendly interface',
        'Error handling'
      ],
      github: 'https://github.com/MeenakshiSingh0722/smartcalculator-',
      demo: 'https://www.linkedin.com/posts/meenakshi-singh-698b8329a_pythonprogramming-code-problemsolving-activity-7349466357417021440-JF3N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhuxBQBC8Yh5s8BD8PisHa2RC-3vcytg-Q'
    },
    {
      title: 'Funny and Fake News Generator',
      description: 'Creative Python application that generates humorous and fictional news articles using natural language processing and creative algorithms.',
      icon: <Newspaper className="h-8 w-8 text-primary" />,
      technologies: ['Python', 'NLP', 'Text Generation'],
      features: [
        'Dynamic content generation',
        'Humor algorithms',
        'Customizable themes',
        'Export functionality'
      ],
      github: 'https://github.com/MeenakshiSingh0722/Fake-Funny-News-Generator',
      demo: 'https://www.linkedin.com/posts/meenakshi-singh-698b8329a_python-codingfun-sideproject-activity-7355939786211180544-gdqu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhuxBQBC8Yh5s8BD8PisHa2RC-3vcytg-Q'
    },
    {
      title: 'Cafe Management System',
      description: 'End-to-end cafe management app to handle orders, billing, menu, and inventory with role-based access.',
      icon: <Coffee className="h-8 w-8 text-primary" />,
      technologies: ['CRUD', 'Billing', 'Management'],
      features: [
        'Order and billing management',
        'Menu and inventory management',
        'Reports and analytics',
        'Role-based access'
      ],
      github: 'https://github.com/MeenakshiSingh0722/cafe-management-system',
      demo: 'https://github.com/MeenakshiSingh0722/cafe-management-system'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my Python projects that showcase my programming skills 
            and creativity in solving real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {project.icon}
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;