import { Spin } from 'antd';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Spin tip="Cargando" className="margin-auto">
        <div className="p-10 bg-gray-300 rounded-xl" />
      </Spin>
    </div>
  );
};

export default Loader;
