import ButtonWithRightArrow from '../components/ButtonWithRightArrow';
import DiagonalArrow from '../components/svgs/DiagonalArrow';
import { styles } from '../utils/css/styles';
import TravelLog from '../assets/travel-log.gif';
import AnimationLayout from '../components/animation/AnimationLayout';
import { motion } from 'framer-motion';
import {
    childVariants,
    childVariantsThree,
    childVariantsTwo,
} from '../utils/data/animation';
import ChatIcon from '../components/svgs/ChatIcon';
import SpinningTextRing from '../components/SpinningTextRing';
import InventoryIcon from '../components/svgs/InventoryIcon';
import BentoGrid from '../components/BentoGrid';

const Projects = () => {
    return (
        <div
            id="projects"
            className={`${styles.page} flex justify-center items-center flex-col pt-24 mt-8`}>
            <AnimationLayout className="flex flex-col justify-center items-center min-h-screen">
                {/* <SubheadingTitle title="PROJECTS" flowerFill="fill-yellow" /> */}
                <motion.div
                    variants={childVariants}
                    className="flex justify-start w-full items-center gap-x-4">
                    <SpinningTextRing />
                    <div className={`text-left ${styles['header-lg']}`}>
                        <p>SOFTWARE I'VE WORKED ON</p>
                    </div>
                </motion.div>
                <motion.div variants={childVariantsTwo} className="w-full">
                    <hr className="w-full mt-8"></hr>
                </motion.div>
                <BentoGrid />
            </AnimationLayout>
        </div>
    );
};

export default Projects;
