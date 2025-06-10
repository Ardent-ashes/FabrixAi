import { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SelectPlansPage() {
  const [billingType, setBillingType] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('personalized');
           const navigate = useNavigate();

    const handleBack = () => {
    // console.log('Navigate back');
    navigate('/paymentinfo'); // Navigate to the previous page (Services)
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter kit',
      price: { monthly: 0, yearly: 0 },
      description: 'Kickstart your website and business with a simple yet effective plan',
      buttonText: 'Current Plan',
      buttonVariant: 'outline',
      features: [
        'Create your own free website',
        'Automated agent maintenance',
        'Create your brand identity',
        'Create your brand identity'
      ]
    },
    {
      id: 'basic',
      name: 'Basic',
      price: { monthly: 19.9, yearly: 179.1 },
      description: 'Analytics, report, branding gets better with basic plan',
      buttonText: 'Get Basic',
      buttonVariant: 'outline',
      features: [
        'Get monthly Report',
        'Better analytics, database and maintenance',
        'Get premium theme',
        'Better brand identity',
        'Better security and customization'
      ]
    },
    {
      id: 'personalized',
      name: 'Personalized',
      price: { monthly: 29.9, yearly: 269.1 },
      description: 'You will get personalized service, theme and report',
      buttonText: 'Get Personalized',
      buttonVariant: 'primary',
      isPopular: true,
      features: [
        'Get Weekly Report',
        'Full analytics, dashboard access',
        'Get customized theme',
        'Groundbreaking potential to create new lead',
        'Fully secured and agent maintained service'
      ]
    },
    {
      id: 'super',
      name: 'Super',
      subtitle: 'Personalized',
      price: { monthly: 99, yearly: 891 },
      description: 'Want fully customized plan and service for your garments? contact us',
      buttonText: 'Contact US',
      buttonVariant: 'outline',
      hasIcon: true,
      features: [
        'Get everything customized',
        'Get a fully personalized design',
        'Get a dedicated agent for maintainance and security'
      ]
    }
  ];

  const getCurrentPrice = (plan: { id: string; name: string; price: { monthly: number; yearly: number; }; description: string; buttonText: string; buttonVariant: string; features: string[]; isPopular?: undefined; subtitle?: undefined; hasIcon?: undefined; } | { id: string; name: string; price: { monthly: number; yearly: number; }; description: string; buttonText: string; buttonVariant: string; isPopular: boolean; features: string[]; subtitle?: undefined; hasIcon?: undefined; } | { id: string; name: string; subtitle: string; price: { monthly: number; yearly: number; }; description: string; buttonText: string; buttonVariant: string; hasIcon: boolean; features: string[]; isPopular?: undefined; }) => {
    return billingType === 'monthly' ? plan.price.monthly : plan.price.yearly;
  };

  return (
    <div className="gradient-background min-h-screen w-screen flex items-center justify-center py-[2%] px-[5%] xl:px-[10%] h-full">
      {/* Background pattern */}
      

      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        {/* Back button */}
        <button
              onClick={handleBack}
              className="back-button w-[8%] py-[1%] px-[1%] transition-all"
            >
              Back
            </button>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#EAB308] mb-4">Select your plans</h1>
          <p className="text-gray-300 text-lg">Details about personalized plan and marketing guideline</p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-2 transition-all hover:transform hover:scale-105 cursor-pointer ${
                selectedPlan === plan.id
                  ? 'border-[#EAB308] shadow-lg shadow-yellow-400/20 bg-[#EAB308]'
                  : plan.isPopular 
                    ? 'border-[#EAB308] shadow-lg shadow-yellow-400/20' 
                    : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#EAB308] text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {plan.hasIcon && <Zap className="w-5 h-5 text-[#EAB308] ml-2" />}
                </div>
                {plan.subtitle && (
                  <p className="text-gray-300 text-sm">{plan.subtitle}</p>
                )}
                
                <div className=" mt-4 mb-2">
                  <span className="text-gray-400 text-sm">$</span>
                  <span className="text-3xl font-bold text-white">
                    {getCurrentPrice(plan)}
                  </span>
                  <span className="text-gray-400 text-sm">
                    /{billingType === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors mb-6 ${
                  selectedPlan === plan.id
                    ? 'bg-[#EAB308] text-blue-900 hover:bg-[#EAB308]'
                    : plan.buttonVariant === 'primary'
                      ? 'bg-[#EAB308] text-blue-900 hover:bg-[#EAB308]'
                      : 'bg-transparent border border-gray-600 text-white hover:border-[#EAB308] hover:text-[#EAB308]'
                }`}
              >
                {plan.buttonText}
                {selectedPlan === plan.id && (
                  <span className="ml-2">✓</span>
                )}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`rounded-full p-1 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.isPopular ? 'bg-[#EAB308]' : 'bg-gray-600'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.isPopular ? 'text-blue-900' : 'text-white'
                      }`} />
                    </div>
                    <span className={`text-sm ${
                      plan.isPopular ? 'text-[#EAB308]' : 'text-gray-300'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Billing Toggle and Continue Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Billing Toggle */}
          <div className="flex items-center bg-gray-800/50 rounded-xl p-1">
            <button
              onClick={() => setBillingType('monthly')}
              className={`px-6 py-2 rounded-xl transition-colors ${
                billingType === 'monthly'
                  ? 'bg-[#EAB308] text-blue-900'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingType('yearly')}
              className={`px-6 py-2 rounded-xl transition-colors ${
                billingType === 'yearly'
                  ? 'bg-[#EAB308] text-blue-900'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>

          {/* Continue Section */}
          <div className="text-center">
            <p className="text-[#EAB308] text-sm mb-3">Get 10% off by billing YEARLY</p>
            <button onClick={() => navigate('/PaymentOption')} className="bg-[#EAB308] text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-colors">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}