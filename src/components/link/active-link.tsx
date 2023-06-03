'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import card from '#@/styles/css/card.module.css';
import { Route } from 'next';
import { usePathname } from 'next/navigation';

export default function Linker<T extends string>({
    children,
    href,
}: {
    children: ReactNode;
    href: Route<T> | URL;
}) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            className={
                isActive ? card.linkIsActive : card.link
            }
        >
            {children}
        </Link>
    );
}
