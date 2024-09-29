import { AdminSidebar } from '@/components/AdminSidebar/AdminSidebar';
import { RootLayout } from '@/types/types';
import React from 'react';

const AdminDashboardLayout = ({ children }: RootLayout) => {
  return (

        <div className='flex'>
          <AdminSidebar />
          <main className='flex-1 '>{children}</main>
        </div>

  );
};

export default AdminDashboardLayout;
