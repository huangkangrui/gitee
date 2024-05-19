import React from 'react';

import Background from '@/components/background';
import Session from '@/components/session';
import LoginForm from './form';

const Page = () => {
  return <Background><Session><LoginForm /></Session></Background>;
};

export default Page;
