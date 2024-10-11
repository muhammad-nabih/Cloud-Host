'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ErrorPageProp {
	error: Error;
	reset: () => void;
}
const ErrorPage = ({ error, reset }: ErrorPageProp) => {
	return (
		<div className='fix-height flex w-full items-center justify-center overflow-hidden bg-gray-100'>
			<div className='flex flex-col items-center space-y-4 p-10'>
				<Image src='/error.svg' priority alt='Error' width={'300'} height={'300'} />
				<h1 className='text-6xl font-bold text-gray-800'>Oops!</h1>
				<p className='text-2xl text-gray-600'>Something went wrong.</p>
				<p className='text-lg text-gray-600'>Error Message: {error.message}</p>
				<button
					className='mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'
					onClick={() => reset()}>
					Try Again
				</button>
				<Link
					href={'/'}
					className='mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'>
					Goto Home Page{' '}
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
