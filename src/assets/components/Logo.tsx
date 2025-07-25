import { Link } from '@tanstack/react-router';

const Logo = () => {
    return (
        <Link to="/" className="cursor-pointer">
            <p className="font-instrument-serif text-red text-3xl">
                <span className="text-black">M</span>H
            </p>
        </Link>
    );
};

export default Logo;
