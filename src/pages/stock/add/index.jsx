import React, { useState } from 'react';
import styles from '../index.less';
import { Button, Form, Input } from 'antd';
import { connect } from 'dva';
import { addStock } from '@action/stockAction';

export default connect(() => {
}, {
  addStock,
})(function Index(props) {
  const { addStock } = props;

  function onFinish(values) {
    addStock(values).then(props.history.push('/stock'));
  }

  return (
    <Form
      layout="horizontal"
      className={styles['trade-form']}
      onFinish={onFinish}
    >
      <Form.Item
        label="名字代码"
        name="name"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '名字不能为空' }]}
      >
        <Input className={styles['time-input']} maxLength={30}/>
      </Form.Item>
      <Form.Item
        label="股票代码"
        name="code"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '股票代码不能为空' }]}
      >
        <Input className={styles['time-input']} maxLength={6}/>
      </Form.Item>
      <Form.Item
        label="所属板块"
        name="plate"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '所属板块不能为空' }]}
      >
        <Input className={styles['time-input']} maxLength={30}/>
      </Form.Item>
      <Form.Item
        label="股性分析"
        name="stockFemoral"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '内容不能为空' }]}
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
