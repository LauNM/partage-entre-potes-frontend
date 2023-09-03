import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Accueil',
  description: "Page d'accueil'"
};

export default function Home() {
  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            Implement JWT Authentication in Next.js 13 App Directory
          </p>
        </div>
      </section>
    </>
  );
}
