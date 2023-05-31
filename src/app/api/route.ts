import clientPromise from '#@/lib/mongodb';
import { monDia } from '#@/types/therapy';
import { NextResponse, NextRequest } from 'next/server';
export async function GET () {
    const client = await clientPromise;
    if ( !client ) {
        throw new Error(
            'no hay cliente mongólico'
        );
    }
    const db = client.db(
        'terapia'
    );
    const diasCollection = ( await db
        .collection(
            'dias'
        )
        .find(
            {}
        )
        .toArray() ) as unknown as monDia[];
    const day = diasCollection.map(
        (
            dia
        ) => {
            return dia;
        }
    );
    return new NextResponse(
        JSON.stringify(
            day
        ),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    );
}
