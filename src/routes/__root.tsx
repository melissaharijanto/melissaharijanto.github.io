import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Navigation from '../assets/components/Navigation';
import Logo from '../assets/components/Logo';
import '../index.css';
import { TransitionProvider } from '../utils/store/TransitionProvider';

export const Route = createRootRoute({
    component: () => (
        <TransitionProvider>
            <div className="bg-white h-screen w-screen flex justify-center items-center noise">
                <div className="absolute top-8 left-8 md:hidden block">
                    <Logo />
                </div>
                <div className="max-w-[80%] min-w-[80%] w-full lg:min-w-2/3 lg:max-w-2/3 flex items-center gap-24">
                    <Navigation />
                    <Outlet />
                </div>
                <TanStackRouterDevtools />
            </div>
        </TransitionProvider>
    ),
});
