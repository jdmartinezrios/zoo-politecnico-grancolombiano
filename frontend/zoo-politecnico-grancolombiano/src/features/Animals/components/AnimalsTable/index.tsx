import { FC } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { DataTable, transformAnimals } from './utils';
import { IAnimal } from '../../../../shared/models/animal';
import { defaultPaginationPageSize } from '../../../../shared/constants';
import { Delete } from '../../../../components';

type Props = {
  animals: IAnimal[];
  isLoading: boolean;
  onDeleteAnimal: (animal_id: number) => void;
};

const AnimalsTable: FC<Props> = ({ animals, isLoading, onDeleteAnimal }) => {
  const dataSource = transformAnimals(animals);

  const handleOnConfirm = function (this: { animal_id: number }) {
    const { animal_id } = this;
    onDeleteAnimal(animal_id);
  };

  const columns: ColumnsType<DataTable> = [
    { title: 'Id', key: 'id', dataIndex: 'id' },
    { title: 'Nombre', key: 'name', dataIndex: 'name' },
    { title: 'Especie', key: 'specie', dataIndex: 'specie' },
    {
      title: 'Acciones',
      key: 'action',
      render: (animal: DataTable) => (
        <Delete onConfirm={handleOnConfirm.bind({ animal_id: animal.id })} />
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

export default AnimalsTable;
