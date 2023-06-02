import clientPromise from '#@/lib/mongodb';
import {
    intDia 
} from '#@/types/therapy';
import {
    NextResponse, NextRequest 
} from 'next/server';
export async function GET(request: NextRequest) {
    const {
        searchParams 
    } = new URL(request.url);
    const client = await clientPromise;
    const db = client.db('terapia').collection('dias');
    const diasCollection = (await db
        .find({})
        .toArray()) as unknown as intDia[];
    if (diasCollection.length === 0) {
        throw new Error('no pudimos obtener los dias de mongo');
    }
    const date = searchParams.get('date');
    if (date) {
        const dias = diasCollection.filter((dia) => {
            return (
                dia.date.toLowerCase()
                === date.toLowerCase()
            );
        });
        if (dias.length === 0) {
            return new NextResponse(
                JSON.stringify(diasCollection),
                {
                    status: 200,
                    headers: {
                        'content-type': 'application/json',
                    },
                }
            );
        }
        return (
            new NextResponse(JSON.stringify(dias)),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                },
            }
        );
    }
    return new NextResponse(
        JSON.stringify(diasCollection),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    );
}

export async function POST(
    request: NextRequest,
    {
        params 
    }: { params: { date: string } }
) {
    const incomingRequest = await request.json();
    const client = await clientPromise;
    if (!client) {
        throw new Error('no hay cliente mongólico');
    }
    const db = client.db('terapia');
    const diasCollection = db.collection('dias');
    const outgoingRequest = await diasCollection.insertOne(incomingRequest);

    if (!outgoingRequest.acknowledged) {
        return new NextResponse(
            null,
            {
                status: 404,
            }
        );
    }
    return new NextResponse(
        JSON.stringify(outgoingRequest.insertedId
                + `${outgoingRequest.acknowledged}`),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    );
}
