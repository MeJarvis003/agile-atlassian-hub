
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/layout/SEOHead';
import { ArrowRight, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: "Jira Implementation & Customization",
      description: "Complete Jira setup, workflow optimization, and custom field configuration",
      icon: "🎯"
    },
    {
      title: "Confluence Knowledge Base",
      description: "Structured documentation systems and collaborative spaces setup",
      icon: "📚"
    },
    {
      title: "Atlassian Cloud Migration",
      description: "Seamless transition from Server/Data Center to Cloud solutions",
      icon: "☁️"
    },
    {
      title: "Automation & Reporting",
      description: "Custom automations and advanced reporting dashboards",
      icon: "⚡"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "4+", label: "Years Community Leader" },
    { number: "15+", label: "Certifications" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const testimonials = [
    {
      quote: "Transformed our entire project management workflow. The Jira implementation was flawless.",
      author: "Sarah Johnson",
      role: "VP of Engineering, TechCorp"
    },
    {
      quote: "Expert guidance on our cloud migration. Zero downtime and improved performance.",
      author: "Michael Chen",
      role: "IT Director, InnovateLabs"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Expert Atlassian Consulting Services"
        description="Professional Jira consulting, Confluence setup, and Atlassian Cloud migration services. 4+ years Atlassian Community Leader with proven expertise in digital transformation."
        keywords="Jira consulting, Atlassian expert, Agile transformation, Jira automation, ITSM with Jira, Atlassian Cloud migration, Confluence consulting"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 gradient-bg hero-pattern"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Expert Atlassian Consulting for 
                  <span className="block text-accent"> Digital Transformation</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Certified Atlassian consultant with 4+ years as Community Leader. 
                  Specializing in Jira, Confluence, and cloud migration solutions that drive business success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">
                      Book Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="float-animation">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent" />
                      <span className="text-white">Certified Atlassian Expert</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent" />
                      <span className="text-white">4+ Years Community Leader</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent" />
                      <span className="text-white">50+ Successful Projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent" />
                      <span className="text-white">Cloud Migration Specialist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Atlassian Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From implementation to optimization, I provide end-to-end Atlassian consulting 
                services that transform how your team collaborates and delivers results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose AtlassianPro?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Certified Expert</h3>
                      <p className="text-gray-600">Multiple Atlassian certifications and 4+ years as an official Community Leader</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
                      <p className="text-gray-600">50+ successful implementations across various industries and team sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business-Focused Approach</h3>
                      <p className="text-gray-600">Solutions designed to drive measurable business outcomes and ROI</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6">
                    <blockquote className="text-gray-700 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Atlassian Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help optimize your Jira, Confluence, and Atlassian Cloud setup 
              to drive better business outcomes.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
