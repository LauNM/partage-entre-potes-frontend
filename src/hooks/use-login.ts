import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import {setTokenCookie} from "@/redux/services/cookieService";

export default function useLogin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login, {isLoading}] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {

    const {name, value} = event.target;

    setFormData({...formData, [name]: value})
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login({email, password})
      .unwrap()
      .then((res) => {
        const { access } = res;
        dispatch(setAuth({token: access}));
        setTokenCookie(access);
        toast.success('Authentification réussie');

        router.push('/my-network');
      })
      .catch(() => {
        toast.error('Une erreur est survenue');
      })
  };

  return {
    email,
    password,
    isLoading,
    onChange,
    onSubmit
  }
}