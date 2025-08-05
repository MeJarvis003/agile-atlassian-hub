import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/layout/SEOHead';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesAddOns from '@/components/services/ServicesAddOns';
import ServicesProcess from '@/components/services/ServicesProcess';
import ServicesCTA from '@/components/services/ServicesCTA';

const Services = () => {

  return (
    <>
      <SEOHead 
        title="Atlassian Consulting Services - Jira, Confluence, JSM Implementation"
        description="Professional Atlassian consulting services including Jira implementation, Confluence setup, Jira Service Management, cloud migration, and automation solutions."
        keywords="Jira implementation, Confluence consulting, JSM setup, Atlassian cloud migration, Jira automation, ITSM consulting, agile transformation"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <ServicesHero />
        <ServicesGrid />
        <ServicesAddOns />
        <ServicesProcess />
        <ServicesCTA />
        <Footer />
      </div>
    </>
  );
};

export default Services;
