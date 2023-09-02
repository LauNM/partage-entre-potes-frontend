import {ChangeEvent} from "react";

interface Props {
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: React.ReactNode;
  required?: boolean;
}

export default function Input({
    labelId,
    type,
    onChange,
    value,
    required = false,
    children
  }: Props) {
  return (
    <div>
      <label
        htmlFor={labelId}
        className="block text-sm font-medium leading-6 text-gray-900">
        { children }
      </label>
      <div className="mt-2">
        <input
          id={labelId}
          name={labelId}
          type={type}
          onChange={onChange}
          value={value}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-950 sm:text-sm sm:leading-6"
          required={required}
        />
      </div>
    </div>
  )
}