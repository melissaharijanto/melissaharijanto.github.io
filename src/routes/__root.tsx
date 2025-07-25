import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Navigation from '../assets/components/Navigation';
import Logo from '../assets/components/Logo';
import '../index.css';
import { TransitionProvider } from '../utils/store/TransitionProvider';

export const Route = createRootRoute({
    component: () => (
        <TransitionProvider>
            <div className="bg-white min-h-screen w-screen flex justify-center items-center noise overflow-hidden">
                <div className="absolute top-6 left-6 md:top-8 lg:left-8 md:hidden block">
                    <Logo />
                </div>
                <div className="max-w-[90%] min-w-[90%] w-full xl:min-w-2/3 xl:max-w-2/3 flex items-center gap-24 h-full">
                    <Navigation />
                    <div className="overflow-y-auto w-full h-full flex flex-col justify-center py-8">
                        <Outlet />
                    </div>
                </div>
                {/* <TanStackRouterDevtools /> */}
            </div>
        </TransitionProvider>
    ),
});
