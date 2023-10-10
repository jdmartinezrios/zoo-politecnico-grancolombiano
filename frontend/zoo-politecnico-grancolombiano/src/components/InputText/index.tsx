import { ForwardRefExoticComponent } from 'react';
import { InputHTMLAttributes } from 'react';

import { forwardRef } from 'react';

type Props = {
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText: ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLInputElement>
> = forwardRef(({ placeholder, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      {...rest}
      placeholder={placeholder}
      className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none
      focus:border-sky-500
      focus:ring-1
      focus:ring-sky-500
      focus:invalid:border-red-500 focus:invalid:ring-red-500"
    />
  );
});

export default InputText;
