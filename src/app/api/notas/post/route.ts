import clientPromise from '#@/lib/mongodb';
import { intNota } from '#@/types/notas';
import {
    NextRequest, NextResponse 
} from 'next/server';

//^ POST
export async function POST(
    req: NextRequest
) {
    const incomingRequest = (await req.json()) as intNota;
    console.log(
        incomingRequest
    );
    const client = await clientPromise;
    if (!client) {
        throw new Error(
            'no hay cliente mongólico'
        );
    }
    const db = client.db(
        'RyS'
    );
    const procesos = db.collection(
        'Notas'
    );

    const outgoingRequest = await procesos.insertOne(
        incomingRequest
    );
    if (!outgoingRequest.acknowledged) {
        return new NextResponse(
            null,
            {status: 404,}
        );
    }
    return new NextResponse(
        JSON.stringify(
            outgoingRequest.insertedId
                + `${outgoingRequest.acknowledged}`
        ),
        {
            status: 200,
            headers: {'content-type': 'application/json',},
        }
    );
}
