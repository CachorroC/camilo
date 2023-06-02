'use server';
import {
    getBaseUrl 
} from '#@/lib/getBaseUrl';
import {
    intDia 
} from '#@/types/therapy';

export async function onSubmit(data: intDia) {
    alert(JSON.stringify(data));
    const postNuevoDia = await fetch(
        `${getBaseUrl()}/api/${data.date}`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    ).then((fullfiled) => {
        return fullfiled;
    });
    const responsePostNuevoDia = await postNuevoDia.json();
    alert(responsePostNuevoDia);
    return responsePostNuevoDia;
}
