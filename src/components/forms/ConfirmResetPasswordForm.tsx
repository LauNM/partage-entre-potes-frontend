'use client';

import { Form } from '@/components/forms';
import { useConfirmResetPassword } from "@/hooks";

interface Props {
    token: string;
}
export default function ConfirmResetPasswordForm({ token }: Props){
    const {
        password,
        isLoading,
        onChange,
        onSubmit
    } = useConfirmResetPassword(token);

    const config = [
        {
            labelText: 'Mot de passe',
            labelId: 'password',
            type: 'password',
            value: password,
            required: true
        }
    ];

    return (
        <Form
            config={config}
            isLoading={isLoading}
            buttonText={'Valider'}
            onChange={onChange}
            onSubmit={onSubmit} />
    )
}