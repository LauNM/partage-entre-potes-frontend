import { RequireAuth } from '@/components/utils';

import type { Metadata } from "next";
interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Mon profil',
  description: "Page de mon profil"
};

export default function Layout({ children }: Props) {
  return <RequireAuth>{children}</RequireAuth>;
}