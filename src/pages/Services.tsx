import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/layout/SEOHead';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Jira Implementation & Customization",
      description: "Complete setup and configuration of Jira for your team's specific needs",
      features: [
        "Project setup and workflow design",
        "Custom fields and screen configuration",
        "Permission schemes and security",
        "User training and documentation",
        "Performance optimization"
      ],
      timeline: "2-4 weeks",
      category: "Implementation"
    },
    {
      title: "Confluence Knowledge Base Setup",
      description: "Structured documentation system for seamless knowledge sharing",
      features: [
        "Space architecture design",
        "Template creation and standardization",
        "Integration with Jira projects",
        "User permissions and governance",
        "Content migration from existing systems"
      ],
      timeline: "1-3 weeks",
      category: "Knowledge Management"
    },
    {
      title: "Jira Service Management for ITSM",
      description: "Complete ITSM solution implementation with best practices",
      features: [
        "Service desk configuration",
        "SLA and escalation setup",
        "Customer portal customization",
        "Asset management integration",
        "Reporting and metrics dashboard"
      ],
      timeline: "3-5 weeks",
      category: "ITSM"
    },
    {
      title: "Atlassian Cloud Migration",
      description: "Seamless migration from Server/Data Center to Cloud",
      features: [
        "Migration planning and assessment",
        "Data migration and validation",
        "App compatibility review",
        "User training on Cloud features",
        "Post-migration optimization"
      ],
      timeline: "4-8 weeks",
      category: "Migration"
    },
    {
      title: "Automation & Workflow Optimization",
      description: "Custom automations to streamline your processes",
      features: [
        "Jira automation rules creation",
        "Cross-project workflow design",
        "Integration with external tools",
        "Advanced reporting and dashboards",
        "Performance monitoring"
      ],
      timeline: "2-3 weeks",
      category: "Automation"
    },
    {
      title: "Automation Implementation",
      description: "Advanced automation solutions to eliminate manual tasks and boost productivity",
      features: [
        "Custom automation rule development",
        "Smart notification and escalation systems",
        "Automated issue transitions and assignments",
        "Cross-platform integration automation",
        "Performance metrics and optimization"
      ],
      timeline: "3-4 weeks",
      category: "Automation"
    },
    {
      title: "Agile Transformation Consulting",
      description: "End-to-end agile implementation with Atlassian tools",
      features: [
        "Agile framework selection and setup",
        "Scrum/Kanban board configuration",
        "Sprint planning and retrospective tools",
        "Team coaching and training",
        "Metrics and continuous improvement"
      ],
      timeline: "6-12 weeks",
      category: "Transformation"
    }
  ];

  const addOns = [
    {
      title: "24/7 Support Package",
      description: "Ongoing support and maintenance for your Atlassian instance"
    },
    {
      title: "Training & Certification",
      description: "Comprehensive training programs for your team members"
    },
    {
      title: "Health Check & Optimization",
      description: "Regular performance audits and optimization recommendations"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Atlassian Consulting Services - Jira, Confluence, JSM Implementation"
        description="Professional Atlassian consulting services including Jira implementation, Confluence setup, Jira Service Management, cloud migration, and automation solutions."
        keywords="Jira implementation, Confluence consulting, JSM setup, Atlassian cloud migration, Jira automation, ITSM consulting, agile transformation"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Atlassian 
                <span className="text-gradient block">Consulting Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your team's productivity with expert Atlassian implementations, 
                customizations, and optimization services tailored to your business needs.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary">{service.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.timeline}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/contact?service={service.title}">
                        Book Free Consultation
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Additional Services & Support
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Extend your Atlassian investment with ongoing support and specialized services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <CardTitle className="text-lg">{addon.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {addon.description}
                    </CardDescription>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                My Proven Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A structured approach ensuring successful outcomes for every project
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  description: "Understanding your current setup, challenges, and goals"
                },
                {
                  step: "02", 
                  title: "Strategy & Planning",
                  description: "Developing a customized implementation roadmap"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Executing the plan with regular check-ins and updates"
                },
                {
                  step: "04",
                  title: "Training & Support",
                  description: "Ensuring your team is fully equipped for success"
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Atlassian Setup?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your specific needs and learn how 
              I can help transform your team's productivity.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book Free Consultation
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

export default Services;
