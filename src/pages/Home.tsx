import Flower from '../components/svgs/Flower';
import { styles } from '../styles';
import RightArrow from '../components/svgs/RightArrow';

const Home = () => {
    const navigateToLinkedin = () => {
        window.open('https://linkedin.com/in/melissaharijanto', '_blank');
    };

    return (
        <div
            id="home"
            className="w-full flex flex-col justify-center items-center min-h-screen bg-[#1e1e1e] h-screen">
            <p className={`${styles['header-sm']} mb-2`}>
                &mdash; &nbsp;HELLO, I AM
            </p>
            <div className={`${styles['header-xl']}`}>
                <div className="w-max flex flex-col justify-center items-center">
                    <div className="w-full flex justify-between items-center">
                        <div>MELISSA</div>
                        <div>A.</div>
                        <div>HARIJANTO</div>
                    </div>
                    <div className="w-full flex justify-between items-center gap-x-4">
                        <div>SOFTWARE</div>
                        <div className="animate-spin-slow flex justify-center items-center">
                            <Flower fill="fill-red" width="w-16"></Flower>
                        </div>
                        <div>ENGINEER</div>
                    </div>
                </div>
            </div>
            {/* <div className="border-[1px] border-white px-4 py-2 rounded-lg flex justify-center items-center w-max mt-8">
                    <p className={`${styles['header-sm']}`}>
                        NUS COMPUTER SCIENCE UNDERGRADUATE
                    </p>
                </div> */}
            <div className="mt-8">
                <p className={`${styles['subheading']}`}>
                    Creating substantial impact through{' '}
                    <span className="text-yellow">software</span>.
                </p>
            </div>

            <div className="flex gap-x-4 mt-8">
                <button
                    onClick={navigateToLinkedin}
                    className={`${styles['button-text-black']} border-[1px] text-black! border-blue bg-blue hover:bg-blue-pressed hover:border-blue-pressed transition-all ease-in hover:font-bold pl-4 pr-2 py-2 rounded-3xl gap-x-1 flex items-center justify-between`}>
                    LinkedIn Profile &nbsp;
                    <div className="bg-black rounded-full p-2">
                        <RightArrow width="w-4" fill="fill-white" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Home;
