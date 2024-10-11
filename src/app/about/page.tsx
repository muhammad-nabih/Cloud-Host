import HeroSection from '@/app/about/HeroSection';
import ServicesSection from '@/app/about/ServicesSection';
import ChooseUsSection from '@/app/about/ChooseUsSection';
import TechStackSection from '@/app/about/TechStackSection';
import CTASection from '@/app/about/CTASection';
import { Metadata } from 'next';

export default function AboutPage() {
	let a = 1;
	var x = 1;

	return (
		<div className='fix-height min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 text-blue-900'>
			<main>
				<HeroSection />
				<ServicesSection />
				<ChooseUsSection />
				<TechStackSection />
				<CTASection />
			</main>
		</div>
	);
}

export const metadata: Metadata = {
	title: 'Cloud Host | About',
	description: 'This Is About Page',
};
