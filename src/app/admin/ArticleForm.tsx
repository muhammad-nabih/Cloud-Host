'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import DisplayAnimation from '@/lib/framer-motion/DisplayAnimation';

const ArticleForm = () => {
	const [article, setArticle] = useState({
		title: '',
		description: '',
	});
	const { title, description } = article;
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!title.trim() || !description.trim()) {
			toast.error('Please fill in all fields', {
				position: 'top-right',
				autoClose: 2000,
			});
			return;
		}
		// Here you would typically handle the article submission logic
		toast.success('Article added successfully', {
			position: 'top-right',
			autoClose: 1000,
		});
		setTimeout(() => {
			router.push('/admin/articles');
		}, 1500);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setArticle({
			...article,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<DisplayAnimation>
			<Card className='relative mx-auto w-[350px] lg:w-[500px]'>
				<form onSubmit={handleSubmit} className=''>
					<CardContent className='py-4'>
						<div className='flex flex-col justify-between space-y-2'>
							<div className='space-y-2'>
								<Label htmlFor='title' className='text-md font-bold'>
									Article Title
								</Label>
								<Input id='title' name='title' placeholder='Enter article title' value={title} onChange={handleInputChange} />
							</div>
							<div className='space-y-2'>
								<Label htmlFor='description' className='text-md font-bold'>
									Article Description
								</Label>
								<Textarea
									id='description'
									name='description'
									placeholder='Write your article description'
									value={description}
									onChange={handleInputChange}
									className='min-h-[250px] resize-none placeholder-[#a0aec0] focus:border-[#5d9ff2]'
								/>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button type='submit' className='w-full transform rounded bg-[#5d9ff2] px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-[#3b82f6]'>
							Add Article
						</Button>
					</CardFooter>
				</form>
			</Card>
		</DisplayAnimation>
	);
};

export default ArticleForm;
