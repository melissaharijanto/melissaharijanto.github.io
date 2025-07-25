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
                <p className={`font-outfit text-justify`}>
                    While I am primarily a software engineer by day, I also
                    enjoy graphic design and casual phone photography just for
                    the joy of creating. This page is where I play with those
                    ideas, mainly posters and photo edits. I gravitate toward
                    minimalist aesthetics and typography-focused design. You can
                    find more of my work in my Behance profile{' '}
                    <a
                        href="https://behance.net/melisara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}>
                        @melisara
                    </a>
                    !
                </p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 lg:gap-2 gap-1">
                <img src="/pg/live/1.png" />
                <img src="/pg/live/2.png" />
                <img src="/pg/live/3.png" />
                <img src="/pg/live/4.png" />
                <img src="/pg/edits/1.jpg" />
                <img src="/pg/edits/2.jpg" />
                <img src="/pg/edits/3.jpg" />
                <img src="/pg/edits/4.jpg" />
                <img src="/pg/edits/5.jpg" />
                <img src="/pg/edits/6.jpg" />
                <img src="/pg/edits/7.jpg" />
                <img src="/pg/edits/8.jpg" />
            </div>
            <p className="font-outfit"></p>
        </div>
    );
}
