import type { Metadata } from "next";
import { useLoginMutation, useRetrieveUserQuery } from '@/redux/features/authApiSlice';

export const metadata: Metadata = {
  title: 'Mon réseau',
  description: "Page de mon réseau"
};

export default function MyNetwork() {
  const { data, error, isLoading: isLoadingUser } = useRetrieveUserQuery();
  //console.log(data)


  return (
    <>
      <p>Vous êtes authentifié !</p>
    </>
  )
}