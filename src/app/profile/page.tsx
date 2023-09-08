'use client';

import { useGetFriendProductQuery } from "@/redux/features/productApiSlice";
import { useGetProfileQuery } from '@/redux/features/authApiSlice';


export default function Profile() {
    const result = useGetProfileQuery(null);



    return (
        <>
            <p>Profil</p>
            <ul>

            </ul>
        </>
    )
}