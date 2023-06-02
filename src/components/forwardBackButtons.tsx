'use client';

import {
    useRouter 
} from 'next/navigation';
import navbar from '#@/styles/css/navbar.module.css';
import {
    useNoter 
} from '#@/app/notes-context';

export default function FBButtons() {
    const [
        isShowing, setIsShowing
    ] = useNoter();
    const router = useRouter();
    return (
        <>
            <button
                type='button'
                className={navbar.button}
                onClick={() => {
                    return router.back();
                }}
            >
                <span className='material-symbols-outlined'>
                    undo
                </span>
            </button>
            <button
                type='button'
                className={navbar.button}
                onClick={() => {
                    setIsShowing(!isShowing);
                }}
            >
                <span className='material-symbols-outlined'>
                    note
                </span>
            </button>
            <button
                type='button'
                className={navbar.button}
                onClick={() => {
                    return router.forward();
                }}
            >
                <span className='material-symbols-outlined'>
                    redo
                </span>
            </button>
        </>
    );
}
