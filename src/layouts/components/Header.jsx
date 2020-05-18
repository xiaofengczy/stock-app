import React from 'react';
import styles from '../index.less';
import { Layout } from 'antd';

function Header({ title }) {
  return (
    <Layout.Header className={styles['header-style']} style={{ padding: 0 }}>
      {title}
    </Layout.Header>
  );
}

export default Header;
