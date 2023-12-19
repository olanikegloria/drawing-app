'use client';
import { SessionProvider as Provider } from 'next-auth/react';
import BottomNavigation from './BottomNavigation'

export default function SessionProvider({children}) {
  return (
    <Provider>
      {children}
      <BottomNavigation/>
    </Provider>
  )
}