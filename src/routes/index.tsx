import { useGSAP } from '@gsap/react';
import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import Sparkle from '../assets/svgs/Sparkle';
import gsap from 'gsap';
import { styles } from '../utils/styles.ts';
import { projects } from '../utils/data/projects.ts';

export const Route = createFileRoute('/')({
    component: About,
});
function About() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                container.current,
                { filter: 'blur(10px)', opacity: 0, y: -50 },
                {
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    y: 0,
                }
            );
        },
        { scope: container } // this ensures only elements inside this ref are affected
    );

    const calculateTotalExperience = () => {
        const calculateMonths = (startDate: string, endDate: string) => {
            const start = new Date(startDate);
            const end = new Date(endDate);

            let months = (end.getFullYear() - start.getFullYear()) * 12;
            months += end.getMonth() - start.getMonth();

            if (end.getDate() < start.getDate()) {
                months--;
            }

            return Math.max(0, months);
        };
        const pastMonths = calculateMonths('2024-01-08', '2024-06-21');
        const futureMonths = calculateMonths(
            '2025-08-04',
            new Date().toISOString()
        );

        return pastMonths + futureMonths;
    };

    return (
        <div
            id="page-transition-container"
            ref={container}
            className="gap-y-4 flex flex-col w-full place-items-center lg:max-w-[75%] lg:px-4">
            <div className="wrap-anywhere w-full flex flex-col gap-y-2 text-justify lg:text-lg">
                <p className={`${styles.heading}`}>
                    <span className="text-red">Creative-Driven</span>{' '}
                    <span className="italic">Software Engineer</span>
                </p>
                <p className="font-outfit text-black">
                    I am Melissa, a software engineer who loves to blend code
                    with creativity. I specialize in full-stack and frontend
                    development, crafting engaging user experiences and building
                    robust applications. I occasionally dabble in graphic design
                    as a hobby.
                </p>
                <p className="font-outfit text-black">
                    Based in{' '}
                    <span className="text-red font-semibold">Singapore</span>.
                </p>
            </div>
            <div className="w-full flex flex-col gap-x-2 gap-y-2 flex-wrap lg:text-lg">
                <div className="font-outfit flex items-center gap-x-2">
                    <Sparkle width="w-4" fill="fill-blue-hover" />
                    <p className="text-black flex items-center gap-x-2">
                        <span className="font-instrument-serif text-3xl text-blue">
                            {projects.length}
                        </span>{' '}
                        projects completed
                    </p>
                </div>
                <div className="font-outfit flex items-center gap-x-2">
                    <Sparkle width="w-4" fill="fill-blue-hover" />
                    <p className="text-black flex items-center gap-x-2">
                        <span className="font-instrument-serif text-3xl text-blue">
                            {calculateTotalExperience()}
                        </span>{' '}
                        months of experience
                    </p>
                </div>
            </div>
        </div>
    );
}
