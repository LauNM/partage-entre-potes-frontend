import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mon réseau',
  description: "Page de mon réseau"
};

export default function MyNetwork() {


  return (
    <>
      <p>Vous êtes authentifié !</p>
    </>
  )
}