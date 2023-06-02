import {
    fixFechas
} from '#@/lib/fix';
import {
    getBaseUrl
} from '#@/lib/getBaseUrl';
import {
    Suspense
} from 'react';
import card from '#@/styles/css/card.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import Link from 'next/link';
import { intDia } from '#@/types/therapy';

export default async function Page() {
    const req = await fetch(`${getBaseUrl()}/api`);
    const dias = (await req.json()) as intDia[];
    return (
        <>
            <Suspense fallback={<>Loading ...</>}>
                {dias.map((
                    dia, i, ds
                ) => {
                    return (
                        <div
                            className={card.layout}
                            key={dia._id.toString()}
                        >
                            <h1 className={typeface.title}>
                                {fixFechas(dia.date)}
                            </h1>
                            <Link
                                href={`/dias/${dia.date}`}
                            >
                                <span className='material-symbols-outlined'>
                                    open_in_new
                                </span>
                            </Link>
                        </div>
                    );
                })}
            </Suspense>
        </>
    );
}
