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
        <Menu.Item key="1" icon={<PayCircleOutlined />}>
          <Link to={{ pathname: '/trader' }}>今日操盘</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<LineChartOutlined />}>
          <Link to={{ pathname: '/stockpool' }}>股票池</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="板块分析">
          <Menu.Item key="3">芯片</Menu.Item>
          <Menu.Item key="4">新能源汽车</Menu.Item>
          <Menu.Item key="5">化工</Menu.Item>
          <Menu.Item key="6">农林牧副鱼</Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
}

export default Slider;
