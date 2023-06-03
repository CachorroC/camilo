import clientPromise from '#@/lib/mongodb';
import { intDia } from '#@/types/therapy';
import { NextResponse, NextRequest } from 'next/server';
export async function GET(
    request: NextRequest,
    { params }: { params: { date: string } }
) {
    const { searchParams } = new URL(request.url);
    const delay = searchParams.get('delay');

    if (delay) {
        await new Promise((resolve) => {
            return setTimeout(resolve, Number(delay));
        });
    }
    const client = await clientPromise;
    if (!client) {
        throw new Error('no hay cliente mongólico');
    }
    const db = client.db('terapia');
    const diasCollection = (await db
        .collection('dias')
        .find({})
        .toArray()) as unknown as intDia[];
    const date = params.date;
    if (date) {
        const day = diasCollection.find((dia) => {
            return dia.date === date;
        });
        return new NextResponse(JSON.stringify(day), {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        });
    }
    const day = diasCollection.map((dia) => {
        return dia;
    });
    return new NextResponse(JSON.stringify(day), {
        status: 200,
        headers: {
            'content-type': 'application/json',
        },
    });
}

export async function POST(
    request: NextRequest,
    { params }: { params: { date: string } }
) {
    const { searchParams } = new URL(request.url);
    const incomingRequest = await request.json();
    const formData = request
        .formData()
        .then((fullfilled) => {
            return fullfilled;
        });
    const client = await clientPromise;
    if (!client) {
        throw new Error('no hay cliente mongólico');
    }
    const db = client.db('terapia');
    const diasCollection = db.collection('dias');
    const outgoingRequest = await diasCollection.insertOne(
        incomingRequest
    );

    if (!outgoingRequest.acknowledged) {
        return new NextResponse(null, {
            status: 404,
        });
    }
    return new NextResponse(
        JSON.stringify(
            outgoingRequest.insertedId +
                `${outgoingRequest.acknowledged}`
        ),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    );
}
