import { LoginForm } from "@/components/forms";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Connexion',
  description: "Page de connexion"
};

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" alt="Your Company" src={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"} />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue">
            Connexion
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
        </div>
        <p className="mt-10 text-center text-sm text-blue">
          Pas encore de compte ?{' '}
          <Link href="/auth/register" className="leading-6 text-primary hover:text-blue-hover">
            Inscrivez-vous !
          </Link>
        </p>
      </div>
    </>
  )
}