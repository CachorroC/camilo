import { DiaCard } from '#@/components/dia-card';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import box from '#@/styles/css/box.module.css';
import { getDia } from '../../../lib/helper';

export default async function Page (
    {
        params,
    }: {
        params: { date: string };
    }
) {
    const date = params.date;
    const dias = await getDia(
        date
    );
    return (
        <>
            { dias.map(
                (
                    dia
                ) => {
                    return (
                        <DiaCard
                            key={ dia._id }
                            dia={ dia }
                        />
                    );
                }
            ) }
        </>
    );
}
