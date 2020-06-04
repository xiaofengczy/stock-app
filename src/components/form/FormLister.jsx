import React from 'react';
import styles from '../../pages/stocks/trader-stock/index.less';
import { Button, Form, Input, Space, Table } from 'antd';
import { isArray } from '@utils/utils.js';

function FormLister({ filt_data }) {
  console.log(filt_data);
  return (
    <Form layout="inline" className={styles['search-form']}>
      {!isArray(filt_data)
        ? ''
        : isArray.map(data => {
            console.log(data);
            return (
              <Form.Item
                label={data.form_key}
                name={data.name}
                className={styles['search-style']}
                colon={false}
              >
                <Input />
              </Form.Item>
            );
          })}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          搜索
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormLister;
