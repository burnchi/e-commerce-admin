"use client"
import { useStoreModal } from '@/hooks/use-store-modal';
import { UserButton } from '@clerk/nextjs'
import { useEffect } from 'react';

export default function Home() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  // return null;
  return (
    <div className=' p-4'>
      Root page
    </div>
  )
}
