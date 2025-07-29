
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="slide-in-left">
            <div className="text-2xl font-bold mb-4 flex items-center">
              <i className="fas fa-cube mr-2 text-blue-400 dark:text-blue-500 bounce-in"></i>
              BusinessPro
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6">
              Transforming businesses through innovative solutions and expert guidance. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 cursor-pointer transition-all duration-300 hover:scale-110">
                <i className="fab fa-facebook-f text-white text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 cursor-pointer transition-all duration-300 hover:scale-110">
                <i className="fab fa-twitter text-white text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 cursor-pointer transition-all duration-300 hover:scale-110">
                <i className="fab fa-linkedin-in text-white text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 cursor-pointer transition-all duration-300 hover:scale-110">
                <i className="fab fa-instagram text-white text-lg"></i>
              </a>
            </div>
          </div>
          <div className="slide-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">Strategic Planning</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">Process Optimization</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">Team Development</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">Technology Integration</a></li>
            </ul>
          </div>
          <div className="slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">News & Insights</a></li>
            </ul>
          </div>
          <div className="slide-in-right">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Stay updated with our latest news and insights.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-gray-600 dark:border-gray-700 bg-gray-800 dark:bg-gray-900 text-white text-sm"
              />
              <Button className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 ml-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 slide-up" style={{animationDelay: '0.4s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 BusinessPro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 dark:text-gray-500">
              <a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white dark:hover:text-blue-400 cursor-pointer transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}