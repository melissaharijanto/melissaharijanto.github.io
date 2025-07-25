import type { ReactNode } from 'react';

export interface AnimatedLinkProps {
    to: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void | undefined;
}
