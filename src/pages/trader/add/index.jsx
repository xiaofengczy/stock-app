import React, { useEffect } from 'react';
import styles from '../index.less';
import { Button, Form, Input, Space, Table } from 'antd';
import { connect } from 'dva';
import { addTrader } from '@action/stockAction';

export default connect(() => {}, {
  addTrader,
})(function Index(props) {
  function onFinish(values) {
    console.log(values);
    addTrader(values);
  }

  return (
    <Form
      layout="horizontal"
      className={styles['trade-form']}
      onFinish={onFinish}
    >
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
        name="actionAuggest"
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
