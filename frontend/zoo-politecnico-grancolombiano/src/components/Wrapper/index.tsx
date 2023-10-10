import { FC } from 'react';
import { Footer, Navbar } from '..';

type Props = {
  children: JSX.Element;
};

const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className="h-screen max-w-full flex flex-col justify-between">
      <Navbar />
      <div className="w-full h-full overflow-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Wrapper;
