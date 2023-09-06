'use client';

import { redirect } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';


interface Props {
    children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
    const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);

    // TODO: mettre le token dans le state ? state.token

    if (!isAuthenticated) {
        console.log('loading', isLoading, 'auth ', !isAuthenticated)
        redirect('/auth/login');
    }

    return <>{children}</>;
}