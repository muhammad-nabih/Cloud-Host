import Image from 'next/image';
import React from 'react';
import NotFound from '../../public/not-found.svg';

const NotFoundPage = () => {
	return (
		<div className='fix-height flex items-center justify-center px-2 py-3'>
			<div className='grid place-content-center bg-white px-4'>
				<div className='text-center'>
					<Image src={NotFound} alt='Not Found ' objectFit='contain' layout='responsive' />

					<h1 className='mt-6 font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'>Uh-oh!</h1>

					<p className='mt-4 text-gray-500 lg:text-3xl'>We can't find that page.</p>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
