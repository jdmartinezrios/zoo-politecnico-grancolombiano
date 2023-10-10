import { useEffect, useState } from 'react';
import { AxiosInstance } from '../../../shared/connections/axios.connection';
import { endpoints, messages } from '../../../shared/constants';
import { IReport } from '../../../shared/models/reports';
import useShowNotification from '../../../shared/hooks/useShowNotififcation';

const useReports = () => {
  const { axios } = AxiosInstance.getInstance();

  const { showNotification, showErrorNotification } = useShowNotification();

  const [reports, setReports] = useState<IReport[]>([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getReports = () => {
    setError(false);
    setLoading(true);

    axios
      .get(endpoints.reports.get)
      .then((reports) => {
        setReports(reports.data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const handleDeleteReport = (reportId: number) => {
    setError(false);
    setLoading(true);

    axios
      .delete(endpoints.reports.delete.replace(':id', `${reportId}`))
      .then(() => {
        getReports();
        showNotification({ message: messages.delete.success });
      })
      .catch(() => {
        setError(true);
        showErrorNotification({ message: messages.delete.error });
      })
      .finally(() => setLoading(false));
  };

  useEffect(getReports, [axios]);

  return { reports, hasError, isLoading, handleDeleteReport };
};

export default useReports;
