import { Wrapper } from '../../components';
import PageContent from '../../features/AddAnimal';
import { ProtectedGuard } from '../../shared/guards';

const AddAnimalPage = () => {
  return ProtectedGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default AddAnimalPage;
