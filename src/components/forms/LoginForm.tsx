'use client';

import { Form } from '@/components/forms';
import {useLogin} from "@/hooks";

export default function LoginForm(){
  const {
    email,
    password,
    isLoading,
    onChange,
    onSubmit
  } = useLogin();

  const config = [
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
      link: {
        linkText: 'Mot de passe oublié ?',
        linkUrl: '/reset-password'
      },
      required: true
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      buttonText={'Se connecter'}
      onChange={onChange}
      onSubmit={onSubmit} />
  )
}