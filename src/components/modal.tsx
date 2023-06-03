'use client';
import {
    useCallback,
    useRef,
    useEffect,
    ReactNode,
    MouseEventHandler,
} from 'react';
import { useRouter } from 'next/navigation';
import layout from '#@/styles/css/layout.module.css';
import { useNoter } from '#@/app/notes-context';
import FBButtons from '#@/components/forwardBackButtons';

export default function Modal({
    children,
}: {
    children: ReactNode;
}) {
    const router = useRouter();
    const [isShowing, setIsShowing] = useNoter();
    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <div className={layout.modal}>
            <FBButtons />

            {children}
        </div>
    );
}
