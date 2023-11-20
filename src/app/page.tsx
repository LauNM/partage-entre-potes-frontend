import { RequireAuth } from '@/components/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Home({ children }: Props) {
  return <RequireAuth>{ children }</RequireAuth>;
}
