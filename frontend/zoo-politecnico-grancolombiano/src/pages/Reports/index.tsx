import { Wrapper } from '../../components';
import PageContent from '../../features/Reports';
import { ProtectedGuard } from '../../shared/guards';

const ReportsPage = () => {
  return ProtectedGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default ReportsPage;
