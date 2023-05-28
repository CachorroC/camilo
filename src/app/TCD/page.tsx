import { Card } from '#@/components/card';
import { fixFechas } from '#@/lib/fix';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { monDia } from '#@/types/therapy';
import layout from '#@/styles/css/layout.module.css';
import SearchOutputList from '#@/components/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/SearchProcesosOutputSkeleton';
import { Suspense } from 'react';
import { headers } from 'next/headers';

export default async function Page () {
    const headersList = headers();
    const uri = headersList.get( "Host" );

    const req = await fetch(
        `${ uri ? `https://${uri}` : getBaseUrl() }/api/dias/get`,

    );
    const dias = ( await req.json() ) as monDia[];
    return (
        <Suspense fallback={ <SearchOutputListSkeleton /> }>
            <SearchOutputList
                path={ '/dias' }
                dias={ dias }
            />
        </Suspense>
    );
}
