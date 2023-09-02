import {ChangeEvent, FormEvent} from "react";
import { Input } from '@/components/forms'
import {Spinner} from "@/components/common";
import Link from "next/link";

interface Config {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  required?: boolean;

}
interface Props {
  config: Config[];
  isLoading: boolean;
  buttonText: string;
  cancelRedirection: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;

}
interface Props {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
export default function Form({ config, isLoading, buttonText, cancelRedirection, onChange, onSubmit }: Props) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      { config.map((input, index) => (
        <Input
          key={index}
          labelId={input.labelId}
          type={input.type}
          onChange={onChange}
          required={input.required}
          value={input.value}
        >
          {input.labelText}
        </Input>
      ))}

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-sky-950 px-3 py-1.5 text-white shadow-sm hover:bg-sky-700"
        >
          {isLoading ? <Spinner sm /> : buttonText}
        </button>
        <button
          type="button"
          className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sky shadow-sm hover:bg-gray-200 ring-1 ring-inset ring-sky-950"
        >
          <Link href={cancelRedirection}>
            Annuler
          </Link>
        </button>
      </div>
    </form>
  )
}