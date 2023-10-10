import AddReportForm from './components/AddAttentionForm';

const PageContent = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="my-6">
        <h2 className="text-teal-600 font-bold text-3xl">
          Crear Consulta Medica
        </h2>
      </div>
      <div className="my-4">
        <AddReportForm />
      </div>
    </div>
  );
};

export default PageContent;
