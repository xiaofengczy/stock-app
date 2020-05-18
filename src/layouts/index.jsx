import React  from 'react';
import { Layout } from 'antd';
import Login from '@/pages/login';
import Slider from './components/Slider';
import Header from './components/Header';
import Footer from './components/Footer';

function Index(props) {
  let children = props.children || {};

  if (props.location.pathname === '/login') {
    return <Login>{props.children}</Login>;
  }
  const routes = props.route.routes;
  let title = '';
  routes.map(route => {
    if (route.path === props.location.pathname) {
      title = route.title;
    }
  });

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Slider />
      <Layout>
        <Header title={title} />
        <div style={{ minHeight: '100vh' }}>{children}</div>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default Index;
