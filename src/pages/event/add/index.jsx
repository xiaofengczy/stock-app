import React, { useState } from 'react';
import styles from '../index.less';
import { Button, Form, Input, DatePicker } from 'antd';
import { connect } from 'dva';
import { addEvent } from '@action/eventAction';
import * as moment from 'moment';

export default connect(() => {
}, {
  addEvent,
})(function Index(props) {
  const { addEvent } = props;
  function onFinish(values) {
    values['eventTime'] = moment(new Date).format("YYYY-MM-DD").toString();
    addEvent(values).then(props.history.push('/event'));
  }

  return (
    <Form
      layout="horizontal"
      className={styles['trade-form']}
      onFinish={onFinish}
    >
      <Form.Item
        label="事件驱动"
        name="eventName"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '名字不能为空' }]}
      >
        <Input className={styles['time-input']} maxLength={30}/>
      </Form.Item>
      <Form.Item
        label="事件分析"
        name="eventAnalysis"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '分析不能为空' }]}
      >
        <Input.TextArea className={styles['trader-area']}/>
      </Form.Item>
      <Form.Item
        label="利好个股"
        name="goodStock"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '利好股票不能为空' }]}
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
