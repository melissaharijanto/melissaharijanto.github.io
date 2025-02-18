import { styles } from '../utils/css/styles';
import AnimationLayout from '../components/animation/AnimationLayout';
import SpinningTextRing from '../components/SpinningTextRing';
import BentoGrid from '../components/projects/BentoGrid';
import { projects } from '../utils/data/projects';
import React from 'react';
import Fade from '../components/animation/Fade';
import HorizontalLine from '../components/HorizontalLine';

const Projects: React.FC = () => {
    return (
        <div
            id="projects"
            className={`${styles.page} flex justify-center items-center flex-col pt-20 mt-8`}>
            <AnimationLayout className="flex flex-col justify-center items-center min-h-screen">
                <Fade
                    variants="FROM_LEFT"
                    className="flex flex-col justify-center lg:flex-row lg:justify-start w-full items-center gap-y-8 lg:gap-y-0 lg:gap-x-4">
                    <SpinningTextRing />
                    <div
                        className={`text-center lg:text-left ${styles['header-lg']}`}>
                        <p>SOFTWARE I'VE WORKED ON</p>
                    </div>
                </Fade>
                <Fade variants="FROM_RIGHT" className="w-full">
                    <HorizontalLine className="mt-8" />
                </Fade>
                <BentoGrid projects={projects} />
            </AnimationLayout>
        </div>
    );
};

export default Projects;
