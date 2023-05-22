import clientPromise from '#@/lib/mongodb';
import { monDemandado } from '#@/types/demandados';
import { NextRequest, NextResponse } from 'next/server';
import 'server-only';

export async function GET(
    req: NextRequest
) {
    const { searchParams } = new URL(
        req.url
    );
    const delay = searchParams.get(
        'delay'
    );

    if (delay) {
        await new Promise(
            (
                resolve
            ) => {
                return setTimeout(
                    resolve,
                    Number(
                        delay
                    )
                );
            }
        );
    }
    const client = await clientPromise;
    if (!client) {
        throw new Error(
            'no hay cliente mongólico'
        );
    }
    const db = client.db(
        'RyS'
    );
    const procesos = (await db
        .collection(
            'Procesos'
        )
        .find(
            {}
        )
        .toArray()) as unknown as monDemandado[];
    if (!procesos.length) {
        throw new Error(
            'no hay entradas en mongo'
        );
    }
    const idProceso = searchParams.get(
        'idProceso'
    );

    if (idProceso) {
        const Procesos = procesos.find(
            (
                proceso
            ) => {
                return (
                    proceso.idProceso.toString() === idProceso
                );
            }
        );
        if (Procesos === undefined) {
            throw new Error(
                'undefined'
            );
        }

        return new NextResponse(
            JSON.stringify(
                Procesos
            ),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                },
            }
        );
    }

    const llaveProceso = searchParams.get(
        'llaveProceso'
    );

    if (llaveProceso) {
        const Procesos = procesos.filter(
            (
                proceso
            ) => {
                return proceso.llaveProceso === llaveProceso;
            }
        );

        return new NextResponse(
            JSON.stringify(
                Procesos
            ),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                },
            }
        );
    }

    const Procesos = procesos.map(
        (
            Proceso
        ) => {
            return Proceso;
        }
    );
    return new NextResponse(
        JSON.stringify(
            Procesos
        ),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    );
}
