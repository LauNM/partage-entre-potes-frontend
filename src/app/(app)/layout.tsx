'use client';
import {RequireAuth} from '@/components/utils';

import type {Metadata} from "next";
import {Navbar} from "@/components/common";
import {useEffect} from "react";
import {fetchUser} from "@/redux/features/userSlice";
import {fetchFriendProduct} from "@/redux/features/friendProductSlice";
import {useDispatch, useSelector} from "react-redux";

interface Props {
    children: React.ReactNode;
}

export default function Layout({children}: Props) {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch]);

    return (
        <RequireAuth>
            <Navbar/>
            <div className="p-2">
                {children}
            </div>
        </RequireAuth>
    )
}