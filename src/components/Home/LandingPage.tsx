import Image from 'next/image';
import { Check } from 'lucide-react';
import cloudImage from '../../../public/cloud.webp';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="md:w-1/2">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Cloud Hosting</h1>
            <p className="mb-6 text-xl">The best web hosting solution for your online success</p>
            <ul className="space-y-2">
              {['Easy To Use Control Panel', 'Secure Hosting', 'Website Maintenance'].map(
                (feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="-z-1 relative mt-8 flex flex-col items-center md:mt-0 md:w-1/2">
            <Image
              src={cloudImage}
              alt="Cloud Hosting"
              priority={true}
              className="hidden w-full drop-shadow-2xl max-sm:h-auto md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
