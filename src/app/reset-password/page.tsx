import {Metadata} from "next";
import {ResetPasswordForm} from "@/components/forms";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Mot de passe oublié',
  description: "Page de mot de passe oublié"
};

export default function Page() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue">
            Mot de passe oublié
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <ResetPasswordForm />
        </div>
        <p className="mt-10 text-center text-sm text-blue">
          <Link href="/auth/login" className="leading-6 text-blue hover:text-blue-hover">
            Revenir à la page de connexion
          </Link>
        </p>
      </div>
    </>
  )
}