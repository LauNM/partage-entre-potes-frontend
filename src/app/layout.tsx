import './styles/globals.css';
import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '@/redux/provider';
import { Setup } from '@/components/utils';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';

const inter = Inter( { subsets: ['latin'] } );

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout( { children }: { children: React.ReactNode } ) {
  return (
    <html lang="en">
    <head>
      <ColorSchemeScript/>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
      <title>Partage entre potes</title>
    </head>
    <body className={ inter.className }>
    <Provider>
      <MantineProvider theme={ theme }>
        <Setup/>
        { children }
      </MantineProvider>
    </Provider>
    </body>
    </html>
  );
}
