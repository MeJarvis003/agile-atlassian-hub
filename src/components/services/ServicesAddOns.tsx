import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesAddOns = () => {
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
  );
};

export default ServicesAddOns;