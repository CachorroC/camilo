import {
    NextRequest, NextResponse 
} from 'next/server';
import clientPromise from '#@/lib/mongodb';

export async function POST(request: NextRequest) {
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
