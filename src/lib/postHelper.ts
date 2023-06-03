// Replace the uri string with your MongoDB deployment's connection string.
'use server';
import { intDia } from '#@/types/therapy';
import clientPromise from './mongodb';

export async function postDias(data: intDia[]) {
    const client = await clientPromise;

    try {
        const database = client.db('terapia');
        // Specifying a schema is optional, but it enables type hints on
        // finds and inserts
        const dias = database.collection<intDia>('dias');

        const result = await dias.insertMany(data, {
            ordered: true,
        });
        console.log(
            `${result.insertedCount} documents were inserted`
        );
    } finally {
        await client.close();
    }
}

export async function postDia(data: intDia) {
    const client = await clientPromise;

    try {
        const database = client.db('terapia');
        // Specifying a schema is optional, but it enables type hints on
        // finds and inserts
        const dias = database.collection<intDia>('dias');

        const result = await dias.insertOne(data);
        console.log(
            `${result.insertedId} documents were inserted`
        );
    } finally {
        await client.close();
    }
}
