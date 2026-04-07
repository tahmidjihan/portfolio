'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import 'lenis/dist/lenis.css';

export function LenisSmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: true,
    });

    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      window.dispatchEvent(
        new CustomEvent('scroll', { detail: { scrollY: scroll } })
      );
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [pathname]);

  return <>{children}</>;
}
