import clientPromise from '#@/lib/mongodb';
import form from '#@/styles/css/form.module.css';

export default function Form() {
    async function addItem(
        data
    ) {
        'use server';

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
        const outgoingRequest =
            await diasCollection.insertOne(
                data
            );

        if (!outgoingRequest.acknowledged) {
            return alert(
                'error'
            );
        }
        return alert(
            'success'
        );
    }

    return (
        <form action={addItem}>
            <input
                type='text'
                name='name'
            />
            <input
                type='image'
                formAction={addItem}
            />
            <button
                type='submit'
                className={form.submit}
            >
                <span className='material-symbols-outlined'>
                    submit
                </span>
            </button>
        </form>
    );
}
