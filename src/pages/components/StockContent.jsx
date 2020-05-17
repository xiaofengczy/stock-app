import React from 'react';
import { Layout, Menu, Breadcrumb, Form, Input, Button, Table, Space, Tag } from 'antd';
import styles from './index.less';

const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: '名字',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '代码',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '所属板块',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '股性分析',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '录入时间',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>详情</a>
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },{
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  ,{
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  ,{
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  ,{
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  ,{
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
];

function StockContent(props) {
  return (
    <Content style={{ margin: '0 16px' }}>
      {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
      {/*  <Breadcrumb.Item>User</Breadcrumb.Item>*/}
      {/*  <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
      {/*  <Breadcrumb.Item>222</Breadcrumb.Item>*/}
      {/*</Breadcrumb>*/}
      <div className={styles['site-layout-background']} style={{ padding: 24,marginTop:20}}>
        <Button type="primary"  style={{ marginBottom: 24}}>
          新增
        </Button>
        <Form layout="inline" className={styles['search-form']}>
          <Form.Item label="股票名称" name="name" className={styles['search-style']} colon={false}>
            <Input/>
          </Form.Item>
          <Form.Item label="股票代码" name="code" className={styles['search-style']} colon={false}>
            <Input/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
        <Table columns={columns} dataSource={data} style={{marginTop:"30px"}}/>
      </div>
    </Content>
  );
}

export default StockContent;
