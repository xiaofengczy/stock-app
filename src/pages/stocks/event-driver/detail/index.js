import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { getEvent } from '@action/eventAction';
import { qsParse } from '@utils/utils';
import * as moment from 'moment';
import { AimOutlined, ClockCircleOutlined } from '@ant-design/icons';

export default connect(({ loading }) => ({ loading }), { getEvent })(
  function Index(props) {
    const { getEvent } = props;
    const query = qsParse(props) || {};
    const { id = null } = query;
    const [eventDetail, setEventDetail] = useState({});
    const [createTime, setCreateTie] = useState();
    useEffect(() => {
      let params = { id: id };
      getEvent(params).then(resp => {
        setEventDetail(resp.data);
        setCreateTie(
          moment(resp.data['createTime'])
            .format('YYYY-MM-DD')
            .toString(),
        );
      });
    }, []);

    return (
      <div className={styles['detail-style']}>
        <div className={styles['detail-item']}>
          <div className={styles['detail-title']}>
            <AimOutlined style={{ marginRight: 6 }} />
            事件驱动:
          </div>
          <div className={styles['detail-content']}>
            {eventDetail['eventName']}
          </div>
        </div>
        <div className={styles['detail-item']}>
          <div className={styles['detail-title']}>
            <ClockCircleOutlined style={{ marginRight: 6 }} />
            事件分析:
          </div>
          <div className={styles['detail-content']}>
            {eventDetail['eventAnalysis']}
          </div>
        </div>

        <div className={styles['detail-item']}>
          <div className={styles['detail-title']}>
            <ClockCircleOutlined style={{ marginRight: 6 }} />
            利好个股:
          </div>
          <div className={styles['detail-content']}>
            {eventDetail['goodStock']}
          </div>
        </div>
      </div>
    );
  },
);
