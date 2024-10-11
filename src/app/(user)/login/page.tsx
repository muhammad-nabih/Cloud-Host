import LoginForm from '@/app/(user)/login/LoginForm';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DisplayAnimation from '@/lib/framer-motion/DisplayAnimation';
import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

export default function Login() {
	return (
		<div className='fix-height flex items-center justify-center bg-zinc-200'>
			<ToastContainer />
			<DisplayAnimation>
				<Card className='my-3 w-[350px]'>
					<CardHeader>
						<CardTitle className='text-xl font-bold text-[#1e40af]'>Login</CardTitle>
						<CardDescription>Enter your credentials to access your account</CardDescription>
					</CardHeader>
					<LoginForm />
				</Card>
			</DisplayAnimation>
		</div>
	);
}

export const metadata: Metadata = {
	title: 'Cloud Host | Login',
	description: 'This Is Login Page',
};
