import { useRouter } from '@tanstack/react-router';
import type { MouseEvent } from 'react';
import { useTransitionTimeline } from '../../utils/store/TransitionContext';
import type { AnimatedLinkProps } from '../../utils/types/AnimatedLinkProps';

export default function AnimatedLink({ to, children, className }: AnimatedLinkProps) {
  const router = useRouter();
  const tl = useTransitionTimeline();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname === to) return;

    const container = document.getElementById('page-transition-container');
    if (!container) return router.navigate({ to });

    tl.clear(); // Clear any previous animations
    tl.to(container, {
      opacity: 0,
      y: 40,
      filter: 'blur(20px)',
      duration: 0.6,
      ease: 'power2.inOut',
    });

    await tl.play(); // Play exit
    router.navigate({ to }); // Trigger navigation after animation
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
