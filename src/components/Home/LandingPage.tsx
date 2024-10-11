'use client';
import Image from 'next/image';
import { Check } from 'lucide-react';
import cloudImage from '../../../public/cloud.webp';
import { AnimatedText } from '@/lib/framer-motion/AnimatedText';
import { motion } from 'framer-motion';

export default function LandingPage() {
	return (
		<div className='h-auto bg-background dark:bg-foreground lg:min-h-screen'>
			<div className='container mx-auto px-4 py-8'>
				<div className='flex flex-col items-center justify-between md:flex-row'>
					<div className='md:w-1/2'>
						<AnimatedText text='Cloud Hosting' el='h1' className='mb-4 text-4xl font-bold md:text-5xl' />
						<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='mb-6 text-xl'>
							The best web hosting solution for your online success
						</motion.p>
						<ul className='space-y-2'>
							{['Easy To Use Control Panel', 'Secure Hosting', 'Website Maintenance'].map((feature, index) => (
								<li key={index} className='flex items-center'>
									<motion.span
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
										}}>
										<Check className='mr-2 text-blue-500' />
									</motion.span>
									<motion.span
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
										}}>
										{feature}
									</motion.span>
								</li>
							))}
						</ul>
					</div>
					<motion.div
						initial={{ y: -10 }}
						animate={{ y: 10 }}
						transition={{
							type: 'smooth',
							repeatType: 'mirror',
							duration: 2,
							repeat: Infinity,
						}}
						className='-z-1 relative mt-8 flex flex-col items-center md:mt-0 md:w-1/2'>
						<Image src={cloudImage} alt='Cloud Hosting' priority={true} className='hidden w-full drop-shadow-2xl max-sm:h-auto md:block' />
					</motion.div>
				</div>
			</div>
		</div>
	);
}
