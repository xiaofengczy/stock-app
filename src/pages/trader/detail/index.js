import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { getStock } from '@action/stockAction';
import { qsParse } from '@utils/utils';
import {
  AimOutlined,
  ClockCircleOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  AreaChartOutlined,
  GithubOutlined
} from '@ant-design/icons';

export default connect(
  ({ loading }) => {
    loading;
  },
  {
    getStock,
  },
)
(function Index(props) {
  const { getStock } = props;
  const query = qsParse(props) || {};
  const { id = null } = query;
  const [stockDetail, setStockDetail] = useState({});
  useEffect(() => {
    let params = { id: id };
    getStock(params).then(resp => {
      setStockDetail(resp.data);
    });
  },[]);
  return (
    <div className={styles['detail-style']}>
      <div className={styles["detail-item"]}><AimOutlined/>今日操盘:{stockDetail['title']}</div>
      <div className={styles["detail-item"]}><ClockCircleOutlined />操盘时间:{stockDetail['traderTime']}</div>
      <div className={styles["detail-item"]}><AppstoreOutlined />题材挖掘:{stockDetail['news']}</div>
      <div className={styles["detail-item"]}><GithubOutlined />个股精选:{stockDetail['stockAnalysis']}</div>
      <div className={styles["detail-item"]}><PieChartOutlined />操作建议:{stockDetail['tradersSuggested']}</div>
      <div className={styles["detail-item"]}><AreaChartOutlined />大盘分析:{stockDetail['marketAnalysis']}</div>
    </div>
  );
});
