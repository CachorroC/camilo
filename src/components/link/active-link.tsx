import Link from 'next/link';
import { ReactNode } from 'react';
import card from '#@/styles/css/card.module.css';

export default function Linker(
    {
        children,
        href,
        isActive,
    }: {
    children: ReactNode;
    href: string;
    isActive: boolean;
}
) {
    return (
        <Link
            href={href}
            className={
                isActive
                    ? card.linkIsActive
                    : card.link
            }
        >
            {children}
        </Link>
    );
}
