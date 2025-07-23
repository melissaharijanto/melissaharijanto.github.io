import { createFileRoute } from '@tanstack/react-router';
import { styles } from '../utils/styles.ts';
export const Route = createFileRoute('/works')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <p className={styles.heading}>Things I've Built</p>
        </div>
    );
}
