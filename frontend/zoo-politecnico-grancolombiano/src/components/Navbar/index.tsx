import { Link } from 'react-router-dom';
import useUserLogged from '../../shared/hooks/useUserLogged';
import { SharedPreference } from '../../utils/settings';

const Navbar = () => {
  const { userIsLogged } = useUserLogged();

  const handleLogout = () => {
    location.replace('/');
    SharedPreference.destroy();
  };

  return (
    <nav className="max-x-full h-auto px-2 py-2 bg-gray-200 flex justify-between">
      <Link to={'/'}>
        <h1 className="font-bold text-base">Zoo</h1>
      </Link>
      <div>
        {userIsLogged && (
          <p className="underline cursor-pointer" onClick={handleLogout}>
            Cerrar Sesión
          </p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
