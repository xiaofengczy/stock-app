import React, { Component, useEffect, useState } from 'react';
import styles from './index.less';
import { Button, Form, Input, Space, Table } from 'antd';
import { connect } from 'dva';
import { listTrader } from '@action/stockAction';

const columns = [
  {
    title: '操盘时间',
    dataIndex: 'traderTime',
    key: 'traderTime',
  },
  {
    title: '录入时间',
    dataIndex: 'inputTime',
    key: 'inputTime',
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
export default connect(({loading}) => {
  loading
}, {
  listTrader,
})
(function Trader(props) {
  const { history, listTrader } = props;
  const [tableData, setTableData] = useState();

  useEffect(() => {
    listTrader({}).then(res => {
      let resData = res.data;
      setTableData(
        resData && resData.map((data) => {
          return (
            {
              key: data.id,
              traderTime: data.traderTime,
              inputTime: data.inputTime,
            });
        }));
    });
  });

  function onAdd() {
    history.push('/trader/add');
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
          label="操盘时间"
          name="traderTime"
          className={styles['search-style']}
          colon={false}
        >
          <Input/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={tableData}
        style={{ marginTop: '30px' }}
      />
    </div>
  );
});
