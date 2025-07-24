import { createContext, useContext } from 'react';

export const TransitionContext = createContext<gsap.core.Timeline | null>(null);

export const useTransitionTimeline = () => {
    const ctx = useContext(TransitionContext);
    if (!ctx) {
        throw new Error(
            'useTransitionTimeline must be used within <TransitionProvider>'
        );
    }
    return ctx;
};
