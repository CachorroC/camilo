import { Card } from '#@/components/card';
import { fixFechas } from '#@/lib/fix';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { monDia } from '#@/types/therapy';
import layout from '#@/styles/css/layout.module.css';
import { Suspense } from 'react';
import { headers } from 'next/headers';
import card from '#@/styles/css/card.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import Link from 'next/link';
import Calendar from '#@/app/TCD/calendar';

export default async function Page () {
    const headersList = headers();
    const uri = headersList.get(
        "Host"
    );

    const req = await fetch(
        `${ getBaseUrl() }/api`,

    );
    const dias = ( await req.json() ) as monDia[];
    return (
        <div className={ layout.body }>
            <div className={ layout.name }>
                <Calendar />
            </div>
            <Suspense fallback={ <>Loading ...</> }>
                { dias.map(
                    (
                        dia, i, ds
                    ) => {
                        return (
                            <div className={ card.layout } key={ dia._id }>
                                <h1 className={ typeface.title }>{ fixFechas(
                                    dia.date
                                ) }</h1>
                                <Link href={ `/TCD/${ dia.date }` }>
                                    <span className='material-symbols-outlined'>open_in_new</span>
                                </Link>
                            </div>
                        )
                    }
                ) }
            </Suspense>
        </div>
    );
}
