'use client';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from '@/lib/gsap';

/**
 * Sahifa scroll progressini (0..1) ref ichida saqlaydi.
 * Ref ishlatilgani uchun har kadrda React qayta render qilinmaydi
 * (3D sahnada useFrame ichida o'qish uchun mos).
 */
export function useScrollProgress() {
  const progress = useRef(0);
  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        progress.current = self.progress;
      },
    });
    return () => st.kill();
  }, []);
  return progress;
}
