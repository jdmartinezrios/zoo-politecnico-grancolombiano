import {
  ForwardRefExoticComponent,
  SelectHTMLAttributes,
  forwardRef,
} from 'react';

type Props = {
  placeholder: string;
  options: string[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const InputSelect: ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLSelectElement>
> = forwardRef(({ placeholder, options, ...rest }, ref) => {
  return (
    <select
      ref={ref}
      defaultValue=""
      name={`name-selected-${placeholder}`}
      id={`id-selected-${placeholder}`}
      {...rest}
      className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none
      focus:border-sky-500
      focus:ring-1
      focus:ring-sky-500
      focus:invalid:border-red-500 focus:invalid:ring-red-500"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
});

export default InputSelect;
