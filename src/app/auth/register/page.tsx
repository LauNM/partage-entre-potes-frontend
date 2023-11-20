import { RegisterForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Création de compte',
  description: 'Page de création de compte',
};

export default function Register() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" alt="Your Company"
               src={ 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' } />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Créer son compte
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}