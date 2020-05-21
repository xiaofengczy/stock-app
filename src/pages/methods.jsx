import { Button } from 'antd';
import * as moment from 'moment';

const getFilterData = () => {
  const base_option_list = [
    {
      form_key: 'triggerName',
      label: '触发器名称',
      input_type: 'Input'
    },
    {
      form_key: 'triggerType',
      label: '触发类型',
      show_all: true,
      input_type: 'Select',
      options: 'TRIGGER_TYPE'
    },
    {
      form_key: 'executeType',
      label: '执行类型',
      show_all: true,
      input_type: 'Select',
      options: 'EXECUTE_TYPE'
    }
  ];
  return base_option_list;
};

// const getTableColumns = ({ query, onEditConfig, onDelete, onSuspend, onResume }) => {
//   const { enterprise_id } = query || {};
//   const base_columns = [
//     {
//       title: '触发器名称',
//       dataIndex: 'name'
//     },
//     {
//       title: '触发器类型',
//       dataIndex: 'triggerType',
//       render: text => <div>{text === 1 ? '流程' : '对象表单'}</div>
//     },
//     {
//       title: '触发表单',
//       dataIndex: 'triggerFormName'
//     },
//     {
//       title: '执行类型',
//       dataIndex: 'executeType',
//       render: text => <div>{text === 1 ? '处理数据' : ''}</div>
//     },
//     {
//       title: '目标表单',
//       dataIndex: 'executeFormName'
//     },
//     {
//       title: '创建时间',
//       dataIndex: 'createdAt',
//       render: text => <div>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</div>
//     }
//   ];
//
//   //平台操作
//   const pal_columns = [
//     {
//       title: '操作',
//       dataIndex: 'isResume',
//       width: 160,
//       render: (text, record) => (
//         <div>
//           <Button type="link" onClick={() => onEditConfig(record)}>
//             编辑
//           </Button>
//           <Button type="link" onClick={() => onDelete(record)}>
//             删除
//           </Button>
//           <Button
//             type="link"
//             disabled={text === 1 ? false : true}
//             onClick={() => onSuspend(record)}
//           >
//             全部企业停用
//           </Button>
//         </div>
//       )
//     }
//   ];
//
//   //企业操作
//   const ent_columns = [
//     {
//       title: '操作',
//       dataIndex: 'status',
//       width: 160,
//       render: (text, record) => (
//         <div>
//           <Button type="link" onClick={() => onEditConfig(record)}>
//             编辑
//           </Button>
//           <Button type="link" disabled={text === 1 ? false : true} onClick={() => onResume(record)}>
//             启用
//           </Button>
//           <Button
//             type="link"
//             disabled={text === 2 ? false : true}
//             onClick={() => onSuspend(record)}
//           >
//             停用
//           </Button>
//         </div>
//       )
//     }
//   ];
//
//   return enterprise_id ? [...base_columns, ...ent_columns] : [...base_columns, ...pal_columns];
// };

function getColumns({onEdit,onDetail,onDelete,titleList}) {
  titleList.map(item=>{
    return {
      title: item.name,
      dataIndex: item.id,
      key: item.id,
    }
  })

}

export { getFilterData };
