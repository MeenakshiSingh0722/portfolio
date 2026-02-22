import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CV = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const downloadCV = async () => {
    if (!cvRef.current) return;

    try {
      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('Meenakshi_Singh_CV.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">My Resume</h1>
        <Button onClick={downloadCV} className="bg-gradient-primary hover:opacity-90">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div ref={cvRef} className="bg-white text-black p-6 shadow-lg max-w-[210mm] mx-auto" style={{ minHeight: '297mm' }}>
        {/* Header */}
        <div className="text-center mb-4 border-b-2 border-gray-300 pb-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">MEENAKSHI SINGH</h1>
          <p className="text-lg text-gray-600 mb-3">Software Engineer & Data Scientist</p>
          
          <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              meenakshi.singh@email.com
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Lucknow, India
            </span>
            <span className="flex items-center gap-1">
              <Linkedin className="h-3 w-3" />
              linkedin.com/in/meenakshi-singh-698b8329a
            </span>
            <span className="flex items-center gap-1">
              <Github className="h-3 w-3" />
              github.com/MeenakshiSingh0722
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="col-span-1 space-y-3">
            {/* Technical Skills */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">TECHNICAL SKILLS</h2>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-gray-700 text-xs mb-1">Programming</h4>
                  <p className="text-gray-600 text-xs">C, C++, Java, Python, HTML/CSS, JavaScript</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 text-xs mb-1">Data Science</h4>
                  <p className="text-gray-600 text-xs">Pandas, NumPy, Scikit-learn, TensorFlow</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 text-xs mb-1">Tools</h4>
                  <p className="text-gray-600 text-xs">Git, Docker, AWS, Power BI, Excel</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 text-xs mb-1">Databases</h4>
                  <p className="text-gray-600 text-xs">MySQL, PostgreSQL, MongoDB</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">EDUCATION</h2>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs">B.Tech Computer Science</h3>
                <p className="text-gray-600 text-xs">Lucknow University</p>
                <p className="text-gray-600 text-xs">3rd Year | Expected 2025</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">CERTIFICATIONS</h2>
              <div className="space-y-1">
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs">Data Analytics Program</h4>
                  <p className="text-gray-600 text-xs">YBI Foundation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs">Power Query Badge</h4>
                  <p className="text-gray-600 text-xs">Microsoft</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs">Virtual Internship</h4>
                  <p className="text-gray-600 text-xs">Deloitte Australia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-3">
            {/* Professional Summary */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">PROFESSIONAL SUMMARY</h2>
              <p className="text-gray-700 text-xs leading-relaxed">
                Passionate Computer Science Engineering student specializing in software development and data science. 
                Proven ability to build scalable applications, implement machine learning solutions, and analyze complex datasets. 
                Strong foundation in full-stack development with hands-on experience in modern frameworks and cloud technologies. 
                Committed to writing clean, efficient code and delivering data-driven solutions.
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">EXPERIENCE</h2>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-800 text-xs">Data Science Intern</h3>
                    <p className="text-gray-600 text-xs">2024</p>
                  </div>
                  <p className="text-gray-600 font-medium text-xs">Oasis Infobyte</p>
                  <ul className="text-gray-700 text-xs mt-1 space-y-1">
                    <li>• Developed machine learning models using Python and scikit-learn</li>
                    <li>• Implemented data preprocessing pipelines for large datasets</li>
                    <li>• Created interactive dashboards for data visualization</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-800 text-xs">Data Analytics Simulation</h3>
                    <p className="text-gray-600 text-xs">2024</p>
                  </div>
                  <p className="text-gray-600 font-medium text-xs">Deloitte Australia</p>
                  <ul className="text-gray-700 text-xs mt-1 space-y-1">
                    <li>• Analyzed business data to identify key performance indicators</li>
                    <li>• Created comprehensive reports using Power BI and Excel</li>
                    <li>• Presented findings to stakeholders with actionable insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">KEY PROJECTS</h2>
              
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs">Full-Stack Portfolio Website</h4>
                  <p className="text-gray-600 text-xs">React, TypeScript, Tailwind CSS</p>
                  <p className="text-gray-700 text-xs">Responsive portfolio showcasing projects with modern UI/UX design, optimized performance, and mobile-first approach.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs">Machine Learning Classification System</h4>
                  <p className="text-gray-600 text-xs">Python, Pandas, Scikit-learn</p>
                  <p className="text-gray-700 text-xs">Built predictive models with 95% accuracy for data classification using advanced algorithms and feature engineering.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs">Smart Calculator Application</h4>
                  <p className="text-gray-600 text-xs">Java, Object-Oriented Programming</p>
                  <p className="text-gray-700 text-xs">Advanced calculator with scientific functions, error handling, and intuitive user interface design.</p>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">CORE COMPETENCIES</h2>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-gray-700 text-xs">• Full-Stack Development</p>
                  <p className="text-gray-700 text-xs">• Machine Learning</p>
                  <p className="text-gray-700 text-xs">• Data Analysis & Visualization</p>
                </div>
                <div>
                  <p className="text-gray-700 text-xs">• Algorithm Design</p>
                  <p className="text-gray-700 text-xs">• Database Management</p>
                  <p className="text-gray-700 text-xs">• Problem Solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;