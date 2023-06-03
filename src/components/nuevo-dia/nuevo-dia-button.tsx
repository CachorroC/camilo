'use client'
import { useNoter } from '#@/app/notes-context';
import navbar from '#@/styles/css/navbar.module.css';
import Link from 'next/link';
import NuevoDia from './nuevo-dia';
export default function NewDayButton () {
    const [
        isShowing,
        setIsShowing
    ] = useNoter()
    if ( isShowing ) {
        return ( <button
            type='button'
            className={ navbar.button }
            onClick={ () => {
                setIsShowing(
                    false
                );
            } }
        >
            <span className='material-symbols-outlined'>
                add
            </span>

        </button> )
    }
    return ( <Link href='/NuevoDia' className={ navbar.button }>
        <button
            type='button'

            onClick={
                () => {
                    setIsShowing(
                        true
                    );
                }
            }
        >
            <span className='material-symbols-outlined'>
                add
            </span>
        </button>
    </Link>
    )
}
