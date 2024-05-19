import React from 'react';

import Background from '@/components/background';
import Session from '@/components/session';
import SignupForm from './form';

const Page = () => {
  return <Background><Session><SignupForm /></Session></Background>;
};

export default Page;
