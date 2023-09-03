'use client';

import { useResetPasswordMutation } from "@/redux/features/authApiSlice"
import { Form } from '@/components/forms';
import { useResetPassword } from "@/hooks";

export default function ResetPasswordForm(){
  const {
    email,
    isLoading,
    onChange,
    onSubmit
  } = useResetPassword();

  const config = [
    {
      labelText: 'Email',
      labelId: 'email',
      type: 'email',
      value: email,
      required: true
    }
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      buttonText={'Envoyer'}
      onChange={onChange}
      onSubmit={onSubmit} />
  )
}