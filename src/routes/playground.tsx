import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { useTransitionTimeline } from '../utils/store/TransitionContext';
import gsap from 'gsap';
import { styles } from '../utils/styles';

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
        <div
            ref={container}
            id="page-transition-container"
            className="flex flex-col overflow-y-auto gap-y-8 xl:py-8 my-16 py-16">
            <div className="gap-y-2 flex flex-col">
                <p className={`${styles.heading}`}>
                    Outside <span className="text-red">Work...</span>
                </p>
                <p className={`font-outfit`}>
                    Although I mainly do software engineering, I am a hobbyist
                    who does graphic design and casual phone photography for fun
                    in my free time! Sometimes I combine them too :)
                </p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 lg:gap-2 gap-1">
                <img src="/playground/live/1.png" />
                <img src="/playground/live/2.png" />
                <img src="/playground/live/3.png" />
                <img src="/playground/live/4.png" />
                <img src="/playground/edits/1.jpg" />
                <img src="/playground/edits/2.jpg" />
                <img src="/playground/edits/3.jpg" />
                <img src="/playground/edits/4.jpg" />
                <img src="/playground/edits/5.jpg" />
                <img src="/playground/edits/6.jpg" />
                <img src="/playground/edits/7.jpg" />
                <img src="/playground/edits/8.jpg" />
            </div>
            <p className="font-outfit">
                More in my Behance profile{' '}
                <a href="https://behance.net/melisara">@melisara</a>!
            </p>
        </div>
    );
}
