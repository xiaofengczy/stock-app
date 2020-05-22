import { Button, Form, Input, Space, Table } from 'antd';

const getColumnFields = ({ onEdit, onDetail, onDelete }) => {
  const base_column = [
    {
      title: '今日操盘',
      dataIndex: 'title',
      key: 'title',
      width:'200px',
      textWrap: 'word-break',
      ellipsis: true,
    },
    {
      title: '大盘分析',
      dataIndex: 'marketAnalysis',
      key: 'marketAnalysis',
      textWrap: 'word-break',
      ellipsis: true,
    },
    {
      title: '操盘时间',
      dataIndex: 'traderTime',
      key: 'traderTime',
    },
    {
      title: '录入时间',
      dataIndex: 'inputTime',
      key: 'inputTime',
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
