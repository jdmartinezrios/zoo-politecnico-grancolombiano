import { FC } from 'react';

type Props = {
  children: JSX.Element;
  disabled?: boolean;
  onClick?: VoidFunction;
};

const Button: FC<Props> = ({ children, onClick, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-4 py-1.5 rounded-md shadow-lg bg-teal-600 font-medium text-gray-100 block hover:bg-teal-700 transition duration-300 disabled:opacity-50"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
