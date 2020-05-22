import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { getStock } from '@action/stockAction';
import { qsParse } from '@utils/utils';

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
      console.log(resp.data);
      setStockDetail(resp.data);
    });
  },[]);
  return (
    <div>
      <div>今日操盘:{stockDetail['title']}</div>
      <div>操盘时间:{stockDetail['traderTime']}</div>
      <div>题材挖掘:{stockDetail['news']}</div>
      <div>个股精选:{stockDetail['stockAnalysis']}</div>
      <div>操作建议:{stockDetail['tradersSuggested']}</div>
    </div>
  );
});
