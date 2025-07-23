import { Link } from '@tanstack/react-router';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className="hidden md:flex flex-col font-outfit h-screen py-8">
            <Logo />
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col">
                    <Link to="/">About</Link>
                    <Link to="/works">Works</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/playground">Playground</Link>
                </div>
                <div className="flex flex-col">
                    <p className="text-black">Links</p>
                    <a href="/resume">Resume</a>
                    <a href="/github">GitHub</a>
                    <a href="/email">Email</a>
                    <a href="/linkedin">LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
