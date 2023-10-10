import { Wrapper } from '../../components';
import PageContent from '../../features/Animals';
import { ProtectedGuard } from '../../shared/guards';

const AnimalsPage = () => {
  return ProtectedGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default AnimalsPage;
