import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import AnimalsTable from './components/AnimalsTable';
import useAnimals from './hooks/useAnimals';

const PageContent = () => {
  const navigate = useNavigate();
  const { animals, isLoading, handleDeleteAnimal } = useAnimals();

  const handleNewAnimal = () => {
    navigate('/nuevo-animal');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="my-6">
        <h2 className="text-teal-600 font-bold text-3xl">Animales</h2>
      </div>
      <div className="my-4">
        <Button onClick={handleNewAnimal}>
          <span>Nuevo Animal</span>
        </Button>
      </div>
      <AnimalsTable
        animals={animals}
        isLoading={isLoading}
        onDeleteAnimal={handleDeleteAnimal}
      />
    </div>
  );
};

export default PageContent;
