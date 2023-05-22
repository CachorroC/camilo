import DiaCard from '#@/components/dia-card';
import { fixFechas } from '#@/lib/fix';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { monDia } from '#@/types/therapy';

export default async function Page(
    {
        params,
    }: {
    params: { date: string };
}
) {
    const req = await fetch(
        `${getBaseUrl()}/api/dias/get?date=${params.date}`,
        {
            cache: 'no-store',
        }
    );
    const dias = (await req.json()) as monDia[];
    return (
        <p>
            <p>{params.date}</p>
            {dias.map(
                (
                    dia, i, da
                ) => {
                    return (
                        <DiaCard
                            dia={dia}
                            key={dia._id}
                        />
                    );
                }
            )}
        </p>
    );
}
