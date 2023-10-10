import { FC } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { IUser } from '../../../../shared/models/user';
import { DataTable, transformUsers } from './utils';
import { defaultPaginationPageSize } from '../../../../shared/constants';
import { Delete } from '../../../../components';

type Props = {
  users: IUser[];
  isLoading: boolean;
  onDeleteUser: (user_id: number) => void;
};

const UsersTable: FC<Props> = ({ users, isLoading, onDeleteUser }) => {
  const dataSource = transformUsers(users);

  const handleOnConfirm = function (this: { user_id: number }) {
    const { user_id } = this;
    onDeleteUser(user_id);
  };

  const columns: ColumnsType<DataTable> = [
    { title: 'Id', key: 'id', dataIndex: 'id' },
    { title: 'Correo', key: 'email', dataIndex: 'email' },
    { title: 'Nombre', key: 'fullname', dataIndex: 'fullname' },
    {
      title: 'Acciones',
      key: 'action',
      render: (user: DataTable) => (
        <Delete onConfirm={handleOnConfirm.bind({ user_id: user.id })} />
      ),
    },
  ];

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: defaultPaginationPageSize }}
    />
  );
};

export default UsersTable;
