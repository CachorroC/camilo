'use client';

import { useSearch } from '#@/app/search-context';
import { LinkCard } from './link';
import { monDemandado } from '../types/demandados';
import { monDia } from '#@/types/therapy';
import { fixFechas } from '#@/lib/fix';
import Link from 'next/link';
import navbar from '#@/styles/css/navbar.module.css';
import DiaCard from './dia-card';
import layout from '#@/styles/css/layout.module.css';
import {
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    PromiseLikeOfReactNode,
    JSX,
} from 'react';
import { Card } from './card';
import card from '#@/styles/css/card.module.css';
import box from '#@/styles/css/box.module.css';
export function SemanaRow(
    { semana }: { semana: string }
) {
    return <sub className={card.date}>{semana}</sub>;
}

export default function SearchOutputList(
    {
        path,
        dias,
    }: {
    path: string;
    dias: monDia[];
}
) {
    const [ search ] = useSearch();
    const rows: JSX.Element[] = [];
    const semanaRow: JSX.Element[] = [];
    let lastCategory: string | null = null;
    const sortire = dias
        .sort(
            (
                a, b
            ) => {
                let x = a.semana.toLowerCase();
                let y = b.semana.toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            }
        )
        .sort(
            (
                c, d
            ) => {
                let e = c.date.toLowerCase();
                let f = d.date.toLowerCase();
                if (e < f) {
                    return -1;
                }
                if (e > f) {
                    return 1;
                }
                return 0;
            }
        );

    sortire.forEach(
        (
            dia, index, array
        ) => {
            const ffecha = fixFechas(
                dia.date
            );
            if (
                ffecha
                    .toLowerCase()
                    .indexOf(
                        search.toLowerCase()
                    ) === -1
            ) {
                return;
            }
            if (dia.semana !== lastCategory) {
                rows.push(
                    <SemanaRow
                        semana={dia.semana}
                        key={dia.semana}
                    />
                );
            }
            rows.push(
                <Card
                    dia={dia}
                    key={dia._id}
                    index={index}
                    path={'/dias'}
                    array={array}
                >
                    <sub className={card.date}>
                        {fixFechas(
                            dia.date
                        )}
                    </sub>
                </Card>
            );
            lastCategory = dia.semana;
        }
    );
    return <>{rows}</>;
}
