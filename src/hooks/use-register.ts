import {useRouter} from "next/navigation";
import {useRegisterMutation} from "@/redux/features/authApiSlice";
import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from "react-toastify";

export default function useRegister() {
  const router = useRouter();
  const [register, {isLoading}] = useRegisterMutation();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    surname: '',
    email: '',
    password: '',
    password2: '',
  });

  const {first_name, last_name, surname, email, password, password2} = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {

    const {name, value} = event.target;

    setFormData({...formData, [name]: value})
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = {
      first_name,
      last_name,
      email,
      password,
      password2,
      ...(surname !== "" && { surname }),
    } as { [key: string]: string };

    register(body)
      .unwrap()
      .then(() => {
        toast.success('Création du compte réussie avec succès');
        router.push('/auth/login');
      })
      .catch(() => {
        toast.error('Une erreur est survenue');
      })
  };

  return {
    first_name,
    last_name,
    surname,
    email,
    password,
    password2,
    isLoading,
    onChange,
    onSubmit
  }
}