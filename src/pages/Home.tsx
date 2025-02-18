import Flower from '../components/svgs/Flower';
import { styles } from '../utils/css/styles';
import AnimationLayout from '../components/animation/AnimationLayout';
import { links } from '../utils/data/links';
import FlowerTwo from '../components/svgs/FlowerTwo';
import ButtonWithRightArrow from '../components/ButtonWithRightArrow';
import Fade from '../components/animation/Fade';

const Home = () => {
    return (
        <div
            id="home"
            className={`${styles.page} pt-4 overflow-hidden relative min-h-screen`}>
            <FlowerTwo
                width="w-64"
                fill="fill-blue"
                className="top-[-6vh] md:top-[-12vh] right-[-15vw] md:right-[-5vw] absolute md:w-80 opacity-30 animate-zoom-bounce"
            />

            <FlowerTwo
                width="w-64"
                fill="fill-green dark:fill-yellow"
                className="bottom-0 left-[-8vw] left-[-15vw] md:left-[-10vw] lg:left-[-5vw] absolute md:w-80 opacity-30 animate-zoom-bounce"
            />
            <AnimationLayout className="w-full flex flex-col justify-center items-center min-h-screen">
                <Fade
                    variants="FROM_RIGHT"
                    className={`${styles['header-sm']} mb-2`}>
                    &mdash; &nbsp;HELLO, I AM
                </Fade>
                <div className={`${styles['header-xl']}`}>
                    <Fade
                        variants="FROM_RIGHT"
                        className="w-full flex flex-col justify-center items-center">
                        <div className="w-full flex justify-center text-black dark:md:!text-white dark:text-red md:justify-between items-center">
                            <div>MELISSA</div>
                            <div className="md:flex hidden">A.</div>
                            <div className="md:flex hidden">HARIJANTO</div>
                        </div>
                        <div className="w-full md:flex justify-between dark:text-white text-black items-center gap-x-4 hidden">
                            <div>SOFTWARE</div>
                            <div className="animate-spin-slow flex justify-center items-center mt-3 lg:mt-4">
                                <Flower
                                    fill="fill-red"
                                    width="md:w-10 lg:w-16"></Flower>
                            </div>
                            <div>ENGINEER</div>
                        </div>
                        <div
                            className={`w-full flex justify-center items-center gap-x-4 md:hidden ${styles['header-sm']} !text-2xl`}>
                            <p>SOFTWARE ENGINEER</p>
                        </div>
                    </Fade>
                </div>

                {/* <div className="border-[1px] border-white px-4 py-2 rounded-lg flex justify-center items-center w-max mt-8">
                    <p className={`${styles['header-sm']}`}>
                        NUS COMPUTER SCIENCE UNDERGRADUATE
                    </p>
                </div> */}
                <Fade variants="FROM_RIGHT" className="mt-8">
                    <p className={`${styles['subheading']}`}>
                        Creating substantial impact through{' '}
                        <span className="p-1 bg-gradient-to-r from-green/40 to-green/40 bg-no-repeat bg-[length:100%_50%] bg-[position:0%_60%] dark:bg-none dark:p-0 dark:text-yellow">
                            software
                        </span>
                        .
                    </p>
                </Fade>

                <Fade variants="FROM_RIGHT" className="flex gap-x-4 mt-8">
                    <ButtonWithRightArrow
                        link={links.linkedin}
                        label={`LinkedIn Profile`}
                        className={`${styles['blue-button']}`}
                    />
                </Fade>
            </AnimationLayout>
        </div>
    );
};

export default Home;
