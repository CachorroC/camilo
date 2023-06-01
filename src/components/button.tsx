'use client';
import navbar from '#@/styles/css/navbar.module.css';
import { useNavigator } from '../app/navigator-context';
import { useRouter } from 'next/navigation';
export default function Button(
    {isLink,}: {
    isLink: boolean;
}
) {
    const handleClick = () => {
        isLink
            ? router.push(
                '/'
            )
            : setIsOpen(
                !isOpen
            );
        alert(
            'you clicked me '
        );
    };

    const [
        isOpen, setIsOpen 
    ] = useNavigator();
    const router = useRouter();
    return (
        <button
            onClick={() => {
                isLink
                    ? router.push(
                        '/'
                    )
                    : setIsOpen(
                        isOpen
                            ? false
                            : true
                    );
            }}
            className={navbar.button}
            style={
                isLink
                    ? { gridArea: 'Button_siLink' }
                    : {
                        gridArea: 'Button_noLink',
                        order: 99,
                        flexGrow: 2,
                    }
            }
        >
            <span className='material-symbols-rounded'>
                {isLink
                    ? 'home'
                    : isOpen
                        ? 'close'
                        : 'menu'}
            </span>
        </button>
    );
}
