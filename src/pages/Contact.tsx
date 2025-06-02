
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/layout/SEOHead';
import { Mail, Phone, Calendar, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    services: [],
    projectTimeline: '',
    budget: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'Jira Implementation & Customization',
    'Confluence Knowledge Base Setup',
    'Jira Service Management for ITSM',
    'Atlassian Cloud Migration',
    'Automation & Workflow Optimization',
    'Agile Transformation Consulting',
    'Training & Support',
    'Other'
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    toast.success('Thank you for your message! I\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      phone: '',
      services: [],
      projectTimeline: '',
      budget: '',
      message: '',
      newsletter: false
    });
    
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@atlassianpro.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-5PM EST"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      details: "Book a free consultation",
      description: "30-minute strategy session"
    },
    {
      icon: MessageCircle,
      title: "LinkedIn",
      details: "@atlassianpro",
      description: "Connect for quick questions"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Contact - Schedule Your Atlassian Consultation"
        description="Get in touch for expert Atlassian consulting services. Schedule a free consultation to discuss your Jira, Confluence, and cloud migration needs."
        keywords="Atlassian consultant contact, Jira consulting inquiry, schedule consultation, Atlassian expert"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let's Discuss Your 
                <span className="text-gradient block">Atlassian Project</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ready to transform your team's productivity? Schedule a free consultation 
                to explore how I can help optimize your Atlassian tools and workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <method.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 mb-1">{method.details}</p>
                    <CardDescription>{method.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Schedule Your Free Consultation</CardTitle>
                    <CardDescription>
                      Tell me about your project and I'll get back to you within 24 hours with a 
                      customized proposal and next steps.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            required
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <Label htmlFor="role">Your Role</Label>
                          <Input
                            id="role"
                            value={formData.role}
                            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                            placeholder="Project Manager, IT Director, etc."
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <Label>Services Interested In *</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                          {serviceOptions.map((service) => (
                            <div key={service} className="flex items-center space-x-2">
                              <Checkbox
                                id={service}
                                checked={formData.services.includes(service)}
                                onCheckedChange={(checked) => handleServiceChange(service, checked)}
                              />
                              <Label htmlFor={service} className="text-sm">{service}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="timeline">Project Timeline</Label>
                          <Select value={formData.projectTimeline} onValueChange={(value) => setFormData(prev => ({ ...prev, projectTimeline: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-3-months">1-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="6-12-months">6-12 months</SelectItem>
                              <SelectItem value="planning">Just planning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="budget">Estimated Budget</Label>
                          <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-10k">Under $10k</SelectItem>
                              <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                              <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                              <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                              <SelectItem value="over-100k">Over $100k</SelectItem>
                              <SelectItem value="not-sure">Not sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          required
                          rows={4}
                          placeholder="Tell me about your current setup, challenges, and goals. The more details you provide, the better I can help you."
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked }))}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to newsletter for Atlassian tips and industry insights
                        </Label>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="mr-2 w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Mail className="mr-2 w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Quick Response Promise */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <CardTitle className="text-lg">Quick Response Guarantee</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Response within 24 hours</li>
                      <li>• Free 30-minute consultation</li>
                      <li>• No obligation proposal</li>
                      <li>• Customized recommendations</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* What to Expect */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">1. Initial Consultation</h4>
                      <p className="text-sm text-gray-600">
                        We'll discuss your current setup, challenges, and goals in detail.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">2. Custom Proposal</h4>
                      <p className="text-sm text-gray-600">
                        Receive a tailored proposal with timeline, deliverables, and pricing.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">3. Project Kickoff</h4>
                      <p className="text-sm text-gray-600">
                        Begin implementation with clear milestones and regular check-ins.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Frequently Asked</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Do you work with small teams?</h4>
                      <p className="text-xs text-gray-600">
                        Yes! I work with teams of all sizes, from startups to enterprise.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Can you help with existing setups?</h4>
                      <p className="text-xs text-gray-600">
                        Absolutely. I can optimize and improve existing Atlassian implementations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Do you provide training?</h4>
                      <p className="text-xs text-gray-600">
                        Yes, comprehensive training is included with all implementations.
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
