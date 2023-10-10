import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import UsersTable from './components/UsersTable';
import useUsers from './hooks/useUsers';

const PageContent = () => {
  const navigate = useNavigate();
  const { users, isLoading, handleDeleteUser } = useUsers();

  const handleNewUser = () => {
    navigate('/nuevo-usuario');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="my-6">
        <h2 className="text-teal-600 font-bold text-3xl">Usuarios</h2>
      </div>
      <div className="my-4">
        <Button onClick={handleNewUser}>
          <span>Nuevo Usuario</span>
        </Button>
      </div>
      <UsersTable
        users={users}
        isLoading={isLoading}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default PageContent;
