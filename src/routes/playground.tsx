import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { useTransitionTimeline } from '../utils/store/TransitionContext';
import gsap from 'gsap';

export const Route = createFileRoute('/playground')({
    component: RouteComponent,
});

function RouteComponent() {
    const container = useRef<HTMLDivElement>(null);
    const tl = useTransitionTimeline();

    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.clear();
            tl.fromTo(
                container.current,
                { opacity: 0, y: -40, filter: 'blur(20px)' },
                {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 0.6,
                    ease: 'power2.out',
                }
            );
            tl.play();
        }, container);

        return () => ctx.revert();
    }, []);
    return (
        <div ref={container} id="page-transition-container">
            <p className="font-outfit"> coming soon :)</p>
        </div>
    );
}
