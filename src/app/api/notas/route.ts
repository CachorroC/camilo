//^ External Dependencies
import clientPromise from '#@/lib/mongodb';
import { intNota, monNota } from '#@/types/notas';
import { NextRequest, NextResponse } from 'next/server';
import 'server-only';

//^ GET
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

    const notas = (await db
        .collection(
            'Notas'
        )
        .find(
            {}
        )
        .toArray()) as unknown as monNota[];
    if (!notas.length) {
        throw new Error(
            'no hay entradas en mongo'
        );
    }

    const pathname = searchParams.get(
        'pathname'
    );
    if (pathname) {
        const Notas = notas.find(
            (
                nota
            ) => {
                return nota.pathname.toString() === pathname;
            }
        );
        if (Notas === undefined) {
            const NN = notas.map(
                (
                    Nota
                ) => {
                    return Nota;
                }
            );
            return new NextResponse(
                JSON.stringify(
                    NN
                ),
                {
                    status: 200,
                    headers: {
                        'content-type': 'application/json',
                    },
                }
            );
        }

        return (
            new NextResponse(
                JSON.stringify(
                    Notas
                )
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
        const Notas = notas.filter(
            (
                nota
            ) => {
                return nota.llaveProceso === llaveProceso;
            }
        );
        return new NextResponse(
            JSON.stringify(
                Notas
            ),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                },
            }
        );
    }
    const Notas = notas.map(
        (
            Nota
        ) => {
            return Nota;
        }
    );
    return new NextResponse(
        JSON.stringify(
            Notas
        ),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    );
}
