'use client';
import Link from 'next/link';
import {useSelectedLayoutSegment,
    usePathname,
    useSelectedLayoutSegments,
    useParams,} from 'next/navigation';
import navbar from '../styles/css/navbar.module.css';
import { useNavigator } from '../app/navigator-context';
import typeface from '../styles/css/typeface.module.css';
import type { Route } from 'next';

export const LinkCard = (
    {
        path,
        sujetosProcesales,
        llaveProceso,
        idProceso,
    }: {
    path: string;
    sujetosProcesales: string;
    llaveProceso?: string;
    idProceso?: number;
}
) => {
    const params = useParams();
    const pathname = usePathname();
    const [
        isOpen,
        setIsOpen
    ] = useNavigator();
    const href = (
        llaveProceso
            ? idProceso
                ? path
                  + '/'
                  + llaveProceso
                  + '/'
                  + idProceso.toString()
                : path + '/' + llaveProceso
            : path
    ) as Route;

    const isActive
        = pathname === href
        || pathname === path + '/' + llaveProceso
        || pathname
            === path
                + '/'
                + llaveProceso
                + '/'
                + idProceso?.toString();

    const mismoDemandado
        = params.llaveProceso === llaveProceso
        && params.idProceso !== idProceso?.toString();
    return (
        <Link
            onClick={() => {
                setIsOpen(
                    false
                );
            }}
            href={href}
            style={
                mismoDemandado
                    ? {
                        backgroundColor:
                              'var(--secondary-container)',
                        color: 'var(--on-secondary-container)',
                    }
                    : {}
            }
            className={
                isActive
                    ? navbar.linkIsActive
                    : navbar.link
            }
        >
            <h1 className={typeface.title}>
                {sujetosProcesales}
            </h1>
        </Link>
    );
};
