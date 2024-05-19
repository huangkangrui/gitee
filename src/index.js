import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';


import Login from '@/pages/login';
import Signup from '@/pages/signup';

import './index.less';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );
  }
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#fe7300',
      borderRadius: '2px',
    },
  }}>
  <HashRouter>
    <App />
  </HashRouter>
</ConfigProvider>);
