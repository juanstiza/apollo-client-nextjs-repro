import { Suspense } from 'react';
import Launch from '@/components/Launch';

export default function Home() {
  return <Suspense fallback={'Loading...'}>
    <Launch />
  </Suspense>;
}
