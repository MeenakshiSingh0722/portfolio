import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, Instagram, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 bg-secondary/30 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Meenakshi Singh
            </h3>
            <p className="text-muted-foreground">
              Computer Science Engineering Student
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
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
              <a href="mailto:meenakshisingh0722@gmail.com">
                <Mail className="h-5 w-5" />
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
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Meenakshi Singh
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1 mt-1">
              Made with <Heart className="h-3 w-3 text-red-500" /> using React
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <Button variant="ghost" onClick={scrollToTop}>
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;