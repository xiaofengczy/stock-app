import React, { useEffect ,useState} from 'react';
import { qsParse } from '@utils/utils';
import Router from 'umi/router';

function Index(props) {
  const { dispatch } = props;
  const query = qsParse(props) || {};
  const { id = null } = query;
  const [traderDetail,setTraderDetail] = useState();
  useEffect(() => {
    dispatch({
      type: 'stock/getStock',
      payload: {
        id: id,
      },
    }).then(resp=>setTraderDetail(resp))
  });
  return (
    <div>{traderDetail}</div>
  );
}

export default Index;
