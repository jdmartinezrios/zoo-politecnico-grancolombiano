import { useEffect, useState } from 'react';
import { AxiosInstance } from '../../../shared/connections/axios.connection';
import { endpoints, messages } from '../../../shared/constants';
import { IAnimal } from '../../../shared/models/animal';
import useShowNotification from '../../../shared/hooks/useShowNotififcation';

const useAnimals = () => {
  const { axios } = AxiosInstance.getInstance();

  const { showNotification, showErrorNotification } = useShowNotification();

  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getAnimals = () => {
    setError(false);
    setLoading(true);

    axios
      .get(endpoints.animals.get)
      .then((animals) => {
        setAnimals(animals.data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const handleDeleteAnimal = (animalId: number) => {
    setError(false);
    setLoading(true);

    axios
      .delete(endpoints.animals.delete.replace(':id', `${animalId}`))
      .then(() => {
        getAnimals();
        showNotification({ message: messages.delete.success });
      })
      .catch(() => {
        setError(true);
        showErrorNotification({ message: messages.delete.error });
      })
      .finally(() => setLoading(false));
  };

  useEffect(getAnimals, [axios]);

  return { animals, hasError, isLoading, handleDeleteAnimal };
};

export default useAnimals;
