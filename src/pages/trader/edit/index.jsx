import React, { useEffect, useState } from 'react';
import styles from '../index.less';
import { Button, Form, Input, DatePicker } from 'antd';
import { connect } from 'dva';
import { getTrader, editTrader } from '@action/traderAction';
import { qsParse } from '@utils/utils';
import * as moment from 'moment';

export default connect((loading) => {
  loading;
}, {
  getTrader,
  editTrader,
})(function Index(props) {
  const [inputDate, setInputDate] = useState();
  const [traderTime, setTraderTime] = useState();
  const { getTrader, editTrader } = props;
  const query = qsParse(props) || {};
  const { id = null } = query;
  const [form] = Form.useForm();

  useEffect(() => {
    let params = { id: id };
    getTrader(params).then(resp => {
      let data = resp.data;
      form.setFieldsValue({
        title: data['title'],
        marketAnalysis: data['marketAnalysis'],
        news: data['news'],
        stockAnalysis: data['stockAnalysis'],
        tradersSuggested: data['tradersSuggested'],
        traderTime: moment(data['traderTime']),
      });
    });
  }, []);

  function onFinish(values) {
    values['traderTime'] = traderTime ? traderTime : moment(values['traderTime']).format("YYYY-MM-DD").toString();
    values['inputTime'] = inputDate;
    values['traderId'] = id;
    setTraderTime(undefined);
    editTrader(values).then(props.history.push('/trader'));
  }

  function onTraderChange(date, dateString) {
    setTraderTime(dateString);
  }

  function onInputChange(date, dateString) {
    setInputDate(dateString);
  }

  return (
    <Form
      layout="horizontal"
      className={styles['trade-form']}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        label="今日操盘"
        name="title"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '请输入今日操盘' }]}
      >
        <Input className={styles['time-input']} maxLength={30}/>
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
        <Input.TextArea className={styles['trader-area']}/>
      </Form.Item>
      <Form.Item
        label="题材挖掘"
        name="news"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']}/>
      </Form.Item>
      <Form.Item
        label="个股精选"
        name="stockAnalysis"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']}/>
      </Form.Item>
      <Form.Item
        label="操作建议"
        name="tradersSuggested"
        className={styles['search-style']}
        colon={true}
      >
        <Input.TextArea className={styles['trader-area']}/>
      </Form.Item>
      <Form.Item className={styles['trader-button']}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
});
