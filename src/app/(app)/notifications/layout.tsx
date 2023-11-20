import { RequireAuth } from '@/components/utils';

import type { Metadata } from 'next';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Notifications',
  description: 'Page de mes notifications',
};

export default function Layout({ children }: Props) {
  return <div className="p-3"><RequireAuth>{ children }</RequireAuth></div>;
}