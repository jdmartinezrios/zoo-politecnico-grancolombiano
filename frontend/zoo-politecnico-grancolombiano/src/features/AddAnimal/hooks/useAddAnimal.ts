import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../../shared/connections/axios.connection';
import { useState } from 'react';
import {
  delayNavigation,
  endpoints,
  messages,
  urls,
} from '../../../shared/constants';
import { IAnimalInputs } from '../../../shared/models/animal';
import useShowNotification from '../../../shared/hooks/useShowNotififcation';

type AnimalPayload = {
  payload: IAnimalInputs;
};

const useAddAnimal = () => {
  const navigate = useNavigate();
  const { axios } = AxiosInstance.getInstance();

  const { showNotification, showErrorNotification } = useShowNotification();

  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleAddAnimal = ({ payload }: AnimalPayload) => {
    setError(false);
    setLoading(true);

    axios
      .post(endpoints.animals.create, {
        ...payload,
      })
      .then(() => {
        showNotification({
          message: messages.animals.success,
        });
        setTimeout(() => {
          navigate(urls.animals);
        }, delayNavigation);
      })
      .catch(() => {
        setError(true);
        showErrorNotification({
          message: messages.animals.error,
        });
      })
      .finally(() => setLoading(false));
  };

  return { hasError, isLoading, handleAddAnimal };
};

export default useAddAnimal;
