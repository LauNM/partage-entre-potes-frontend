import { RequireAuth } from '@/components/utils';

import type { Metadata } from 'next';
import AccountPage from '@/components/account/AccountPage';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Mon profil',
  description: 'Page de mon profil',
};

export default function Layout({ children }: Props) {
  return (
    <RequireAuth>
      <div className="grid grid-cols-2 h-full">
        <div className="p-3"><AccountPage /></div>
        <div className=" bg-grey-light">
          <div className="box-border p-3 w-full h-full">
            { children }
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}