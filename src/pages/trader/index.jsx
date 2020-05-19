import React, { Component, useEffect } from 'react';
import styles from './index.less';
import { Button, Form, Input, Space, Table } from 'antd';
import { getTableColumns, getFilterData } from '../methods';
import FormLister from '@components/form/FormLister';
import { connect } from 'dva';
import { doTest } from '@action/stockAction';

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
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  ,
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  ,
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  ,
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  ,
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
];
export default
@connect(() => {}, {
  doTest,
})
class Trader extends Component {
  render() {
    const { history } = this.props;

    function onAdd() {
      history.push('/trader/add')
    }

    return (
      <div
        className={styles['site-layout-background']}
        style={{ padding: 24, marginTop: 20 }}
      >
        <Button type="primary" style={{ marginBottom: 24 }} onClick={onAdd}>
          新增
        </Button>
        <Form layout="inline" className={styles['search-form']}>
          <Form.Item
            label="股票名称"
            name="name"
            className={styles['search-style']}
            colon={false}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="股票代码"
            name="code"
            className={styles['search-style']}
            colon={false}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
        <Table
          columns={columns}
          dataSource={data}
          style={{ marginTop: '30px' }}
        />
      </div>
    );
  }
}
