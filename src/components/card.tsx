'use client';
import Link from 'next/link';
import card from '#@/styles/css/card.module.css';

import type {
    Route 
} from 'next';
import {
    useParams,
    usePathname,
    useSelectedLayoutSegment,
    useSelectedLayoutSegments,
} from 'next/navigation';
import {
    ReactNode, useState 
} from 'react';
import {
    monDia 
} from '#@/types/therapy';
import {
    fixFechas 
} from '#@/lib/fix';
export const Card = ({
    children,
    index,
    path,
    array,
    dia,
}: {
    children: ReactNode;
    index: number;
    path: string;
    array: string[] | monDia[] | any[];
    dia: monDia;
}) => {
    const pathname = usePathname();
    const params = useParams();
    const selectedLayoutSegment
        = useSelectedLayoutSegment();
    const selectedLayoutSegments
        = useSelectedLayoutSegments();
    const llave = params.llaveProceso
        ? params.llaveProceso
        : '';
    const id = params.idProceso
        ? params.idProceso
        : '';
    const date = new Date(dia.date);

    const href = `${path}/${dia.date}` as Route;
    const isActive
        = pathname === href
        || pathname === path + '/' + dia.date;

    return (
        <div
            className={card.layout}
            key={dia._id}
        >
            <div className={card.top}>
                <sub className={card.sub}>{`${
                    index + 1
                } - ${array.length}`}</sub>
                <h2 className={card.title}>{dia.date} </h2>
                <h2 className={card.title}>{dia.date}</h2>
                <h2 className={card.title}>{dia.semana}</h2>
            </div>
            <p className={card.content}>{dia.contenido}</p>
            <div className={card.bottom}>
                {children}

                <Link
                    href={href}
                    className={
                        isActive
                            ? card.linkIsActive
                            : card.link
                    }
                >
                    <span
                        className={`material-symbols-outlined ${card.icon}`}
                    >
                        input_circle
                    </span>
                </Link>
            </div>
        </div>
    );
};
