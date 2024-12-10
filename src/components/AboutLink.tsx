import { SvgIconComponent } from '@mui/icons-material';
import { styles } from '../utils/css/styles';
import DiagonalArrow from './svgs/DiagonalArrow';

const AboutLink = ({
    label,
    url,
    Icon,
}: {
    label: string;
    url: string;
    Icon: SvgIconComponent;
}) => {
    return (
        <div className="group relative inline-block">
            <a
                href={url}
                target="_blank"
                className={`flex justify-center items-center ${styles['header-sm']} gap-x-2 hover:font-bold transition-all ease-in`}>
                <Icon fontSize="large" className="text-white" />
                {label}
                <DiagonalArrow fill="fill-white" width="w-4" />
            </a>
            <span className={`${styles['navbar-underline']}`}></span>
        </div>
    );
};

export default AboutLink;
