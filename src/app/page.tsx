import LandingPage from '@/components/Home/LandingPage';
import PricingPlans from '@/components/Home/PricingPlans';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const HomePage = () => {
  return (
    <>
      <ToastContainer />
      <LandingPage />
      <PricingPlans />
    </>
  );
};

export default HomePage;
