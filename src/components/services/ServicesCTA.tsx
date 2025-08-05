import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesCTA = () => {
  return (
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
  );
};

export default ServicesCTA;