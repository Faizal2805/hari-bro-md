const AboutSection = () => {
  return (
    <section className="py-20 bg-blue-600 text-white dark:bg-blue-700 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <div className="text-5xl font-bold mb-2 flex items-center justify-center">
              <i className="fas fa-briefcase text-white mr-2"></i>500+
            </div>
            <div className="text-xl text-blue-100">Successful Projects</div>
          </div>
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <div className="text-5xl font-bold mb-2 flex items-center justify-center">
              <i className="fas fa-smile text-white mr-2"></i>98%
            </div>
            <div className="text-xl text-blue-100">Client Satisfaction</div>
          </div>
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="text-5xl font-bold mb-2 flex items-center justify-center">
              <i className="fas fa-award text-white mr-2"></i>15+
            </div>
            <div className="text-xl text-blue-100">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;