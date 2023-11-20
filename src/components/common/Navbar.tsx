'use client';

import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import { NavLink } from '@/components/common';

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector(state => state.auth);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        // @ts-ignore
        dispatch(setLogout());
      });
  };

  const isSelected = (path: string) => (pathname === path);

  const authLinks = (isMobile: boolean) => (
    <>
      <NavLink
        isSelected={ isSelected('/dashboard') }
        isMobile={ isMobile }
        href="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink isMobile={ isMobile } onClick={ handleLogout }>
        Logout
      </NavLink>
    </>
  );

  return (
    <Disclosure as="nav" className="bg-blue">
      { ({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink href="/my-network" isBanner>
                    Mon réseau
                  </NavLink>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <NavLink href="/profile" isBanner>
                    Mon compte
                  </NavLink>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <NavLink href="/notifications" isBanner>
                    Notifications
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </>
      ) }
    </Disclosure>
  );
}