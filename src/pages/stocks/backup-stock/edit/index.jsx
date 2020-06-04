import React, { useEffect } from 'react';
import styles from '../index.less';
import { Button, Form, Input } from 'antd';
import { connect } from 'dva';
import { getStock, editStock } from '@action/stockAction';
import { qsParse } from '@utils/utils';

export default connect(
  ({ loading }) => ({
    editLoading: loading.effects['/trader/edit'],
  }),
  {
    getStock,
    editStock,
  },
)(function Index(props) {
  const { getStock, editStock } = props;
  const query = qsParse(props) || {};
  const { id = null } = query;
  const [form] = Form.useForm();

  useEffect(() => {
    let params = { id: id };
    getStock(params).then(resp => {
      let data = resp.data;
      form.setFieldsValue({
        name: data['name'],
        code: data['code'],
        plate: data['plate'],
        stockFemoral: data['stockFemoral'],
      });
    });
  }, []);

  function onFinish(values) {
    values['stockId'] = id;
    editStock(values).then(props.history.push('/stock'));
  }

  return (
    <Form
      layout="horizontal"
      className={styles['trade-form']}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        label="名字代码"
        name="name"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '名字不能为空' }]}
      >
        <Input className={styles['time-input']} maxLength={30} />
      </Form.Item>
      <Form.Item
        label="股票代码"
        name="code"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '股票代码不能为空' }]}
      >
        <Input className={styles['time-input']} maxLength={6} />
      </Form.Item>
      <Form.Item
        label="所属板块"
        name="plate"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '所属板块不能为空' }]}
      >
        <Input className={styles['time-input']} maxLength={30} />
      </Form.Item>
      <Form.Item
        label="股性分析"
        name="stockFemoral"
        className={styles['search-style']}
        colon={true}
        rules={[{ required: true, message: '内容不能为空' }]}
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
