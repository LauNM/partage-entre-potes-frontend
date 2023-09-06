import {useConfirmResetPasswordMutation} from "@/redux/features/authApiSlice";
import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

export default function useConfirmResetPassword(token) {
    const router = useRouter();
    const [confirmResetPassword, {isLoading}] = useConfirmResetPasswordMutation();
    const [password, setPassword] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        confirmResetPassword({password, token})
            .unwrap()
            .then(() => {
                toast.success('Mot de passe changé avec succès');
                router.push('/auth/login');
            })
            .catch(() => {
                toast.error('Une erreur est survenue');
            })
    };

    return {
        password,
        token,
        isLoading,
        onChange,
        onSubmit
    }
}