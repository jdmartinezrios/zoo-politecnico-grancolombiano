import { Wrapper } from '../../components';
import PageContent from '../../features/AddUser';
import { ProtectedGuard } from '../../shared/guards';

const AddUserPage = () => {
  return ProtectedGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default AddUserPage;
