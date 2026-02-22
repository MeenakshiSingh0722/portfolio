import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github, Camera, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'meenakshisingh0722@gmail.com',
      href: 'mailto:meenakshisingh0722@gmail.com'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/meenakshi-singh-698b8329a',
      href: 'https://www.linkedin.com/in/meenakshi-singh-698b8329a'
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'github.com/MeenakshiSingh0722',
      href: 'https://github.com/MeenakshiSingh0722'
    },
    {
      icon: <Camera className="h-5 w-5" />,
      label: 'Snapchat',
      value: 'phugga_20',
      href: 'https://snapchat.com/add/phugga_20'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
      value: 'phugga____',
      href: 'https://instagram.com/phugga____'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, projects, or collaborations. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-input border-border"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                    className="bg-input border-border"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Let's Collaborate</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently looking for:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-secondary/50">Internship Opportunities</Badge>
                  <Badge variant="secondary" className="bg-secondary/50">Data Science Projects</Badge>
                  <Badge variant="secondary" className="bg-secondary/50">Learning Collaborations</Badge>
                  <Badge variant="secondary" className="bg-secondary/50">Open Source Contributions</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;