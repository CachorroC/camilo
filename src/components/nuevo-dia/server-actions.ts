'use server';
import clientPromise from '#@/lib/mongodb';
export async function onSubmit(
    data
) {
    const newData = {
        ...data,
        año: new Date().getFullYear(),
        mes: new Date().getMonth(),
        dia: new Date().getDate(),
        diaSemana: new Date().getDay(),
    };
}

export async function addItem(
    data
) {
    alert(
        JSON.stringify(
            data
        )
    );
    const client = await clientPromise;
    if (!client) {
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

    if (!outgoingRequest.acknowledged) {
        return alert(
            'error'
        );
    }
    /*  revalidatePath(
       `/product/${ id }`
   ) */ return alert(
        'success'
    );
}
