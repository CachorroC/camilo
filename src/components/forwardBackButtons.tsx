'use client';

import { useRouter } from 'next/navigation';
import navbar from '#@/styles/css/navbar.module.css';
import { useNoter } from '#@/app/notes-context';
import NewDayButton from './nuevo-dia/nuevo-dia-button';

export default function FBButtons () {
    const [
        isShowing,
        setIsShowing
    ] = useNoter();
    const router = useRouter();
    return (
        <>
            <button
                type='button'
                className={ navbar.button }
                onClick={
                    () => {
                        return router.back();
                    }
                }
            >
                <span className='material-symbols-outlined'>
                    undo
                </span>
            </button>
            <NewDayButton />
            <button
                type='button'
                className={ navbar.button }
                onClick={ () => {
                    return router.forward();
                } }
            >
                <span className='material-symbols-outlined'>
                    redo
                </span>
            </button>
        </>
    );
}
