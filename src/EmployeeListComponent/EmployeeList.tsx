import './EmployeeList.css';

import React from 'react';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

interface DataType {
    key: number;
    employeeID: string;
    name: string;
    age: number;
    gender: string;
    department: string;
    email: string; 
    contact: string; 
    city: string;
    state: string;
    country: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'S.No.',
        dataIndex: 'key',
        key: 'sno',
        align: 'center'
    },
    {
        title: 'Employee ID',
        dataIndex: 'employeeID',
        key: 'eid',
        align: 'center'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        align: 'center'
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
        align: 'center'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        align: 'center'
    },
    {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'contact',
        align: 'center'
    },
    {
        title: 'Address',
        key: 'address',
        render: (text, record) => <p>{record.city}, {record.state}, {record.country}</p>,
        align: 'center'
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <>
            <Space size="middle">
            <EditTwoTone />
            <DeleteTwoTone />
            </Space>
            </>
        ),
        align: 'center'
    },
];

const data: DataType[] = [
    {
        key: 1,
        employeeID: 'E1',
        name: 'John Brown',
        age: 32,
        gender: 'Male',
        department: 'IT',
        email: 'john.brown@gmail.com',
        contact: '987654321',
        city: 'Hells Kitchen',
        state: 'New York',
        country: 'USA'
    },
    {
        key: 2,
        employeeID: 'E1',
        name: 'John Brown',
        age: 32,
        gender: 'Male',
        department: 'IT',
        email: 'john.brown@gmail.com',
        contact: '987654321',
        city: 'Hells Kitchen',
        state: 'New York',
        country: 'USA'
    },
    {
        key: 3,
        employeeID: 'E1',
        name: 'John Brown',
        age: 32,
        gender: 'Male',
        department: 'IT',
        email: 'john.brown@gmail.com',
        contact: '987654321',
        city: 'Hells Kitchen',
        state: 'New York',
        country: 'USA'
    },
  ];
  
  

const EmployeeList: React.FC = () => {
    return <Table columns={columns} dataSource={data} />;
  };
  
  export default EmployeeList;