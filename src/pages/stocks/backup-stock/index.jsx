import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Button, Form, Input, Table, Modal } from 'antd';
import { connect } from 'dva';
import { listStock, deleteStock } from '@action/stockAction';
import * as moment from 'moment';
import { getColumnFields } from './TableMethods';
import { qsString } from '@utils/utils';

const { confirm } = Modal;

export default connect(
  ({ loading }) => ({
    stockListLoading: loading.effects['stock/listStock'],
  }),
  {
    listStock,
    deleteStock,
  },
)(function Index(props) {
  const { history, listStock, stockListLoading, deleteStock } = props;
  const [stockList, setStockList] = useState();
  const [pagination, setPagination] = useState({});

  function onSearch(params) {
    listStock(params).then(res => {
      setPagination({
        current: Number(res.data.page) || 1,
        pageSize: Number(res.data.pageSize) || 10,
        total: Number(res.data.total) || 0,
        showQuickJumper: false,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '30', '40', '50'],
        showTotal: total => `共有${total}条`,
      });

      let resData = res.data.stockList;
      setStockList(
        resData &&
          resData.map(data => {
            return {
              key: data.id,
              id: data.id,
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

  function onFinish(values) {
    onSearch(values);
  }

  useEffect(() => {
    onSearch({});
  }, []);

  function onAdd() {
    history.push('/stocks/backup-stock/add');
  }

  function onEdit(record) {
    let params = {
      id: record.id,
    };
    return history.push(`/stocks/backup-stock/edit?${qsString(params)}`);
  }

  function onDetail(record) {
    let params = {
      id: record.id,
    };
    return history.push(`/stocks/backup-stock/detail?${qsString(params)}`);
  }

  //删除
  const onDelete = (record = {}) => {
    const { id } = record || {};
    confirm({
      content: '确定删除？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        deleteStock(id).then(() => onSearch({}));
      },
    });
  };

  function onPageChange(params) {
    let param = {
      page: params.current,
      pageSize: params.pageSize,
    };
    onSearch(param);
  }

  return (
    <div
      className={styles['site-layout-background']}
      style={{ padding: 24, marginTop: 20 }}
    >
      <Button type="primary" style={{ marginBottom: 24 }} onClick={onAdd}>
        新增
      </Button>
      <Form
        layout="inline"
        className={styles['search-form']}
        onFinish={onFinish}
      >
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
        className={'table-style'}
        columns={getColumnFields({ onEdit, onDetail, onDelete })}
        dataSource={stockList}
        style={{ marginTop: '30px' }}
        pagination={pagination}
        onChange={onPageChange}
        loading={stockListLoading}
      />
    </div>
  );
});
