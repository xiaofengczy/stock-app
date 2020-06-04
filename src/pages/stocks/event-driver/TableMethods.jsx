import { Button, Form, Input, Space, Table } from 'antd';

const getColumnFields = ({ onEdit, onDetail, onDelete }) => {
  const base_column = [
    {
      title: '事件驱动',
      dataIndex: 'eventName',
      key: 'eventName',
      width: '200px',
      textWrap: 'word-break',
      ellipsis: true,
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
