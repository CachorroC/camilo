import { fixFechas } from '#@/lib/fix';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { Suspense } from 'react';
import card from '#@/styles/css/card.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import Link from 'next/link';
import { intDia } from '#@/types/therapy';
import Linker from '#@/components/link/active-link';

export default async function Page () {
    const req = await fetch(
        `${ getBaseUrl() }/api`
    );
    const dias = ( await req.json() ) as intDia[];
    return (
        <>
            <Linker href='/NuevoDia'>
                <span className='material-symbols-outlined'>
                    add
                </span>
            </Linker>
            <Suspense fallback={ <>Loading ...</> }>
                { dias.map(
                    (
                        dia, i, ds
                    ) => {
                        return (
                            <Linker
                                key={ i }
                                href={ `/dias/${ dia.date }` }
                            >
                                <span className='material-symbols-outlined'>
                                    open_in_new
                                </span>
                                <h1 className={ typeface.title }>
                                    { fixFechas(
                                        dia.date
                                    ) }
                                </h1>
                            </Linker>
                        );
                    }
                ) }
            </Suspense>
        </>
    );
}
