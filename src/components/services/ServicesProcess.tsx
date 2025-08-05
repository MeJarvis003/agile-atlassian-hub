const ServicesProcess = () => {
  const processSteps = [
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
  ];

  return (
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
          {processSteps.map((process, index) => (
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
  );
};

export default ServicesProcess;