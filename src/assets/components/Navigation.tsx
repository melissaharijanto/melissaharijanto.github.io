import { useRouterState } from '@tanstack/react-router';
import Logo from './Logo';
import { styles } from '../../utils/styles';
import AnimatedLink from './AnimatedLink';
import { useState } from 'react';
import { X } from 'lucide-react';

const Navigation = () => {
    const router = useRouterState();
    const currentPath = router?.location.pathname || '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const determineActiveLink = (path: string) => {
        return currentPath === path ? 'font-semibold' : '';
    };

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="hidden md:flex flex-col font-outfit h-screen py-8 min-w-[15%]">
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
                        <a
                            href="https://drive.google.com/file/d/11TjWo-55mOeTio7dKnydA2qOFplJOjAx/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.navLink}>
                            Resume
                        </a>
                        <a
                            href="https://github.com/melissaharijanto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.navLink}>
                            GitHub
                        </a>
                        <a
                            href="mailto:melissaharijanto18@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.navLink}>
                            Email
                        </a>
                        <a
                            href="https://linkedin.com/in/melissaharijanto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.navLink}>
                            LinkedIn
                        </a>
                        <a
                            href="https://behance.com/melisara"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.navLink}>
                            Behance
                        </a>
                        <p className="text-xs text-black/50 mt-2">
                            Built with React. <br /> &copy; 2025 Melissa A.
                            Harijanto
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden font-outfit absolute top-6 right-6">
                <button
                    onClick={toggleMenu}
                    className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
                    aria-label="Toggle menu">
                    <span
                        className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                            isMenuOpen
                                ? 'rotate-45 translate-y-0.5'
                                : '-translate-y-1.5'
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                            isMenuOpen
                                ? '-rotate-45 -translate-y-0.5'
                                : 'translate-y-1.5'
                        }`}
                    />
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                        isMenuOpen
                            ? 'opacity-100'
                            : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={closeMenu}
                />

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-full max-w-[50vw] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="flex flex-col h-full p-6">
                        {/* Close Button */}
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={closeMenu}
                                className="w-8 h-8 flex items-center justify-center text-2xl text-black hover:bg-black/10 rounded-full transition-colors"
                                aria-label="Close menu">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col gap-y-2 mb-8">
                            <AnimatedLink
                                to="/"
                                onClick={closeMenu}
                                className={`${
                                    styles.navLink
                                } ${determineActiveLink('/')}`}>
                                About
                            </AnimatedLink>
                            <AnimatedLink
                                to="/works"
                                onClick={closeMenu}
                                className={`${
                                    styles.navLink
                                } ${determineActiveLink('/works')}`}>
                                Works
                            </AnimatedLink>
                            <AnimatedLink
                                to="/experience"
                                onClick={closeMenu}
                                className={`${
                                    styles.navLink
                                } ${determineActiveLink('/experience')}`}>
                                Experience
                            </AnimatedLink>
                            <AnimatedLink
                                to="/playground"
                                onClick={closeMenu}
                                className={`${
                                    styles.navLink
                                } ${determineActiveLink('/playground')}`}>
                                Playground
                            </AnimatedLink>
                        </div>

                        {/* Divider */}
                        <hr className="border-t border-black/20 my-6" />

                        {/* External Links */}
                        <div className="flex flex-col gap-y-2 mt-8">
                            <p className="text-black font-semibold mb-3">
                                Links
                            </p>
                            <a
                                href="https://drive.google.com/file/d/11TjWo-55mOeTio7dKnydA2qOFplJOjAx/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.navLink}`}
                                onClick={closeMenu}>
                                Resume
                            </a>
                            <a
                                href="https://github.com/melissaharijanto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.navLink}`}
                                onClick={closeMenu}>
                                GitHub
                            </a>
                            <a
                                href="mailto:melissaharijanto18@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.navLink}`}
                                onClick={closeMenu}>
                                Email
                            </a>
                            <a
                                href="https://linkedin.com/in/melissaharijanto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.navLink}`}
                                onClick={closeMenu}>
                                LinkedIn
                            </a>
                            <a
                                href="https://behance.com/melisara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.navLink}`}
                                onClick={closeMenu}>
                                Behance
                            </a>
                        </div>

                        {/* Footer */}
                        <div className="mt-auto">
                            <p className="text-xs text-black/50">
                                Built with React. <br /> &copy; 2025 Melissa A.
                                Harijanto
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
