'use client';
import { hasToken } from '@/services/cookieService';

import { redirect } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import React from 'react';


interface Props {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {

  const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);
  const token = hasToken();

  // TODO: mettre le token dans le state ? state.token

  if (!isAuthenticated || !token) {
    redirect('/auth/login');
  }

  return <>{ children }</>;
}