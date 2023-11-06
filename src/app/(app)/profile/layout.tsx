import { RequireAuth } from '@/components/utils';

import type { Metadata } from "next";
import AccountPage from "@/components/account/AccountPage";
interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Mon profil',
  description: "Page de mon profil"
};

export default function Layout({ children }: Props) {
  return (
  <div style={{display: 'flex', height: 'calc(100vh - 64px)'}}>
    <RequireAuth>
      <div style={{width: '50%'}}><AccountPage /></div>
      <div style={{width: '50%'}}> {children}</div>
    </RequireAuth>
  </div>
  );
}