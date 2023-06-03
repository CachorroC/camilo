'use client'
import { useNoter } from '#@/app/notes-context';
import navbar from '#@/styles/css/navbar.module.css';
export default function NewDayButton () {
    const [
        isShowing,
        setIsShowing
    ] = useNoter()
    return (
        <button
            type='button'
            className={ navbar.button }
            onClick={
                () => {
                    setIsShowing(
                        !isShowing
                    );
                }
            }
        >
            <span className='material-symbols-outlined'>
                add
            </span>
        </button>
    )
}
