import { Wrapper } from '../../components';
import PageContent from '../../features/Login';
import { AnonymousGuard } from '../../shared/guards';

const LoginPage = () => {
  return AnonymousGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default LoginPage;
