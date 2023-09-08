'use client';

import { useGetFriendProductQuery } from "@/redux/features/productApiSlice";
import { useGetProfileQuery } from '@/redux/features/authApiSlice';


export default function Notifications() {
    const profile = useGetProfileQuery(null);

    console.log(profile)


    return (
        <>
            <p>Notifications</p>
            <ul>

            </ul>
        </>
    )
}