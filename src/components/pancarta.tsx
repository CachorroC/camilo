'use client';
import {
    useSelectedLayoutSegment,
    useParams,
} from 'next/navigation';
import layout from '#@/styles/css/layout.module.css';

export function PancartaHorizontal() {
    const segment = useSelectedLayoutSegment();
    const params = useParams();
    return (
        <div className={layout.pancartaHorizontal}>
            {JSON.stringify(
                params
            )}
        </div>
    );
}

export function PancartaVertical() {
    return <p>vertical</p>;
}
