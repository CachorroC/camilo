import DiaCard from '#@/components/dia-card';
import Modal from '#@/components/modal';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { monDia } from '#@/types/therapy';

export default async function Page (
    {
        params
    }: { params: { date: string } }
) {

    const date = params.date;
    const req = await fetch(
        `${ getBaseUrl() }/api?date=${ date }`
    )
    const dias = ( await req.json() ) as monDia[];

    return (
        <Modal>
            { dias.map(
                (
                    dia
                ) => {
                    return (
                        <DiaCard key={ dia._id } dia={ dia } />
                    )
                }
            ) }
        </Modal>
    )
}