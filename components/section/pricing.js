import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

// Main component for the pricing section
const PricingSection = () => {
  // State to manage the billing cycle (monthly vs. yearly)
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Updated plans with realistic market prices
  const plans = [
    {
      name: "Starter",
      description: "For individuals getting started on their fitness journey.",
      prices: {
        monthly: 30, // Updated price
        yearly: 300  // Updated price
      },
      features: [
        "Full gym access",
        "Locker & changing rooms",
        "Basic equipment training",
        "7 AM - 8 PM access"
      ],
      popular: false,
    },
    {
      name: "Pro",
      description: "For fitness enthusiasts looking for more flexibility and perks.",
      prices: {
        monthly: 50, // Updated price
        yearly: 500  // Updated price
      },
      features: [
        "Everything in Starter",
        "Group fitness classes",
        "Sauna & steam room",
        "Nutrition consultation",
        "6 AM - 10 PM access"
      ],
      popular: true,
    },
    {
      name: "Elite",
      description: "The ultimate package for dedicated athletes and professionals.",
      prices: {
        monthly: 70, // Updated price
        yearly: 700  // Updated price
      },
      features: [
        "Everything in Pro",
        "Personal training (4 sessions/mo)",
        "Custom meal plans",
        "Priority booking",
        "24/7 gym access"
      ],
      popular: false,
    }
  ];

  return (
    
    <div className="bg-black text-white antialiased" id='pricing'>
      <div className="max-w-7xl mx-auto py-16 sm:py-10 sm:pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Find Your
            <span className="block text-lime-400">Perfect Plan</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Commit to your fitness with a plan that adapts to you. Save big with our annual memberships.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center items-center mt-10">
          <span 
            className={`px-4 py-2 text-lg font-medium rounded-l-lg cursor-pointer transition-colors ${billingCycle === 'monthly' ? 'text-black bg-lime-400' : 'text-gray-300 bg-gray-800'}`} 
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </span>
          <span 
            className={`relative px-4 py-2 text-lg font-medium rounded-r-lg cursor-pointer transition-colors ${billingCycle === 'yearly' ? 'text-black bg-lime-400' : 'text-gray-300 bg-gray-800'}`} 
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
            <span className="absolute -top-3 -right-3 bg-lime-500 text-black text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
              Save 16%
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>
      </div>
    </div>
  );
};

// A dedicated component for each pricing card
const PricingCard = ({ plan, billingCycle }) => {
  const price = plan.prices[billingCycle];
  const isPopular = plan.popular;

  return (
    <div className={`relative flex flex-col h-full rounded-2xl p-px transition-all duration-300 ${isPopular ? 'bg-lime-400' : 'bg-gray-800'}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 mr-6 -mt-3">
          <div className="inline-flex items-center text-sm bg-lime-400 text-black font-semibold py-1.5 px-4 rounded-full shadow-lg">
            <Star className="w-4 h-4 mr-1.5 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className="relative flex flex-col h-full bg-gradient-to-b from-gray-900 to-black rounded-[15px] p-8">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          <p className="mt-2 text-gray-400">{plan.description}</p>
          
          <div className="mt-6 flex items-baseline">
            <span className="text-5xl font-extrabold tracking-tight">${price}</span>
            <span className="ml-2 text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
          </div>

          <ul className="mt-8 space-y-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="flex-shrink-0 w-6 h-6 text-lime-400" aria-hidden="true" />
                <span className="ml-3 text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-10">
          <a href="#" className={`block w-full text-center rounded-lg px-6 py-4 text-lg font-semibold transition-transform duration-300 transform hover:scale-105 ${isPopular ? 'text-black bg-lime-400 hover:bg-lime-300' : 'bg-gray-800 hover:bg-gray-700'}`}>
            Choose {plan.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
