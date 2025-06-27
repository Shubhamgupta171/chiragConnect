import { Link } from 'react-router-dom';
import { Building2, Users, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const Welcome = () => {
  const features = [
    {
      icon: Building2,
      title: 'Vendor Management',
      description: 'Comprehensive vendor registration and management system',
    },
    {
      icon: Users,
      title: 'Multi-Role Support',
      description: 'Support for vendors, buyers, and administrators',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Platform',
      description: 'Enterprise-grade security and compliance',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Quick registration and approval workflows',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">C</span>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-gray-900">C.H.I.R.A.G.</div>
                  <div className="text-sm text-gray-600 tracking-wider">CONNECT</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">CHIRAG CONNECT</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The premier vendor management platform connecting businesses with trusted suppliers.
              Streamline your procurement process with our comprehensive registration and management system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <button className="px-8 py-3 text-lg font-medium bg-gray-800 text-white hover:bg-gray-900 rounded-md flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link to="/login">
                <button className="px-8 py-3 text-lg font-medium border border-gray-300 hover:bg-gray-100 rounded-md">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CHIRAG CONNECT?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides everything you need to manage vendor relationships effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of vendors and buyers who trust CHIRAG CONNECT for their business needs
          </p>
          <Link to="/login">
            <button className="px-8 py-3 text-lg font-medium bg-white text-blue-600 rounded-md hover:bg-gray-100 flex items-center justify-center">
              Start Registration <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
