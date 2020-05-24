import React, { Component, useEffect, useState } from 'react';
import styles from './index.less';
import { Button, Form, Input, Space, Table, Modal, DatePicker } from 'antd';
import { connect } from 'dva';
import { listTrader, deleteTrader } from '@action/traderAction';
import { getColumnFields } from './TableMethods';
import { qsString } from '@utils/utils';
import * as moment from 'moment';

const { confirm } = Modal;

export default connect(({ loading }) => ({
    traderListLoading: loading.effects['trader/listTrader'],
  }),
  {
    listTrader,
    deleteTrader,
  },
)(function Trader(props) {
  const { history, listTrader, deleteTrader, traderListLoading } = props;
  const [tableData, setTableData] = useState();
  const [traderTime, setTraderTime] = useState();
  const [pagination, setPagination] = useState({});

  function onSearch(params) {
    listTrader(params).then(res => {
      let resData = res.data;
      setPagination({
        current: Number(res.data.page) || 1,
        pageSize: Number(res.data.pageSize) || 10,
        total: Number(res.data.total) || 0,
        showQuickJumper: false,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '30', '40', '50'],
        showTotal: total => `共有${total}条`,
      });
      let restList = resData.traderList;
      setTableData(
        restList &&
        restList.map(data => {
          return {
            title: data.title,
            key: data.id,
            traderTime: moment(data.traderTime).format('YYYY-MM-DD'),
            inputTime: data.inputTime
              ? moment(data.inputTime).format('YYYY-MM-DD')
              : null,
            marketAnalysis: data.marketAnalysis,
          };
        }),
      );
    });
  }

  useEffect(() => {
    onSearch({});
  }, []);

  function onAdd() {
    history.push('/trader/add');
  }

  function onEdit(record) {
    let params = {
      id: record.key,
    };
    return history.push(`/trader/edit?${qsString(params)}`);
  }

  function onDetail(record) {
    let params = {
      id: record.key,
    };
    return history.push(`/trader/detail?${qsString(params)}`);
  }

  //删除
  const onDelete = (record = {}) => {
    const { key } = record || {};
    confirm({
      content: '确定删除？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        deleteTrader(key).then(() => onSearch({}));
        ;
      },
    });
  };

  function onFinish(values) {
    values['traderDate'] = traderTime;
    onSearch(values);
  }

  function onTraderChange(date, dateString) {
    setTraderTime(dateString);
  }

  function onPageChange(params) {
    let param = {
      page:params.current,
      pageSize:params.pageSize,
    };
    onSearch(param);
  };

  return (
    <div
      className={styles['site-layout-background']}
      style={{ padding: 24, marginTop: 20 }}
    >
      <Button type="primary" style={{ marginBottom: 24 }} onClick={onAdd}>
        新增
      </Button>
      <Form layout="inline" className={styles['search-form']} onFinish={onFinish}>
        <Form.Item
          label="操盘时间"
          name="traderDate"
          colon={true}
        >
          <DatePicker
            format="YYYY-MM-DD"
            onChange={onTraderChange}
          />
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
        dataSource={tableData}
        style={{ marginTop: '30px' }}
        loading={traderListLoading}
        pagination={pagination}
        onChange={onPageChange}
      />
    </div>
  );
});
