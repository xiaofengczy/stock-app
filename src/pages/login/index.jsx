import React, { useState, useRef } from 'react';
import styles from './index.less';
import LoginFrom from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import loginBg from '@assets/login-bg.jpg';
import LoginForm from './components/LoginForm';
import { render } from 'react-dom';

const borderBottom = '2px solid #ffffff';

export default () => {
  const bgGround = {
    backgroundImage: `url(${loginBg})`,
  };
  const [changeAction, setChangeAction] = useState(true);
  const [loginChose, setLoginChose] = useState(borderBottom);
  const [registerChose, setRegisterChose] = useState('');

  function onChangeAction(flag) {
    setChangeAction(flag);
    if (flag) {
      setLoginChose(borderBottom);
      setRegisterChose('');
    } else {
      setRegisterChose(borderBottom);
      setLoginChose('');
    }
  }

  return (
    <div style={bgGround} className={styles['bg']}>
      <div className={styles['login-register-form']}>
        <div className={styles['header-item']}>
          <div
            className={styles['login-item']}
            style={{ borderBottom: loginChose }}
            onClick={() => onChangeAction(true)}
          >
            登录
          </div>
          <div
            className={styles['register-item']}
            style={{ borderBottom: registerChose }}
            onClick={() => onChangeAction(false)}
          >
            注册
          </div>
        </div>
        {changeAction ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};
