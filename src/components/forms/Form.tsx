'use client';

import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/forms';
import { Spinner } from '@/components/common';
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
        <Button
          type="submit"
          color="primary"
          variant="solid"
          disabled={ isLoading }
        >
          { isLoading ? <Spinner sm /> : buttonText }
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