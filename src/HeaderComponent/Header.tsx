import './Header.css';

import React, { useState } from 'react';

import { UserAddOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: <Link to={"/"}>Employees</Link>,
    key: 'list',
    icon: <UserOutlined />,
  },
  {
    label: <Link to={"/add-employee"}>Add Employee</Link>,
    key: 'add',
    icon: <UserAddOutlined />,
  }
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState('list');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;