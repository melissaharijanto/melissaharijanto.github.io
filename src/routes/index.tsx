import { useGSAP } from '@gsap/react';
import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import Sparkle from '../assets/svgs/Sparkle';
import gsap from 'gsap';
import { styles } from '../utils/styles.ts'

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

    return (
        <div
            id="page-transition-container"
            ref={container}
            className="gap-y-4 flex flex-col w-full place-items-center lg:max-w-2/3">
            <div className="wrap-anywhere w-full flex flex-col gap-y-2 text-justify lg:text-lg">
                <p className={`${styles.heading}`}>
                    <span className="text-red">
                        Creative-Driven
                    </span>{' '}
                    <span className="italic">
                    Software Engineer
                    </span>
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
                    <span className="text-red font-outfit-semibold">
                        Singapore
                    </span>
                    .
                </p>
            </div>
            <div className="w-full flex flex-col gap-x-2 gap-y-2 flex-wrap lg:text-lg">
                <div className="font-outfit flex items-center gap-x-2">
                    <Sparkle width="w-4" fill="fill-blue-hover" />
                    <p className="text-black flex items-center gap-x-2">
                        <span className="font-instrument-serif text-3xl text-blue">
                            30
                        </span>{' '}
                        projects completed
                    </p>
                </div>
                <div className="font-outfit flex items-center gap-x-2">
                    <Sparkle width="w-4" fill="fill-blue-hover" />
                    <p className="text-black flex items-center gap-x-2">
                        <span className="font-instrument-serif text-3xl text-blue">
                            40
                        </span>{' '}
                        months of experience
                    </p>
                </div>
            </div>
        </div>
    );
}
