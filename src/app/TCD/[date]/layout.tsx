import { Card } from '#@/components/card';
import { fixFechas } from '#@/lib/fix';
import layout from '#@/styles/css/layout.module.css';
import { ReactNode } from 'react';
import card from '#@/styles/css/card.module.css';

export default async function Layout (
    { params, children }: {
        params: {
            date: string
        },
        children: ReactNode,
    }
) {
    const req = await fetch(
        `https://camilo.suarez-ramirez.com/api/dias/get?date=${ params.date }`
    )

    const dia = await req.json();
    return (
        <div className={ layout.body }>
            <div className={ layout.name }>
                <Card index={ 0 } path={ '/TCD' } array={ [] } dia={ dia }>
                    <sub className={ card.date }>{ fixFechas(
                        params.date
                    ) }</sub>
                </Card>
            </div>

            <div className={ layout.main }>
                { children }
            </div>
        </div>
    )
}