import React, { useEffect ,useState} from 'react';
import styles from '../index.less';
import { Button, Form, Input, Space, Table,DatePicker } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import { addTrader } from '@action/stockAction';

export default connect(() => {}, {
  addTrader,
})(function Index({addTrader}) {
  const [inputDate,setInputDate] = useState();
  const [traderTime,setTraderTine] = useState();

  function onFinish(values) {
    values['inputTime'] = inputDate;
    values['traderTime']=traderTime;
    addTrader(values);
  }

  function onTraderChange(date, dateString) {
    setTraderTine(dateString)
  }

  function onInputChange(date, dateString) {
    setInputDate(dateString)
  }

  return (
    <Form
      layout="horizontal"
      className={styles['trade-form']}
      onFinish={onFinish}
    >
      <Form.Item
        label="操盘时间"
        name="traderTime"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '请输入操盘时间' }]}
      >
        <DatePicker format="YYYY-MM-DD"  className={styles['time-input']} onChange={onTraderChange}/>
      </Form.Item>
      <Form.Item
        label="录入时间"
        name="inputTime"
        className={styles['ssearch-style']}
        colon={true}
        rules={[{ required: true, message: '请输入录入时间' }]}
      >
        <DatePicker
          format="YYYY-MM-DD" className={styles['time-input']} onChange={onInputChange}/>
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
