import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  path: string;
  content: string;
};

const DashboardCard: FC<Props> = ({ content, path }) => {
  return (
    <Link
      to={path}
      className="bg-teal-500 bg-opacity-20 p-4 rounded-xl flex-1 cursor-pointer"
    >
      {content}
    </Link>
  );
};

export default DashboardCard;
