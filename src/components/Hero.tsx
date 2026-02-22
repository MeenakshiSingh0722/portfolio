import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Instagram, Camera } from 'lucide-react';
// import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Meenakshi Singh
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Aspiring Data Scientist & Software Engineer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Transforming data into actionable insights through advanced analytics and machine learning. 
                Proficient in multiple programming languages with specialized expertise in Python, data science, 
                and business intelligence. Currently pursuing B.Tech at Lucknow University while building 
                real-world solutions that bridge technology and business impact.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-gradient-primary hover:opacity-90">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cv" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/MeenakshiSingh0722" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.linkedin.com/in/meenakshi-singh-698b8329a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://instagram.com/phugga____" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://snapchat.com/add/phugga_20" target="_blank" rel="noopener noreferrer">
                  <Camera className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-card shadow-elegant">
                <img
                  src="/profile-photo/e23348b2-9175-4ebb-b169-b465c7a52a6f.png"
                  alt="Meenakshi Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;