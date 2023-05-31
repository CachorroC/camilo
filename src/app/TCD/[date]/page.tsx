import { Card } from '#@/components/card';
import { fixFechas } from '#@/lib/fix';
import layout from '#@/styles/css/layout.module.css';
import card from '#@/styles/css/card.module.css';
import { monDia } from '#@/types/therapy';
import { addRequestMeta } from 'next/dist/server/request-meta';
import box from '#@/styles/css/box.module.css';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import DiaCard from '#@/components/dia-card';
export default async function Page(
    {
        params,
    }: {
    params: {
        date: string;
    };
}
) {
    const req = await fetch(
        `${getBaseUrl()}/api/dias/get?date=${params.date}`
    );
    const dias = (await req.json()) as monDia[];
    return (
        <>
            {dias.map(
                (
                    dia, index, ds
                ) => {
                    return (
                        <>
                            <DiaCard
                                dia={dia}
                                key={dia._id}
                            />
                            <Card
                                key={dia._id}
                                index={index}
                                path={'/TCD'}
                                array={ds}
                                dia={dia}
                            >
                                <sub className={card.date}>
                                    {fixFechas(
                                        params.date
                                    )}
                                </sub>
                                {dia.conductasProblema.map(
                                    (
                                        conducta, i
                                    ) => {
                                        if (!conducta.isDone) {
                                            return null;
                                        }
                                        return (
                                            <div
                                                key={i}
                                                className={
                                                    box.container
                                                }
                                            >
                                                <h1>
                                                    {
                                                        conducta.name
                                                    }
                                                </h1>
                                                <div
                                                    className={
                                                        card.range
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            card.innerRange
                                                        }
                                                        style={{
                                                            width: conducta.cantidad,
                                                        }}
                                                    ></div>
                                                </div>
                                                <p>
                                                    {
                                                        conducta.extra
                                                    }
                                                </p>
                                                <p>
                                                    {
                                                        conducta.cantidad
                                                    }
                                                </p>
                                            </div>
                                        );
                                    }
                                )}
                            </Card>
                        </>
                    );
                }
            )}
        </>
    );
}
