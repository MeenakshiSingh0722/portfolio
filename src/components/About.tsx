import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Award } from 'lucide-react';
const About = () => {
  const skills = ['C', 'C++', 'Java', 'Python', 'HTML', 'Excel', 'Pandas', 'NumPy', 'Machine Learning', 'Data Analytics', 'Data Science', 'Power Query'];
  const achievements = [{
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Deloitte Virtual Internship",
    description: "Data Analytics Job Simulation at Deloitte Australia"
  }, {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Data Science Internship",
    description: "Internship offer from Oasis Infobyte"
  }, {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Data Analytics Fundamentals",
    description: "Program completion by YBI Foundation"
  }, {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Power Query Badge",
    description: "Automate data cleaning with Power Query certification"
  }];
  return <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and powered by code, I specialize in transforming complex data 
            into meaningful solutions. My journey combines academic excellence with hands-on 
            industry experience in data analytics and machine learning.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Bio */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Currently pursuing B.Tech in Computer Science Engineering at Lucknow University, 
                    I've built a comprehensive foundation in programming, algorithms, and software development. 
                    My academic journey is enriched by practical application through internships and real-world projects.
                  </p>
                  <p>
                    My expertise spans across multiple domains: from traditional programming languages like C, C++, 
                    and Java to modern data science tools including Python, Pandas, and machine learning frameworks. 
                    I specialize in extracting actionable insights from complex datasets and building intelligent solutions.
                  </p>
                  <p>
                    Through strategic internships with industry leaders like Deloitte and specialized certification 
                    programs, I've developed a unique blend of technical skills and business acumen. My approach 
                    combines analytical rigor with creative problem-solving to deliver impactful results.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Skills */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => <Badge key={skill} variant="secondary" className="bg-secondary/50">
                      {skill}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Certifications & Achievements</h3>
            {achievements.map((achievement, index) => <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                    {achievement.title === "Power Query Badge" && <a href="https://learn.microsoft.com/en-us/users/meenakshisingh-3284/achievements/d97qkm8j?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-2">View Achievement →</a>}
                    {achievement.title === "Deloitte Virtual Internship" && <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_ZswWuMHzSwdu5ZYdr_1751610445233_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-2">
                        View Certificate →
                      </a>}
                    {achievement.title === "Data Science Internship" && <a href="https://drive.google.com/file/d/1hQO_H8_qIYg3z_KP6r1w58Vh7GyKm316/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-2">View Offer Letter →</a>}
                    {achievement.title === "Data Analytics Fundamentals" && <a href="https://drive.google.com/file/d/1uqSOCwhKn3vMYsH1qcgQoHkf6jQSkehb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-2">View Certificate →</a>}
                  </div>
                </div>
              </CardContent>
            </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;