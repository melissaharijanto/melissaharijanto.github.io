import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/works')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <p className="font-instrument-serif">Things I've Built</p>
        </div>
    );
}
