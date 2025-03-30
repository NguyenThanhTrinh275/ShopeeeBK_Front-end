import React from 'react';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
const items = [
  {
    key: '1',
    label: 'Tiếng Việt',
  },
  {
    key: '2',
    label: 'English',
  },
];
const LanguageButton = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['1'],
    }}
  >
    <Typography.Link>
      <Space>
        <div><GlobalOutlined /> Tiếng Việt <DownOutlined /></div>
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default LanguageButton;
