import clientPromise from '#@/lib/mongodb';
import { monDia } from '#@/types/therapy';
import { NextResponse, NextRequest } from 'next/server';
export async function GET (
    request: NextRequest,
) {
    const { searchParams } = new URL(
        request.url
    )
    const client = await clientPromise;
    if ( !client ) {
        throw new Error(
            'no hay cliente mongólico'
        );
    }
    const db = client.db(
        'terapia'
    );
    const diasCollection = await db
        .collection(
            'dias'
        )
        .find(
            {}
        )
        .toArray();

    const date = searchParams.get(
        'date'
    );
    if ( date ) {
        const dias = diasCollection.filter(
            (
                dia
            ) => {
                return dia.date === date;
            }
        );
        return (
            new NextResponse(
                JSON.stringify(
                    dias
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
    return new NextResponse(
        JSON.stringify(
            diasCollection
        ),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    );
}


export async function POST (
    request: NextRequest,
    { params }: { params: { date: string } }
) {
    const { searchParams } = new URL(
        request.url
    );
    const body = request.body;
    const incomingRequest = await request.json();
    const formData = request
        .formData()
        .then(
            (
                fullfilled
            ) => {
                return fullfilled;
            }
        );
    const client = await clientPromise;
    if ( !client ) {
        throw new Error(
            'no hay cliente mongólico'
        );
    }
    const db = client.db(
        'terapia'
    );
    const diasCollection = db.collection(
        'dias'
    );
    const outgoingRequest = await diasCollection.insertOne(
        incomingRequest
    );

    if ( !outgoingRequest.acknowledged ) {
        return new NextResponse(
            null,
            {
                status: 404,
            }
        );
    }
    return new NextResponse(
        JSON.stringify(
            outgoingRequest.insertedId +
            `${ outgoingRequest.acknowledged }`
        ),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    );
}
