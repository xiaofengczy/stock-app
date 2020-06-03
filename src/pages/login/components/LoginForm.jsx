import React, { useState } from 'react';
import styles from './index.less';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      className={styles['content-form']}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="用户名"
        rules={[
          {
            required: true,
            message: '用户名不能为空',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
        rules={[
          {
            required: true,
            message: '密码不能为空',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="验证码"
        className={styles['captcha']}
        rules={[
          {
            required: true,
            message: '确认密码不能为空',
          },
        ]}
      >
        <Form.Item
          name="captcha"
          noStyle
          rules={[{ required: true, message: '验证码不能为空' }]}
        >
          <Input />
          <img className={styles['captcha-img']} />
        </Form.Item>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
