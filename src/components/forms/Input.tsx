import {ChangeEvent} from "react";
import Link from "next/link";

interface Props {
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: React.ReactNode;
  link?: {
    linkText: string;
    linkUrl: string;
  },
  required?: boolean;
}

export default function Input({
    labelId,
    type,
    onChange,
    value,
    required = false,
    children,
    link
   
  }: Props) {
  return (
    <div>
      <label
        htmlFor={labelId}
        className="block text-sm font-medium leading-6 text-blue">
        { children }
      </label>
      <div className="mt-2">
        <input
          id={labelId}
          name={labelId}
          type={type}
          onChange={onChange}
          value={value}
          className="block w-full rounded-md border-0 py-1.5 text-blue shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
          required={required}
        />
      </div>
      {link && (
        <div className={"text-[10px] flex flex-row-reverse"}>
          <Link href={link.linkUrl} className={"text-blue hover:text-blue-hover"}>
            {link.linkText}
          </Link>
        </div>
      )}
    </div>
  )
}