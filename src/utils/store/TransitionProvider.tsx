import { useRef } from 'react';
import gsap from 'gsap';
import { TransitionContext } from './TransitionContext';

export function TransitionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const tl = useRef<gsap.core.Timeline>(gsap.timeline({ paused: true }));

    return (
        <TransitionContext.Provider value={tl.current}>
            {children}
        </TransitionContext.Provider>
    );
}
