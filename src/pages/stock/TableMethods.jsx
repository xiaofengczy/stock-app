import { Space } from 'antd';

const getColumnFields = ({ onEdit, onDetail, onDelete }) => {
  const base_column = [
    {
      title: '股票名字',
      dataIndex: 'name',
      key: 'name',
      width:'200px',
      textWrap: 'word-break',
      ellipsis: true,
    },
    {
      title: '股票代码',
      dataIndex: 'code',
      key: 'cdoe',
    },
    {
      title: '所属板块',
      dataIndex: 'plate',
      key: 'plate',
    },
    {
      title: '股性分析',
      dataIndex: 'stockFemoral',
      key: 'stockFemoral',
    },
    {
      title: '录入时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  ];

  const action_column = [
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => onDetail(record)}>详情</a>
          <a onClick={() => onEdit(record)}>编辑</a>
          <a onClick={() => onDelete(record)}>删除</a>
        </Space>
      ),
    },
  ];
  return [...base_column, ...action_column];
};

export { getColumnFields };
