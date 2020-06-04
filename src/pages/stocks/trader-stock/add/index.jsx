import React, { useState } from 'react';
import styles from '../index.less';
import { Button, Form, Input, DatePicker } from 'antd';
import { connect } from 'dva';
import { addTrader } from '@action/traderAction';

export default connect(() => {}, {
  addTrader,
})(function Index(props) {
  const [inputDate, setInputDate] = useState();
  const [traderTime, setTraderTine] = useState();
  const { addTrader } = props;

  function onFinish(values) {
    values['inputTime'] = inputDate;
    values['traderTime'] = traderTime;
    addTrader(values).then(props.history.push('/stocks/trader-stock'));
  }

  function onTraderChange(date, dateString) {
    setTraderTine(dateString);
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
        <Input className={styles['time-input']} maxLength={30} />
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
        />
      </Form.Item>
      <Form.Item
        label="大盘分析"
        name="marketAnalysis"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']} />
      </Form.Item>
      <Form.Item
        label="题材挖掘"
        name="news"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']} />
      </Form.Item>
      <Form.Item
        label="个股精选"
        name="stockAnalysis"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']} />
      </Form.Item>
      <Form.Item
        label="操作建议"
        name="tradersSuggested"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']} />
      </Form.Item>
      <Form.Item className={styles['trader-button']}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
});
