'use client';

import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

interface Config {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  required?: boolean;
  link?: {
    linkText: string;
    linkUrl: string;
  };
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
        <div key={ input.labelId }>
          <Input
            name={ input.labelId }
            type={ input.type }
            label={ input.labelText }
            onChange={ onChange }
            required={ input.required }
            labelPlacement="outside"
            placeholder={ input.labelText }
          />
          { input.link && (
            <div className={ 'text-[10px] flex flex-row-reverse' }>
              <Link href={ input.link.linkUrl } className={ 'text-blue hover:text-blue-hover' }>
                { input.link.linkText }
              </Link>
            </div>
          ) }
        </div>


      )) }

      <div className="flex gap-2">
        <Button
          type="submit"
          color="primary"
          variant="solid"
          isLoading={ isLoading }
        >
          { buttonText }
        </Button>

        { cancelRedirection && (
          <Button
            color="primary"
            variant="flat"
          >
            <Link href={ cancelRedirection }>
              Annuler
            </Link>
          </Button>
        ) }
      </div>
    </form>
  );
}