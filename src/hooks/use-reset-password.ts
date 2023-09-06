import { useResetPasswordMutation} from "@/redux/features/authApiSlice";
import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from "react-toastify";

export default function useResetPassword() {
  const [resetPassword, {isLoading}] = useResetPasswordMutation();
  const [email, setEmail] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetPassword(email)
      .unwrap()
      .then(() => {
        toast.success('Requête envoyée, le lien de réinitialisation de mot de passe vous a été envoyé par mail.');
        //router.push('/my-network');
      })
      .catch(() => {
        toast.error('Une erreur est survenue');
      })
  };

  return {
    email,
    isLoading,
    onChange,
    onSubmit
  }
}