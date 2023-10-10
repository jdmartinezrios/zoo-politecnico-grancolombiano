import { Wrapper } from '../../components';
import PageContent from '../../features/AddReport';
import { ProtectedGuard } from '../../shared/guards';

const AddReportPage = () => {
  return ProtectedGuard({
    component: (
      <Wrapper>
        <PageContent />
      </Wrapper>
    ),
  });
};

export default AddReportPage;
