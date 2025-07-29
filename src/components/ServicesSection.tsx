import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card";

export default function ServicesSection() {
  return (
    // Features Section
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive business solutions designed to help your organization thrive in today's competitive marketplace.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg border border-gray-200 bg-white transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-2xl text-blue-600"></i>
              </div>
              <CardTitle className="text-xl text-gray-900">Strategic Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-500">
                Develop comprehensive strategies that align with your business objectives and drive sustainable growth across all departments.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg border border-gray-200 bg-white transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-2xl text-blue-600"></i>
              </div>
              <CardTitle className="text-xl text-gray-900">Process Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-500">
                Streamline your operations with proven methodologies that reduce costs and improve efficiency throughout your organization.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg border border-gray-200 bg-white transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-blue-600"></i>
              </div>
              <CardTitle className="text-xl text-gray-900">Team Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-500">
                Build high-performing teams through targeted training programs and leadership development initiatives.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg border border-gray-200 bg-white transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop-code text-2xl text-blue-600"></i>
              </div>
              <CardTitle className="text-xl text-gray-900">Technology Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-500">
                Implement cutting-edge technology solutions that enhance productivity and give you a competitive advantage.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg border border-gray-200 bg-white transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl text-blue-600"></i>
              </div>
              <CardTitle className="text-xl text-gray-900">Risk Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-500">
                Protect your business with comprehensive risk assessment and mitigation strategies tailored to your industry.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg border border-gray-200 bg-white transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-2xl text-blue-600"></i>
              </div>
              <CardTitle className="text-xl text-gray-900">Client Relations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-500">
                Build stronger customer relationships through improved communication strategies and service excellence programs.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}