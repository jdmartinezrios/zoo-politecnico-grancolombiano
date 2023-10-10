import { FC } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { DataTable, transformAttentions } from './utils';
import { defaultPaginationPageSize } from '../../../../shared/constants';
import { IAttention } from '../../../../shared/models/attentions';
import { Delete } from '../../../../components';

type Props = {
  attentions: IAttention[];
  isLoading: boolean;
  onDeleteAttention: (user_id: number) => void;
};

const ReportsTable: FC<Props> = ({
  attentions,
  isLoading,
  onDeleteAttention,
}) => {
  const dataSource = transformAttentions(attentions);

  const handleOnConfirm = function (this: { attention_id: number }) {
    const { attention_id } = this;
    onDeleteAttention(attention_id);
  };

  const columns: ColumnsType<DataTable> = [
    { title: 'Id', key: 'id', dataIndex: 'id' },
    { title: 'Descripción', key: 'description', dataIndex: 'description' },
    { title: 'Cuidador', key: 'carer', dataIndex: 'carer' },
    { title: 'Animal', key: 'animal', dataIndex: 'animal' },
    { title: 'Especie', key: 'specie', dataIndex: 'specie' },
    {
      title: 'Acciones',
      key: 'action',
      render: (attention: DataTable) => (
        <Delete
          onConfirm={handleOnConfirm.bind({ attention_id: attention.id })}
        />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={isLoading}
      pagination={{ pageSize: defaultPaginationPageSize }}
    />
  );
};

export default ReportsTable;
