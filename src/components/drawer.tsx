'use client';
import { useNavigator } from '#@/app/navigator-context';
import layout from '#@/styles/css/layout.module.css';
import { ReactNode, Suspense } from 'react';
import Button from './button';
import navbar from '#@/styles/css/navbar.module.css';
import InputSearchBar from './InputSearchBar';
export default function Drawer({
    children,
}: {
    children: ReactNode;
}) {
    const [isOpen, setIsOpen] = useNavigator();
    if (isOpen) {
        return (
            <div
                className={` ${navbar.drawer} ${layout.open}`}
            >
                <InputSearchBar />
                <Button isLink={false} />
                {children}
            </div>
        );
    }

    return (
        <button
            onClick={() => {
                return setIsOpen(!isOpen);
            }}
        >
            <span className='material-symbols-outlined'>
                {isOpen}
            </span>
        </button>
    );
}
