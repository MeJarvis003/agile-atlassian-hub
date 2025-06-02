
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/layout/SEOHead';
import { Award, Users, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

const About = () => {
  const certifications = [
    "Atlassian Certified Professional - Jira Administration",
    "Atlassian Certified Professional - Confluence Administration", 
    "Atlassian Certified Professional - Jira Service Management",
    "Atlassian Cloud Migration Assistant Certification",
    "Agile Project Management Professional (PMI-ACP)",
    "ITIL 4 Foundation Certification"
  ];

  const experience = [
    {
      period: "2020 - Present",
      role: "Atlassian Community Leader",
      organization: "Atlassian Community",
      description: "Official community leader helping thousands of users with Atlassian best practices, troubleshooting, and optimization strategies."
    },
    {
      period: "2019 - Present", 
      role: "Senior Atlassian Consultant",
      organization: "AtlassianPro Consulting",
      description: "Leading enterprise Atlassian implementations, cloud migrations, and digital transformation initiatives for companies ranging from startups to Fortune 500."
    },
    {
      period: "2017 - 2019",
      role: "Agile Coach & Jira Administrator",
      organization: "TechSolutions Inc.",
      description: "Implemented agile methodologies and administered Jira/Confluence for multiple product teams, improving delivery velocity by 40%."
    },
    {
      period: "2015 - 2017",
      role: "Project Manager & Business Analyst", 
      organization: "Digital Innovations Co.",
      description: "Managed cross-functional projects and analyzed business requirements, leading to the adoption of Atlassian tools across the organization."
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "50+ Successful Projects",
      description: "Led implementations across diverse industries including healthcare, finance, e-commerce, and technology"
    },
    {
      icon: TrendingUp,
      title: "Average 45% Productivity Increase",
      description: "Clients typically see significant productivity improvements within 3 months of implementation"
    },
    {
      icon: Award,
      title: "Atlassian Community Recognition",
      description: "Top contributor in Atlassian Community with over 1000 helpful answers and solutions"
    },
    {
      icon: Calendar,
      title: "4+ Years Community Leadership",
      description: "Officially recognized Atlassian Community Leader since 2020, helping shape product direction"
    }
  ];

  const expertise = [
    "Jira Software & Administration",
    "Confluence Administration", 
    "Jira Service Management",
    "Atlassian Cloud Migration",
    "Workflow Design & Optimization",
    "Automation & Scripting",
    "Agile Methodologies",
    "ITSM Best Practices",
    "DevOps Integration",
    "Team Training & Change Management"
  ];

  return (
    <>
      <SEOHead 
        title="About - Certified Atlassian Expert & Community Leader"
        description="Learn about my journey as a certified Atlassian consultant with 4+ years as Community Leader. Expertise in Jira, Confluence, cloud migration, and digital transformation."
        keywords="Atlassian consultant, Jira expert, Community Leader, Atlassian certifications, agile coach, ITSM consultant"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Passionate About 
                  <span className="text-gradient block">Atlassian Excellence</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  With over 6 years in the Atlassian ecosystem and 4+ years as an official 
                  Community Leader, I help organizations unlock the full potential of their 
                  Atlassian investment through expert consulting and implementation services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Work With Me
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Atlassian Community Leader</h3>
                      <p className="text-gray-600 text-sm">Official recognition since 2020</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Recognized by Atlassian for exceptional community contributions, 
                    helping thousands of users optimize their workflows and solve complex challenges.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From project manager to Atlassian expert - a journey driven by passion 
                for helping teams work more efficiently and effectively.
              </p>
            </div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <Badge variant="outline" className="mb-2">{exp.period}</Badge>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.organization}</p>
                    </div>
                    <div className="lg:col-span-3">
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Key Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Measurable impact through expert Atlassian consulting and community leadership
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Expertise */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Certifications & Credentials
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Areas of Expertise
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="justify-center py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Philosophy */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">My Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-700">
                <p>
                  Technology should empower teams, not constrain them. My approach to Atlassian 
                  consulting is rooted in understanding your unique business needs and crafting 
                  solutions that enhance collaboration, visibility, and productivity.
                </p>
                <p>
                  As an Atlassian Community Leader, I believe in the power of sharing knowledge 
                  and best practices. Every project is an opportunity to not just implement tools, 
                  but to transform how teams work together.
                </p>
                <p>
                  Whether you're a startup implementing your first Jira instance or an enterprise 
                  migrating to Atlassian Cloud, my goal is to ensure your success through expert 
                  guidance, proven methodologies, and ongoing support.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how my expertise can help transform your team's Atlassian experience 
              and drive measurable business results.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Schedule a Consultation
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

export default About;
