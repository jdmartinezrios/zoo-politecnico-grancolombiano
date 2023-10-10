import { useEffect, useState } from 'react';
import { AxiosInstance } from '../../../shared/connections/axios.connection';
import { endpoints, messages } from '../../../shared/constants';
import { IAttention } from '../../../shared/models/attentions';
import useShowNotification from '../../../shared/hooks/useShowNotififcation';

const useAttentions = () => {
  const { axios } = AxiosInstance.getInstance();

  const { showNotification, showErrorNotification } = useShowNotification();

  const [attentions, setAttentions] = useState<IAttention[]>([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getAttentions = () => {
    setError(false);
    setLoading(true);

    axios
      .get(endpoints.attentions.get)
      .then((attentions) => {
        setAttentions(attentions.data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const handleDeleteAttention = (attentionId: number) => {
    setError(false);
    setLoading(true);

    axios
      .delete(endpoints.attentions.delete.replace(':id', `${attentionId}`))
      .then(() => {
        getAttentions();
        showNotification({ message: messages.delete.success });
      })
      .catch(() => {
        setError(true);
        showErrorNotification({ message: messages.delete.error });
      })
      .finally(() => setLoading(false));
  };

  useEffect(getAttentions, [axios]);

  return { attentions, hasError, isLoading, handleDeleteAttention };
};

export default useAttentions;
