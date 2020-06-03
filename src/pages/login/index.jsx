import React, { useState } from 'react';
import styles from './index.less';
import LoginFrom from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export default () => {
  return (
    <div className={styles['login-register-form']}>
      <div className={styles['header-item']}>
        <div className={styles['login-item']}>登录</div>
        <div className={styles['register-item']}>注册</div>
      </div>

      {/*<RegisterForm/>*/}
      <LoginFrom />
    </div>
  );
};
