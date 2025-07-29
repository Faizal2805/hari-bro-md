
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Contact us today to discuss how we can help you achieve your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-white border border-gray-200 slide-in-left">
            <CardContent>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input
                      type="text"
                      className="w-full border border-gray-300 bg-white rounded-md px-3 py-2 text-sm"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      className="w-full border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2 text-sm"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    className="w-full border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2 text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    className="w-full border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2 text-sm"
                    placeholder="Enter message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    className="w-full border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2 text-sm"
                    rows={5}
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8 slide-in-right">
            <Card className="p-8 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <CardContent>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Address</div>
                      <div className="text-gray-600 dark:text-gray-300">123 Business Street, Suite 100<br />New York, NY 10001</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                      <div className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Email</div>
                      <div className="text-gray-600 dark:text-gray-300">contact@businesspro.com</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden scale-up" style={{animationDelay: '0.3s'}}>
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 flex items-center justify-center text-white">
                <div className="text-center">
                  <i className="fas fa-map text-4xl mb-2"></i>
                  <div className="text-lg font-medium">Interactive Map</div>
                  <div className="text-sm opacity-90">Our Location</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}