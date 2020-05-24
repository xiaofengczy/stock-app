import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { getTrader } from '@action/traderAction';
import { qsParse } from '@utils/utils';
import * as moment from 'moment';
import {
  AimOutlined,
  ClockCircleOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  AreaChartOutlined,
  GithubOutlined,
} from '@ant-design/icons';

export default connect(
  ({ loading }) => {
    loading;
  },
  {
    getTrader,
  },
)
(function Index(props) {
  const { getTrader } = props;
  const query = qsParse(props) || {};
  const { id = null } = query;
  const [stockDetail, setStockDetail] = useState({});
  const [traderTime,setTraderTme] = useState();
  useEffect(() => {
    let params = { id: id };
    getTrader(params).then(resp => {
      setStockDetail(resp.data);
      setTraderTme(moment(resp.data['traderTime']).format('YYYY-MM-DD').toString())
    });
  }, []);
  return (
    <div className={styles['detail-style']}>
      <div className={styles['detail-item']}>
        <div className={styles['detail-title']}>
          <AimOutlined style={{ marginRight: 6 }}/>今日操盘:
        </div>
        <div className={styles['detail-content']}>
          {stockDetail['title']}
        </div>
      </div>
      <div className={styles['detail-item']}>
        <div className={styles['detail-title']}>
          <ClockCircleOutlined style={{ marginRight: 6 }}/>操盘时间:
        </div>
        <div className={styles['detail-content']}>
          {traderTime}
        </div>
      </div>
      <div className={styles['detail-item']}>
        <div className={styles['detail-title']}><AppstoreOutlined style={{ marginRight: 6 }}/>题材挖掘:</div>
        <div className={styles['detail-content']}>
          {stockDetail['news']}
        </div>
      </div>
      <div className={styles['detail-item']}>
        <div className={styles['detail-title']}>
          <GithubOutlined style={{ marginRight: 6 }}/>个股精选:
        </div>
        <div className={styles['detail-content']}>
          {stockDetail['stockAnalysis']}
        </div>
      </div>

      <div className={styles['detail-item']}>
        <div className={styles['detail-title']}>
          <PieChartOutlined style={{ marginRight: 6 }}/>操作建议:
        </div>
        <div className={styles['detail-content']}>
          {stockDetail['tradersSuggested']}
        </div>
      </div>
      <div className={styles['detail-item']}>
        <div className={styles['detail-title']}>
          <AreaChartOutlined style={{ marginRight: 6 }}/>大盘分析:
        </div>
        <div className={styles['detail-content']}>
          {stockDetail['marketAnalysis']}
        </div>
      </div>
    </div>
  );
});
