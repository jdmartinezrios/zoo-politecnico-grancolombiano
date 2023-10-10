import AddReportForm from './components/AddReportForm';

const PageContent = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="my-6">
        <h2 className="text-teal-600 font-bold text-3xl">Generar Reporte</h2>
      </div>
      <div className="my-4">
        <AddReportForm />
      </div>
    </div>
  );
};

export default PageContent;
