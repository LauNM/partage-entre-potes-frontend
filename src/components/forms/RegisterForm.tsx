'use client';

import { useRegister } from "@/hooks";
import { Form } from '@/components/forms';

export default function RegisterForm() {
  const {
    first_name,
    last_name,
    surname,
    email,
    password,
    password2,
    isLoading,
    onChange,
    onSubmit
  } = useRegister();

  const config = [
    {
      labelText: 'Pseudo',
      labelId: 'surname',
      type: 'text',
      value: surname
    },
    {
      labelText: 'Prénom',
      labelId: 'first_name',
      type: 'text',
      value: first_name,
      required: true
    },
    {
      labelText: 'Nom',
      labelId: 'last_name',
      type: 'text',
      value: last_name,
      required: true
    },
    {
      labelText: 'Email',
      labelId: 'email',
      type: 'email',
      value: email,
      required: true
    },
    {
      labelText: 'Mot de passe',
      labelId: 'password',
      type: 'password',
      value: password,
      required: true
    },
    {
      labelText: 'Confirmation du mot de passe',
      labelId: 'password2',
      type: 'password',
      value: password2,
      required: true
    }
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      buttonText={'Valider'}
      cancelRedirection={'/auth/login'}
      onChange={onChange}
      onSubmit={onSubmit} />
  )
}