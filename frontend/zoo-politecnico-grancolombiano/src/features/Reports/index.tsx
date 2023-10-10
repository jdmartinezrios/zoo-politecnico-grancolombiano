import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import ReportsTable from './components/ReportsTable';
import useReports from './hooks/useReports';

const PageContent = () => {
  const navigate = useNavigate();
  const { reports, isLoading, handleDeleteReport } = useReports();

  const handleNewReport = () => {
    navigate('/nuevo-reporte');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="my-6">
        <h2 className="text-teal-600 font-bold text-3xl">Reportes</h2>
      </div>
      <div className="my-4">
        <Button onClick={handleNewReport}>
          <span>Nuevo Reporte</span>
        </Button>
      </div>
      <ReportsTable
        reports={reports}
        isLoading={isLoading}
        onDeleteReport={handleDeleteReport}
      />
    </div>
  );
};

export default PageContent;
