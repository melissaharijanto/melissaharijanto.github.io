import { createFileRoute } from '@tanstack/react-router';
import { styles } from '../utils/styles.ts';
import { useEffect, useRef } from 'react';
import { useTransitionTimeline } from '../utils/store/TransitionContext';
import gsap from 'gsap';
import { projects } from '../utils/data/projects.ts';
import ProjectComponent from '../assets/components/ProjectComponent.tsx';

export const Route = createFileRoute('/works')({
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
            className="lg:px-4 overflow-y-auto flex flex-col gap-y-8 xl:py-8 py-16">
            <div className="flex flex-col gap-y-2">
                <p className={`${styles.heading}`}>
                    Things I've <span className="text-red">Built</span>
                </p>
                <p className="font-outfit">
                    Tech projects I have been involved in &mdash; click on the
                    projects for more details.
                </p>
            </div>
            <div className="grid gap-2 xl:grid-cols-2">
                {projects.map((project, idx) => (
                    <ProjectComponent
                        projectProps={project}
                        key={`${project.title} ${idx}`}
                        index={idx}
                    />
                ))}
            </div>
        </div>
    );
}
