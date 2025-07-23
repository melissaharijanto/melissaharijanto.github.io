import { Link } from '@tanstack/react-router';
import Logo from './Logo';
import { styles } from '../../utils/styles';

const Navigation = () => {
    return (
        <div className="hidden md:flex flex-col font-outfit h-screen py-8 min-w-[10%]">
            <Logo />
            <div className="flex flex-col justify-between h-full">
                <div className={`flex flex-col`}>
                    <Link to="/" className={styles.navLink}>About</Link>
                    <Link to="/works" className={styles.navLink}>Works</Link>
                    <Link to="/experience" className={styles.navLink}>Experience</Link>
                    <Link to="/playground" className={styles.navLink}>Playground</Link>
                </div>
                <div className="flex flex-col">
                    <p className="text-black">Links</p>
                    <a href="/resume" className={styles.navLink}>Resume</a>
                    <a href="/github" className={styles.navLink}>GitHub</a>
                    <a href="/email" className={styles.navLink}>Email</a>
                    <a href="/linkedin" className={styles.navLink}>LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
