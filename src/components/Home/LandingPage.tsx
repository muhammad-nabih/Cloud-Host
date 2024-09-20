import Image from 'next/image'
import { Check } from 'lucide-react'

// افترض أن هذه الصورة موجودة في مجلد public
import cloudImage from '../public/cloud-image.png'

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Hosting</h1>
            <p className="text-xl mb-6">The best web hosting solution for your online success</p>
            <ul className="space-y-2">
              {['Easy To Use Control Panel', 'Secure Hosting', 'Website Maintenance'].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-blue-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={cloudImage}
              alt="Cloud Hosting"
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <div className="text-center mt-4">
              <h2 className="text-3xl font-bold text-blue-600">CLOUD HOSTING</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
