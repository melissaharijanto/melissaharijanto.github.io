import { useRouterState } from '@tanstack/react-router';
import Logo from './Logo';
import { styles } from '../../utils/styles';
import AnimatedLink from './AnimatedLink';

const Navigation = () => {
    const router = useRouterState();
    const currentPath = router?.location.pathname || '/';

    const determineActiveLink = (path: string) => {
        return currentPath === path ? 'font-semibold' : '';
    };

    return (
        <div className="hidden md:flex flex-col font-outfit h-screen py-8 min-w-[10%]">
            <Logo />
            <div className="flex flex-col justify-between h-full">
                <div className={`flex flex-col`}>
                    <AnimatedLink
                        to="/"
                        className={`${styles.navLink} ${determineActiveLink(
                            '/'
                        )}`}>
                        About
                    </AnimatedLink>
                    <AnimatedLink
                        to="/works"
                        className={`${styles.navLink} ${determineActiveLink(
                            '/works'
                        )}`}>
                        Works
                    </AnimatedLink>
                    <AnimatedLink
                        to="/experience"
                        className={`${styles.navLink} ${determineActiveLink(
                            '/experience'
                        )}`}>
                        Experience
                    </AnimatedLink>
                    <AnimatedLink
                        to="/playground"
                        className={`${styles.navLink} ${determineActiveLink(
                            '/playground'
                        )}`}>
                        Playground
                    </AnimatedLink>
                </div>
                <div className="flex flex-col">
                    <p className="text-black">Links</p>
                    <a href="/resume" className={styles.navLink}>
                        Resume
                    </a>
                    <a href="/github" className={styles.navLink}>
                        GitHub
                    </a>
                    <a href="/email" className={styles.navLink}>
                        Email
                    </a>
                    <a href="/linkedin" className={styles.navLink}>
                        LinkedIn
                    </a>
                    <p className="text-xs text-black/50 mt-2">
                        Built with React, <br /> animated with GSAP.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
