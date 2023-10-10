import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import AttentionsTable from './components/AttentionsTable';
import useAttentions from './hooks/useAttentions';

const PageContent = () => {
  const navigate = useNavigate();
  const { attentions, isLoading, handleDeleteAttention } = useAttentions();

  const handleNewAttention = () => {
    navigate('/nueva-atencion');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="my-6">
        <h2 className="text-teal-600 font-bold text-3xl">Consultas Medicas</h2>
      </div>
      <div className="my-4">
        <Button onClick={handleNewAttention}>
          <span>Nueva Consulta Medica</span>
        </Button>
      </div>
      <AttentionsTable
        attentions={attentions}
        isLoading={isLoading}
        onDeleteAttention={handleDeleteAttention}
      />
    </div>
  );
};

export default PageContent;
