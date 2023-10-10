import { Modal } from 'antd';
import LoginForm from './components/LoginForm';
import { Link } from 'react-router-dom';

const PageContent = () => {
  const handleNewAccount = () => {
    Modal.warning({
      centered: true,
      title: 'Temporalmente deshabilitado',
      okButtonProps: { className: 'bg-blue-500' },
      content: 'Estamos terminando de integrar esta sección',
    });
  };

  return (
    <div className="flex flex-col justify-center max-w-xs h-full mx-auto px-4">
      <h4 className="text-center text-3xl font-bold text-teal-600 mb-10">
        Ingreso
      </h4>
      <LoginForm></LoginForm>
      <Link to={'#'} onClick={handleNewAccount}>
        <p className="underline text-green-400 text-center mt-8">
          Crear nueva cuenta
        </p>
      </Link>
    </div>
  );
};

export default PageContent;
