import { Card } from '#@/components/card';
import { fixFechas } from '#@/lib/fix';
import layout from '#@/styles/css/layout.module.css';
import { ReactNode } from 'react';
import card from '#@/styles/css/card.module.css';
import { monDia } from '#@/types/therapy';

export default function Layout(
    {
        params,
        children,
    }: {
    params: {
        date: string;
    };
    children: ReactNode;
}
) {
    return (
        <>
            <div className={layout.name}>
                <h1>{params.date}</h1>
            </div>

            <div className={layout.main}>{children}</div>
        </>
    );
}
