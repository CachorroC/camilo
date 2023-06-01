import DiaCard from '#@/components/dia-card';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { monDia } from '#@/types/therapy';
import box from '#@/styles/css/box.module.css';

export default async function Page (
    { params }: { params: { date: string } }
) {
    const date = params.date;
    const req = await fetch(
        `${ getBaseUrl() }/api?date=${ params.date }`
    )
    const dias = ( await req.json() ) as monDia[]
    return (
        <div className={ box.container }>
            { dias.map(
                (
                    dia
                ) => {
                    return (
                        <DiaCard key={ dia._id } dia={ dia } />
                    )
                }
            ) }
        </div>
    )
}
