import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { getAllUser } from '../../../api/auth';
import { IUsers } from '../../../interface/product';

interface DataType {
    key: string;
    name: string;
    email: string;
    id: string;
}

type DataIndex = keyof DataType;


const AdminUserHome = () => {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        getAllUser().then(({ data: users }) => setUsers(users));
    }, []);

    const data: DataType[] = users.user?.map((user: any) => ({
        key: user.id,
        name: user.name,
        email: user.email,
        id: user._id,
    }));

    

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '20%',
        },
        {
            title: 'ID ',
            dataIndex: 'id',
            key: 'id',
        },
    ];

    return (
        <div>
            <Table columns={columns} pagination={{ pageSize: 5 }} dataSource={data} />
        </div>
    )
}

export default AdminUserHome