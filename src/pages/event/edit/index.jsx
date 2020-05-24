import React, { useEffect } from 'react';
import styles from '../index.less';
import { Button, Form, Input } from 'antd';
import { connect } from 'dva';
import { getEvent, editEvent } from '@action/eventAction';
import { qsParse } from '@utils/utils';

export default connect(({ loading }) => ({
  editLoading: loading.effects['/event/edit'],
}), {
  getEvent,
  editEvent,
})(function Index(props) {
  const { getEvent, editEvent } = props;
  const query = qsParse(props) || {};
  const { id = null } = query;
  const [form] = Form.useForm();

  useEffect(() => {
    let params = { id: id };
    getEvent(params).then(resp => {
      let data = resp.data;
      form.setFieldsValue({
        eventName: data['eventName'],
        eventAnalysis: data['eventAnalysis'],
        goodStock: data['goodStock'],
      });
    });
  }, []);

  function onFinish(values) {
    editEvent(values).then(props.history.push('/event'));
  }

  return (
    <Form
      layout="horizontal"
      className={styles['trade-form']}
      onFinish={onFinish}
      form={form}
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
