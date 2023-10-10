import { Wrapper } from '../../components';
import PageContent from '../../features/Attentions';
import { ProtectedGuard } from '../../shared/guards';

const AttentionsPage = () => {
  return ProtectedGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default AttentionsPage;
