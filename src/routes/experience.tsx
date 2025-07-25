import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { useTransitionTimeline } from '../utils/store/TransitionContext';
import gsap from 'gsap';
import { styles } from '../utils/styles';
import ExperienceComponent from '../assets/components/ExperienceComponent';
import { experiences } from '../utils/data/experiences';

export const Route = createFileRoute('/experience')({
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
            id="page-transition-container"
            ref={container}
            className="lg:px-4 overflow-y-auto flex flex-col gap-y-8 xl:py-8 my-16 py-16">
            <div className="flex flex-col gap-y-2">
                <p className={`${styles.heading}`}>
                    Where I've <span className="text-red">Been</span>
                </p>
                <p className="font-outfit">
                    My professional career journey throughout the years.
                </p>
            </div>
            <div>
                {experiences.map((exp, index) => (
                    <ExperienceComponent key={index} exp={exp} />
                ))}
            </div>
        </div>
    );
}
