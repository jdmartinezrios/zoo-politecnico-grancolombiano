import { Wrapper } from '../../components';
import PageContent from '../../features/Dashboard';
import { ProtectedGuard } from '../../shared/guards';

const DashboardPage = () => {
  return ProtectedGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default DashboardPage;
