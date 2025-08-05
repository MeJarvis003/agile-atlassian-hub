import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesHero = () => {
  return (
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
  );
};

export default ServicesHero;