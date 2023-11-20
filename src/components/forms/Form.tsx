import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/forms';
import { Spinner } from '@/components/common';
import Link from 'next/link';

interface Config {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  required?: boolean;
  link?: {
    linkText: string;
    linkUrl: string;
  },
}

interface Props {
  config: Config[];
  isLoading: boolean;
  buttonText: string;
  cancelRedirection?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

interface Props {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ config, isLoading, buttonText, cancelRedirection, onChange, onSubmit }: Props) {
  return (
    <form className="space-y-6" onSubmit={ onSubmit }>
      { config.map((input) => (
        <Input
          key={ input.labelId }
          labelId={ input.labelId }
          type={ input.type }
          onChange={ onChange }
          required={ input.required }
          value={ input.value }
          link={ input.link }
        >
          { input.labelText }
        </Input>
      )) }

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-white shadow-sm hover:bg-blue-hover"
          disabled={ isLoading }
        >
          { isLoading ? <Spinner sm /> : buttonText }
        </button>
        { cancelRedirection && (
          <button
            type="button"
            className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-blue shadow-sm hover:bg-blue-hover hover:text-white hover:ring-0 ring-1 ring-inset ring-blue"
          >
            <Link href={ cancelRedirection }>
              Annuler
            </Link>
          </button>
        ) }
      </div>
    </form>
  );
}