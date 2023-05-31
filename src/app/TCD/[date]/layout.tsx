import { Card } from '#@/components/card';
import { fixFechas } from '#@/lib/fix';
import layout from '#@/styles/css/layout.module.css';
import { ReactNode } from 'react';
import card from '#@/styles/css/card.module.css';
import { monDia } from '#@/types/therapy';

export default function Layout(
    props: {
    children: ReactNode;
    dashboard: ReactNode;
    params: {
        date: string;
    };
}
) {
    return (
        <>
            <div className={layout.name}>
                <h1>{props.params.date}</h1>
            </div>

            <div className={layout.main}>
                {props.children}
            </div>
            <div className={layout.main}>
                {props.dashboard}
            </div>
        </>
    );
}
