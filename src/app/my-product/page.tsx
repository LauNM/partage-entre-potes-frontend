'use client';

import { useGetFriendProductQuery } from "@/redux/features/productApiSlice";
import { useGetProfileQuery } from '@/redux/features/authApiSlice';


export default function MyProduct() {
    const profile = useGetProfileQuery(null);

    console.log(profile)


    return (
        <>
            <p>Mes produits</p>
            <ul>

            </ul>
        </>
    )
}