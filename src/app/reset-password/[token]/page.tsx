import {Metadata} from "next";
import {ConfirmResetPasswordForm} from "@/components/forms";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Réinitialiser son mot de passe',
    description: "Page de réinitialisation du mot de passe"
};

interface Props {
    params: {
        token: string;
    };
}

export default function Page({ params: { token } }: Props) {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                      className="mx-auto h-10 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue">
                        Réinitialisation de votre mot de passe
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <ConfirmResetPasswordForm token={token} />
                </div>
            </div>
        </>
    )
}