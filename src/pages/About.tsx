import { Description, GitHub, LinkedIn } from '@mui/icons-material';
import { styles } from '../utils/css/styles';
import SubheadingTitle from '../components/SubheadingTitle';
import AboutLink from '../components/AboutLink';
import { links } from '../utils/data/links';
import AnimationLayout from '../components/animation/AnimationLayout';
import ButtonWithDiagonalArrow from '../components/ButtonWithDiagonalArrow';
import Fade from '../components/animation/Fade';
import HorizontalLine from '../components/HorizontalLine';

const About = () => {
    return (
        <div
            className={`${styles.page} mt-4 flex justify-center items-center`}
            id="about">
            <AnimationLayout className="flex flex-col justify-center items-start bg-white dark:bg-black">
                <Fade
                    variants="FROM_LEFT"
                    className="flex justify-start w-full">
                    <SubheadingTitle title="ABOUT ME" flowerFill="fill-blue" />
                </Fade>
                <Fade variants="FROM_RIGHT" className="w-full">
                    <HorizontalLine />
                </Fade>
                <Fade
                    variants="FROM_BOTTOM"
                    className="mt-4 lg:mt-8 w-full flex justify-center ">
                    <div className="w-full lg:w-[90%] flex lg:flex-row flex-col font-medium lg:text-base text-sm justify-center gap-x-8">
                        <div className="flex-col flex lg:px-0 px-2">
                            <div className="flex flex-col items-start text-black dark:text-white">
                                <p className="font-manrope text-justify">
                                    Hi, I’m Melissa, a final-year Computer
                                    Science undergraduate based in Singapore,
                                    and an aspiring software engineer passionate
                                    about turning creative ideas into functional
                                    and engaging digital experiences. I focus on{' '}
                                    <span className="p-1 bg-gradient-to-r from-green/40 to-green/40 bg-no-repeat bg-[length:100%_50%] bg-[position:0%_60%] dark:bg-none dark:text-yellow font-semibold">
                                        full-stack and front-end development
                                    </span>
                                    , where I enjoy combining problem-solving
                                    and design to build solutions that users
                                    truly enjoy.
                                </p>
                                <br />
                                <p className="font-manrope text-justify">
                                    Throughout my journey, I’ve had the
                                    opportunity to work on some exciting
                                    projects, such as:
                                </p>
                                <ul className="list-disc mx-4 font-manrope text-justify">
                                    <li>
                                        Using{' '}
                                        <span className="p-1 bg-gradient-to-r from-red/40 to-red/40 bg-no-repeat bg-[length:100%_50%] bg-[position:0%_60%] dark:bg-none dark:text-red font-semibold">
                                            Generative AI APIs
                                        </span>{' '}
                                        with other tools like{' '}
                                        <span className="p-1 bg-gradient-to-r from-red/40 to-red/40 bg-no-repeat bg-[length:100%_50%] bg-[position:0%_60%] dark:bg-none dark:text-red font-semibold">
                                            Streamlit
                                        </span>{' '}
                                        and{' '}
                                        <span className="p-1 bg-gradient-to-r from-red/40 to-red/40 bg-no-repeat bg-[length:100%_50%] bg-[position:0%_60%] dark:bg-none dark:text-red font-semibold">
                                            Python
                                        </span>{' '}
                                        to create tools for enhanced
                                        productivity.
                                    </li>
                                    <li>
                                        Developing a student forum with{' '}
                                        <span className="p-1 bg-gradient-to-r from-red/40 to-red/40 bg-no-repeat bg-[length:100%_50%] bg-[position:0%_60%] dark:bg-none dark:text-red font-semibold">
                                            React Typescript
                                        </span>{' '}
                                        that helps over 100 users connect and
                                        share knowledge, with a focus on
                                        seamless mobile responsiveness.
                                    </li>
                                </ul>

                                <br />
                                <p className="font-manrope text-justify">
                                    I’m always excited to work with{' '}
                                    <span className="p-1 bg-gradient-to-r from-blue/40 to-blue/40 bg-no-repeat bg-[length:100%_50%] bg-[position:0%_60%] dark:bg-none dark:text-blue font-semibold">
                                        new emerging technologies
                                    </span>{' '}
                                    to build{' '}
                                    <span className="p-1 bg-gradient-to-r from-blue/40 to-blue/40 bg-no-repeat bg-[length:100%_50%] bg-[position:0%_60%] dark:bg-none dark:text-blue font-semibold">
                                        efficient, scalable, and user-friendly
                                        applications
                                    </span>
                                    . When I’m not coding, I enjoy designing fun
                                    posters or discovering new music to listen
                                    to.
                                </p>
                                <br />
                                <p className="font-manrope text-justify">
                                    Feel free to reach out if you’d like to
                                    collaborate on an exciting project or just
                                    chat about tech!
                                </p>
                                <ButtonWithDiagonalArrow
                                    link={links.email}
                                    label="Reach out via Email"
                                    className="mt-10"
                                />
                            </div>
                        </div>
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="w-[1px] bg-black dark:bg-white min-h-full py-4"></div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center lg:items-start gap-y-4 pt-8 lg:pt-0">
                                <p className={`${styles.subheading} text-left`}>
                                    Other ways to{' '}
                                    <span className="p-1 bg-gradient-to-r from-green/40 to-green/40 bg-no-repeat bg-[length:100%_50%] bg-[position:0%_60%] dark:bg-none dark:text-yellow">
                                        connect
                                    </span>{' '}
                                    with me:
                                </p>
                                <div className="flex flex-wrap justify-center flex-row gap-x-4 lg:flex-col lg:items-start lg:gap-y-4">
                                    <AboutLink
                                        url={links.github}
                                        Icon={GitHub}
                                        label="GITHUB"
                                    />
                                    <AboutLink
                                        url={links.linkedin}
                                        Icon={LinkedIn}
                                        label="LINKEDIN"
                                    />
                                    <AboutLink
                                        url={links.resume}
                                        Icon={Description}
                                        label="RESUME"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </AnimationLayout>
        </div>
    );
};

export default About;
