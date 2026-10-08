'use client';
import { useEffect, useState } from 'react';

/**
 * high — to'liq 3D
 * mid  — kamaytirilgan zarrachalar, past DPR
 * low  — 3D o'rniga statik rasm / Lottie
 */
export type DeviceTier = 'high' | 'mid' | 'low';

function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

export function detectDeviceTier(): DeviceTier {
  // Sinash uchun: ?tier=high | mid | low
  const forced = new URLSearchParams(window.location.search).get('tier');
  if (forced === 'high' || forced === 'mid' || forced === 'low') return forced;

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean };
  };

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'low';
  if (nav.connection?.saveData) return 'low';
  if (!hasWebGL()) return 'low';

  const isTouchSmall =
    window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 768;
  if (isTouchSmall) return 'low';

  const memory = nav.deviceMemory ?? 8;
  const cores = nav.hardwareConcurrency ?? 8;
  if (memory <= 4 || cores <= 4 || window.innerWidth < 1024) return 'mid';

  return 'high';
}

/** SSR paytida null; brauzerda mount bo'lgach daraja qaytadi. */
export function useDeviceTier(): DeviceTier | null {
  const [tier, setTier] = useState<DeviceTier | null>(null);
  useEffect(() => {
    setTier(detectDeviceTier());
  }, []);
  return tier;
}
