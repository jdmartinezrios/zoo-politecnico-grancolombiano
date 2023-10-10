import { Popconfirm } from 'antd';
import { FC } from 'react';

type Props = {
  onConfirm: VoidFunction;
};

const Delete: FC<Props> = ({ onConfirm }) => {
  return (
    <Popconfirm
      title="Precaución"
      description="¿Esta seguro de eliminar este dato?"
      okText="Eliminar"
      cancelText="Cancelar"
      okButtonProps={{ danger: true }}
      onConfirm={onConfirm}
    >
      <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white px-4 py-1.5 border border-red-500 hover:border-transparent rounded">
        Eliminar
      </button>
    </Popconfirm>
  );
};

export default Delete;
