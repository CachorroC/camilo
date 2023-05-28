import { Card } from '#@/components/card';
import { fixFechas } from '#@/lib/fix';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { monDia } from '#@/types/therapy';
import layout from '#@/styles/css/layout.module.css';

export default async function Page () {
    const req = await fetch(
        `${ getBaseUrl() }/api/dias/get`,
        {
            cache: 'no-store',
        }
    );
    const dias = ( await req.json() ) as monDia[];
    return (
        <div className={ layout.main }>
            <h1>Terapia Conductal Dialéctica</h1>
            { dias.map(
                (
                    dia, i, da
                ) => {
                    return (
                        <Card
                            key={ dia._id }
                            index={ i }
                            path={ '/TCD' }
                            array={ da }
                            dia={ dia }
                        >
                            <sub>{ fixFechas(
                                dia.date
                            ) }</sub>
                        </Card>
                    );
                }
            ) }
        </div>
    );
}
