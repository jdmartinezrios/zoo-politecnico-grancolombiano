import useUserLogged from '../../shared/hooks/useUserLogged';
import DashboardCard from './components/DashboardCard';
import { options } from './utils';

const PageContent = () => {
  const { user } = useUserLogged();

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto h-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Bienvenido {user?.fullname}!
        </p>
        <p className="text-gray-500 text-lg">
          Realiza todas las asignaciones a tu cargo
        </p>
      </div>
      <div className="flex gap-4 flex-row">
        {user &&
          options[user.role].map(({ content, path }) => {
            return (
              <DashboardCard key={content} content={content} path={path} />
            );
          })}
      </div>
    </div>
  );
};

export default PageContent;
