import layout from '#@/styles/css/layout.module.css';
import { Suspense } from 'react';
import FBButtons from './forwardBackButtons';
import { PancartaHorizontal } from './pancarta';

export default function Footer() {
    return (
        <footer className={layout.footer}>
            <FBButtons />

            <Suspense
                fallback={
                    <p>not ready yet with the pancarta</p>
                }
            >
                <PancartaHorizontal />
            </Suspense>
        </footer>
    );
}
