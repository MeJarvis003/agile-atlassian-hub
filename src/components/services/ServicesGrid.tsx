import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle } from 'lucide-react';

const ServicesGrid = () => {
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

  return (
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
  );
};

export default ServicesGrid;