import React, { useEffect, useState } from 'react';
import styles from '../index.less';
import { Button, Form, Input, Space, Table, DatePicker } from 'antd';
import { connect } from 'dva';
import { getStock } from '@action/stockAction';
import { qsParse } from '@utils/utils';

export default connect(() => {
}, {
  getStock,
})(function Index(props) {
  const [inputDate, setInputDate] = useState();
  const [traderTime, setTraderTine] = useState();
  const { getStock } = props;
  const query = qsParse(props) || {};
  const { id = null } = query;
  const [stockDetail, setStockDetail] = useState({});

  useEffect(() => {
    console.log("edit");
    let params = { id: id };
    getStock(params).then(resp => {
      setStockDetail(resp.data);
    });
  },[]);

  function onFinish(values) {
    values['inputTime'] = inputDate;
    values['traderTime'] = traderTime;
    // addTrader(values).then(props.history.push('/trader'));
  }

  function onTraderChange(date, dateString) {
    setTraderTine(dateString);
  }

  function onInputChange(date, dateString) {
    setInputDate(dateString);
  }

  return (
    <Form
      layout="horizontal"
      className={styles['trade-form']}
      onFinish={onFinish}
    >
      <Form.Item
        label="今日操盘"
        name="title"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '请输入今日操盘' }]}
      >
        <Input className={styles['time-input']} maxLength={30} value={stockDetail['title']}/>
      </Form.Item>
      <Form.Item
        label="操盘时间"
        name="traderTime"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '请输入操盘时间' }]}
      >
        <DatePicker
          format="YYYY-MM-DD"
          className={styles['time-input']}
          onChange={onTraderChange}
          value={stockDetail['traderTime']}
        />
      </Form.Item>
      <Form.Item
        label="大盘分析"
        name="marketAnalysis"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']} value={stockDetail['marketAnalysis']}/>
      </Form.Item>
      <Form.Item
        label="题材挖掘"
        name="news"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']} value={stockDetail['news']}/>
      </Form.Item>
      <Form.Item
        label="个股精选"
        name="stockAnalysis"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']} value={stockDetail['stockAnalysis']}/>
      </Form.Item>
      <Form.Item
        label="操作建议"
        name="tradersSuggested"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']} value={stockDetail['tradersSuggested']}/>
      </Form.Item>
      <Form.Item className={styles['trader-button']}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
});
