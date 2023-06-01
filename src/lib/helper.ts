
import { cache } from 'react';
import clientPromise from './mongodb';
import 'server-only';
import { intDia } from '#@/types/therapy';
import {
    Document, ObjectId, OptionalId
} from 'mongodb';
import { NextResponse } from 'next/server';

export const getDias = cache(
    async () => {
        const client = await clientPromise;
        const db = client.db(
            'terapia'
        );
        const collection = db.collection(
            'dias'
        )
        const diasCollection = ( await collection.find(
            {}
        ).toArray() ) as unknown as intDia[]
        return diasCollection;
    }
);

export const getDia = cache(
    async (
        date: string
    ) => {
        const client = await clientPromise;
        const db = client.db(
            'terapia'
        );
        const collection = db.collection(
            'dias'
        )
        const diasCollection = ( await collection.find(
            {}
        ).toArray() ) as unknown as intDia[]

        const dias = diasCollection.filter(
            (
                withId, index, withIdArray
            ) => {
                return withId.date === date
            }
        )
        return dias;
    }
);

export const getDiabyId = cache(
    async (
        _id
    ) => {
        const client = await clientPromise;
        const db = client.db(
            'terapia'
        );
        const collection = db.collection(
            'dias'
        )
        const diasCollection = ( await collection.find(
            {}
        ).toArray() ) as unknown as intDia[]

        const dias = diasCollection.filter(
            (
                withId, index, withIdArray
            ) => {
                return withId._id.toString() === _id
            }
        )
        return dias;
    }
);

export async function postNuevoDia (
    data
) {
    'use server';
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
        data
    );
    if ( !outgoingRequest.acknowledged ) {
        alert(
            "error"
        )
    }
    return alert(
        JSON.stringify(
            outgoingRequest.insertedId
            + `/status: ${ outgoingRequest.acknowledged }`
        )
    )
}