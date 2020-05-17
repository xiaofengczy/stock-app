import React from 'react';
import styles from './index.less';
import { Layout } from 'antd';
import StockContent from './components/StockContent';
import StockMenu from './components/StockMenu';

const { Header, Footer, Sider } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className={styles['logo']}/>
          <StockMenu/>
        </Sider>
        <Layout>
          <Header className={styles['header-style']} style={{ padding: 0 }}>
            股票池
          </Header>
          <StockContent/>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by IT-BOY</Footer>
        </Layout>
      </Layout>
    );
  }
}
