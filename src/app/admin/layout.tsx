import { AdminSidebar } from '@/components/AdminSidebar/AdminSidebar';
import { RootLayout } from '@/types/types';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Cloud Host | Admin Dashboard',
	description: 'This Is Admin Dashboard',
};

const AdminDashboardLayout = ({ children }: RootLayout) => {
	return (
		<div className='flex'>
			<AdminSidebar />
			<main className='flex-1 overflow-hidden'>{children}</main>
		</div>
	);
};

export default AdminDashboardLayout;
