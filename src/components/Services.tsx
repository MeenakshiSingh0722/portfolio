import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Database, Brain, Code, FileSpreadsheet, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: 'Data Analysis',
      description: 'Transform raw data into strategic insights through advanced statistical analysis, visualization, and predictive modeling techniques.',
      features: [
        'Statistical analysis',
        'Data visualization',
        'Trend identification',
        'Report generation'
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'Data Processing',
      description: 'Streamline your data pipeline with automated cleaning, transformation, and validation processes that ensure data integrity and accessibility.',
      features: [
        'Data cleaning',
        'Data transformation',
        'Format conversion',
        'Quality assurance'
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: 'Machine Learning',
      description: 'Implement intelligent algorithms that learn from your data to predict trends, classify information, and automate decision-making processes.',
      features: [
        'Predictive modeling',
        'Pattern recognition',
        'Classification tasks',
        'Data insights'
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Python Development',
      description: 'Build robust, scalable Python solutions that automate complex workflows and enable data-driven operations across your organization.',
      features: [
        'Custom scripts',
        'Automation tools',
        'Data pipelines',
        'Web scraping'
      ]
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      title: 'Excel Solutions',
      description: "Maximize Excel's potential with sophisticated automation, dynamic dashboards, and Power Query solutions that revolutionize your data workflows.",
      features: [
        'Power Query automation',
        'Advanced formulas',
        'Dashboard creation',
        'Data modeling'
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights through comprehensive analysis.',
      features: [
        'Business metrics',
        'Performance tracking',
        'Strategic insights',
        'Decision support'
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between raw data and strategic decisions, I provide comprehensive 
            analytics solutions that drive business growth. From data processing to machine learning, 
            I deliver insights that matter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">What I provide:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="bg-gradient-card border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to unlock the hidden potential in your data? I bring fresh perspectives, 
                cutting-edge techniques, and a passion for excellence to every project. Let's transform 
                your data challenges into competitive advantages.
              </p>
              <Button onClick={scrollToContact} size="lg" className="bg-gradient-primary hover:opacity-90">
                Start a Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;