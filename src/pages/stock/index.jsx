import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Button, Form, Input, Table } from 'antd';
import { connect } from 'dva';
import { listStock } from '@action/stockAction';
import * as moment from 'moment';
import { getColumnFields } from '../stock/TableMethods';

export default connect(
  ({ loading }) => ({
    stockListLoading: loading.effects['stock/listStock'],
  }),
  {
    listStock,
  },
)(function Index(props) {
  const { history, listStock, stockListLoading } = props;
  const [ stockList, setStockList ] = useState();

  function onAdd() {
    history.push('/stock/add');
  }

  function onSearch(params) {
    listStock(params).then(res => {
      let resData = res.data;
      setStockList(
        resData &&
        resData.map(data => {
          return {
            name: data.name,
            code: data.code,
            plate: data.plate,
            stockFemoral: data.stockFemoral,
            createTime: moment(data.createTime).format('YYYY-MM-DD'),
          };
        }),
      );
    });
  }

  useEffect(() => {
    onSearch({});
  }, []);

  function onEdit() {

  }


  function onDetail() {

  }


  function onDelete() {

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
          <Input/>
        </Form.Item>
        <Form.Item
          label="股票代码"
          name="code"
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
        className={'table-style'}
        columns={getColumnFields({ onEdit, onDetail, onDelete })}
        dataSource={stockList}
        style={{ marginTop: '30px' }}
        loading={stockListLoading}
      />
    </div>
  );
});
