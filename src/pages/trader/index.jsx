import React, { Component, useEffect, useState } from 'react';
import styles from './index.less';
import { Button, Form, Input, Space, Table } from 'antd';
import { connect } from 'dva';
import { listTrader } from '@action/stockAction';
import { getColumnFields } from './TableMethods';
import { qsString } from '@utils/utils';

export default connect(
  ({ loading }) => {
    loading;
  },
  {
    listTrader,
  },
)(function Trader(props) {
  const { history, listTrader } = props;
  const [tableData, setTableData] = useState();

  useEffect(() => {
    listTrader({}).then(res => {
      let resData = res.data;
      setTableData(
        resData &&
        resData.map(data => {
          return {
            title: data.title,
            key: data.id,
            traderTime: data.traderTime,
            inputTime: data.inputTime,
            marketAnalysis:data.marketAnalysis
          };
        }),
      );
    });
  },[]);

  function onAdd() {
    history.push('/trader/add');
  }

  function onEdit(record) {
    console.log("edit");
    let params = {
      id: record.key
    };
    return history.push(`/trader/edit?${qsString(params)}`);
  }

  function onDetail(record) {
    console.log("detail");
    let params = {
      id: record.key
    };
    return history.push(`/trader/detail?${qsString(params)}`);
  }

  function onDelete(record) {
    console.log(record);
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
        columns={getColumnFields({ onEdit, onDetail, onDelete })}
        dataSource={tableData}
        style={{ marginTop: '30px' }}
      />
    </div>
  );
});
