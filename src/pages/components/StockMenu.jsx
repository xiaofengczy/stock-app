import React from 'react';
import {Menu } from 'antd';
import {
  PayCircleOutlined,
  LineChartOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;

function StockMenu() {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<PayCircleOutlined />}>
        今日操盘
      </Menu.Item>
      <Menu.Item key="2" icon={<LineChartOutlined />}>
        股票池
      </Menu.Item>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="板块分析">
        <Menu.Item key="3">芯片</Menu.Item>
        <Menu.Item key="4">新能源汽车</Menu.Item>
        <Menu.Item key="5">化工</Menu.Item>
        <Menu.Item key="6">农林牧副鱼</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default StockMenu;
