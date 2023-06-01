import { Card } from '#@/components/card';
import { fixFechas } from '#@/lib/fix';
import layout from '#@/styles/css/layout.module.css';
import card from '#@/styles/css/card.module.css';
import { monDia } from '#@/types/therapy';
import { addRequestMeta } from 'next/dist/server/request-meta';
import box from '#@/styles/css/box.module.css';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import DiaCard from '#@/components/dia-card';
export default async function Page (
    {params,}: {
        params: {
            date: string;
        };
    }
) {
    const req = await fetch(
        `${ getBaseUrl() }/api/${ params.date }`
    );
    const dias = ( await req.json() ) as monDia[];
    return (
        <>
            { dias.map(
                (
                    dia, index, ds
                ) => {
                    return (
                        <>
                            <DiaCard
                                dia={ dia }
                                key={ dia._id }
                            />
                            <Card
                                key={ dia._id }
                                index={ index }
                                path={ '/TCD' }
                                array={ ds }
                                dia={ dia }
                            >
                                <sub className={ card.date }>
                                    { fixFechas(
                                        params.date
                                    ) }
                                </sub>
                                { dia.conductasProblema.map(
                                    (
                                        conducta, i
                                    ) => {
                                        if ( !conducta.hasDesire ) {
                                            return null;
                                        }
                                        return (
                                            <div
                                                key={ conducta.name }
                                                className={
                                                    box.container
                                                }
                                            >
                                                <h1>
                                                    {
                                                        conducta.name
                                                    }
                                                </h1>


                                                <p>
                                                    {
                                                        conducta.queHice
                                                    }
                                                </p>
                                            </div>
                                        );
                                    }
                                ) }
                            </Card>
                        </>
                    );
                }
            ) }
        </>
    );
}
