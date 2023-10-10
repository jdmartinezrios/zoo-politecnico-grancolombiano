import { Wrapper } from '../../components';
import PageContent from '../../features/Users';
import { ProtectedGuard } from '../../shared/guards';

const UsersPage = () => {
  return ProtectedGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default UsersPage;
