import React from 'react';
import styles from '../index.less';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import {
  PayCircleOutlined,
  LineChartOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
function Slider(props) {
  return (
    <Layout.Sider collapsible>
      <div className={styles['logo']} />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="trader" icon={<PayCircleOutlined />}>
          <Link to={{ pathname: '/trader' }}>今日操盘</Link>
        </Menu.Item>
        <Menu.Item key="stockpool" icon={<LineChartOutlined />}>
          <Link to={{ pathname: '/stock' }}>股票池</Link>
        </Menu.Item>
        <Menu.Item key="eventdriven" icon={<AppstoreOutlined />}>
          <Link to={{ pathname: '/event' }}>事件驱动</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default Slider;
