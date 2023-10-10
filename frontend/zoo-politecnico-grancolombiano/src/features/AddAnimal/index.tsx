import AddAnimalForm from './components/AddAnimalForm';

const PageContent = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="my-6">
        <h2 className="text-teal-600 font-bold text-3xl">Crear nuevo animal</h2>
      </div>
      <div className="my-4">
        <AddAnimalForm />
      </div>
    </div>
  );
};

export default PageContent;
