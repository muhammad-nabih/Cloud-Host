'use client';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { PricingPlan } from '@/utils/types';
import { CiCircleCheck } from 'react-icons/ci';
import Link from 'next/link';
const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: { monthly: 9.99, yearly: 99 },
    description: 'Perfect for small projects and personal websites',
    features: [
      { text: '10 GB SSD Storage', included: true },
      { text: '1 CPU Core', included: true },
      { text: '1 GB RAM', included: true },
      { text: '1 TB Bandwidth', included: true },
      { text: '1 Domain', included: true },
      { text: '24/7 Support', included: false },
    ],
  },
  {
    name: 'Pro',
    price: { monthly: 29.99, yearly: 299 },
    description: 'Ideal for growing businesses and e-commerce sites',
    features: [
      { text: '50 GB SSD Storage', included: true },
      { text: '2 CPU Cores', included: true },
      { text: '4 GB RAM', included: true },
      { text: '3 TB Bandwidth', included: true },
      { text: '5 Domains', included: true },
      { text: '24/7 Priority Support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: { monthly: 99.99, yearly: 999 },
    description: 'Advanced solutions for large-scale applications',
    features: [
      { text: '200 GB SSD Storage', included: true },
      { text: '8 CPU Cores', included: true },
      { text: '16 GB RAM', included: true },
      { text: '10 TB Bandwidth', included: true },
      { text: 'Unlimited Domains', included: true },
      { text: '24/7 Dedicated Support', included: true },
    ],
  },
];

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-[#192949] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Pricing Plans</h2>
          <p className="mt-4 text-xl text-gray-300">Choose the plan that is right for you</p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center">
            <span className={`mr-3 ${isYearly ? 'text-gray-400' : 'text-white'}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="bg-gray-600" />
            <span className={`ml-3 ${isYearly ? 'text-white' : 'text-gray-400'}`}>Yearly</span>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:max-w-none xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="divide-y divide-gray-700 rounded-lg border border-gray-700 bg-gray-900 shadow-md"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-4 text-gray-300">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-base font-medium text-gray-400">
                    {isYearly ? '/year' : '/month'}
                  </span>
                </p>
                <Link
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-blue-600 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
              <div className="px-6 pb-8 pt-6">
                <h4 className="text-sm font-medium uppercase tracking-wide text-gray-300">
                  What is included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex space-x-3">
                      <CiCircleCheck
                        className={`h-5 w-5 flex-shrink-0 ${
                          feature.included ? 'text-green-500' : 'text-gray-400'
                        }`}
                      />

                      <span className={feature.included ? 'text-gray-300' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
