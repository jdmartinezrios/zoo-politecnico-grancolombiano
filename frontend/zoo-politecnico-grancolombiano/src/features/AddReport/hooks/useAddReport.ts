import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../../shared/connections/axios.connection';
import { useState } from 'react';
import {
  delayNavigation,
  endpoints,
  messages,
  urls,
} from '../../../shared/constants';
import useShowNotification from '../../../shared/hooks/useShowNotififcation';
import { IReportInputs } from '../../../shared/models/reports';

type UserPayload = {
  payload: IReportInputs;
};

const useAddReport = () => {
  const navigate = useNavigate();
  const { axios } = AxiosInstance.getInstance();

  const { showNotification, showErrorNotification } = useShowNotification();

  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleAddReport = ({ payload }: UserPayload) => {
    setError(false);
    setLoading(true);

    axios
      .post(endpoints.reports.create, {
        ...payload,
      })
      .then(() => {
        showNotification({
          message: messages.reports.success,
        });
        setTimeout(() => {
          navigate(urls.reports);
        }, delayNavigation);
      })
      .catch(() => {
        setError(true);
        showErrorNotification({
          message: messages.reports.error,
        });
      })
      .finally(() => setLoading(false));
  };

  return { hasError, isLoading, handleAddReport };
};

export default useAddReport;
