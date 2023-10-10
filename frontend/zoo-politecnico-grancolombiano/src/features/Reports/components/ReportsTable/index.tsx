import { FC } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { DataTable, transformReports } from './utils';
import { defaultPaginationPageSize } from '../../../../shared/constants';
import { IReport } from '../../../../shared/models/reports';
import { Delete } from '../../../../components';

type Props = {
  reports: IReport[];
  isLoading: boolean;
  onDeleteReport: (user_id: number) => void;
};

const ReportsTable: FC<Props> = ({ reports, isLoading, onDeleteReport }) => {
  const dataSource = transformReports(reports);

  const handleOnConfirm = function (this: { report_id: number }) {
    const { report_id } = this;
    onDeleteReport(report_id);
  };

  const columns: ColumnsType<DataTable> = [
    { title: 'Id', key: 'id', dataIndex: 'id' },
    { title: 'Cuidador', key: 'carer', dataIndex: 'carer' },
    { title: 'Animal', key: 'animal', dataIndex: 'animal' },
    { title: 'Especie', key: 'specie', dataIndex: 'specie' },
    { title: 'Creado', key: 'create_at', dataIndex: 'create_at' },
    {
      title: 'Acciones',
      key: 'action',
      render: (report: DataTable) => (
        <Delete onConfirm={handleOnConfirm.bind({ report_id: report.id })} />
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
