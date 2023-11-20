'use client';
import { RequireAuth } from '@/components/utils';
import { Navbar } from '@/components/common';
import React, { useEffect } from 'react';
import { fetchUser } from '@/redux/features/userSlice';
import { useDispatch } from 'react-redux';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <RequireAuth>
      <Navbar />
      <div style={ { height: 'calc(100vh - 64px)' } }>
        { children }
      </div>
    </RequireAuth>
  );
}