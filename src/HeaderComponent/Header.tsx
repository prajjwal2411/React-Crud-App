import './Header.css';

import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: 'Employees',
    key: 'list',
    icon: <MailOutlined />,
  },
  {
    label: 'Add Employee',
    key: 'add',
    icon: <MailOutlined />,
  }
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;