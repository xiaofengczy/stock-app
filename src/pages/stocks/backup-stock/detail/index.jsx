import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { getStock } from '@action/stockAction';
import { qsParse } from '@utils/utils';
import {
  AimOutlined,
  ClockCircleOutlined,
  AppstoreOutlined,
  GithubOutlined,
} from '@ant-design/icons';

export default connect(({ loading }) => ({ loading }), { getStock })(
  function Index(props) {
    const { getStock } = props;
    const query = qsParse(props) || {};
    const { id = null } = query;
    const [stockDetail, setStockDetail] = useState({});
    const [traderTime, setTraderTme] = useState();
    useEffect(() => {
      let params = { id: id };
      getStock(params).then(resp => {
        setStockDetail(resp.data);
      });
    }, []);
    return (
      <div className={styles['detail-style']}>
        <div className={styles['detail-item']}>
          <div className={styles['detail-title']}>
            <AimOutlined style={{ marginRight: 6 }} />
            名字:
          </div>
          <div className={styles['detail-content']}>{stockDetail['name']}</div>
        </div>
        <div className={styles['detail-item']}>
          <div className={styles['detail-title']}>
            <ClockCircleOutlined style={{ marginRight: 6 }} />
            股票代码:
          </div>
          <div className={styles['detail-content']}>{stockDetail['code']}</div>
        </div>
        <div className={styles['detail-item']}>
          <div className={styles['detail-title']}>
            <AppstoreOutlined style={{ marginRight: 6 }} />
            所属板块:
          </div>
          <div className={styles['detail-content']}>{stockDetail['plate']}</div>
        </div>
        <div className={styles['detail-item']}>
          <div className={styles['detail-title']}>
            <GithubOutlined style={{ marginRight: 6 }} />
            股性分析:
          </div>
          <div className={styles['detail-content']}>
            {stockDetail['stockFemoral']}
          </div>
        </div>
      </div>
    );
  },
);
