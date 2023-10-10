import { Wrapper } from '../../components';
import PageContent from '../../features/AddAttention';
import { ProtectedGuard } from '../../shared/guards';

const AddAttentionPage = () => {
  return ProtectedGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default AddAttentionPage;
