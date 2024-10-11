'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiHome, FiFileText, FiMessageSquare } from 'react-icons/fi';
import { useSidebar } from '@/hooks/useSidebar';
import { MenuItem } from '@/types/types';
import Avatar from '../../../public/avatar.svg';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useEffect, useState } from 'react';

const menuItems: MenuItem[] = [
	{ id: 'dashboard', label: 'Dashboard', icon: FiHome, href: '/admin' },
	{
		id: 'articles',
		label: 'Articles',
		icon: FiFileText,
		href: '/admin/articles-table',
	},
	{
		id: 'comments',
		label: 'Comments',
		icon: FiMessageSquare,
		href: '/admin/comment-table',
	},
];

export function AdminSidebar() {
	const { activeItem } = useSidebar(menuItems);
	const [open, setOpen] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const handleSidebar = () => setOpen((prev) => !prev);

	useEffect(() => {
		const handleResize = () => {
			setOpen(window.innerWidth >= 768);
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();

		addEventListener('resize', handleResize);

		return () => removeEventListener('resize', handleResize);
	}, []);

	return (
		<aside
			className='fixed z-10 flex h-screen w-[300px] flex-col border-y-2 border-[#2d3778] bg-[#192949] p-4 text-white shadow-2xl duration-300 ease-in-out'
			style={{
				left: open ? '0' : '-300px',
			}}>
			<span
				className='text-whit top-1e absolute left-full mb-8 flex -translate-x-2/4 cursor-pointer items-center space-x-3 overflow-hidden rounded-full bg-[#2d47a8] p-2'
				onClick={handleSidebar}>
				<MdOutlineKeyboardArrowLeft className='h-5 w-5 text-lg font-bold' />
			</span>
			<div className='mb-8 flex w-full items-center space-x-3 overflow-hidden'>
				<Image src={Avatar} width={40} height={40} className='rounded-full' alt='User avatar' />
				<section className='flex-1'>
					<div className='font-semibold'>Muhammad Nabih</div>

					<small className='text-xs text-gray-400'>
						<span className='line-clamp-1'>muhammadnabih2020@gmail.com</span>
					</small>
				</section>
			</div>

			<nav className='flex-1'>
				<ul className='space-y-2'>
					{menuItems.map((item) => (
						<li key={item.id}>
							<Link
								href={item.href}
								className={`flex items-center space-x-3 rounded-lg p-2 transition-colors ${
									activeItem === item.id ? 'bg-[#2d4798] text-white' : 'text-gray-400 hover:bg-[#2d3778] hover:text-white'
								}`}>
								<item.icon className='h-5 w-5' />
								<span>{item.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
