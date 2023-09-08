'use client';

import { useGetFriendProductQuery } from "@/redux/features/productApiSlice";
import { useGetProfileQuery } from '@/redux/features/authApiSlice';


export default function MyNetwork() {
 // const test = useGetProfileQuery(null);
  const test = useGetFriendProductQuery(null);

  console.log(test)


  return (
    <>
      <p>Vous êtes authentifié !</p>
    </>
  )
}