import { WithId } from 'mongodb';

export interface intNota {
    titulo: string;
    contenido: string;

    fecha: string;
    pathname: string;
    completada: boolean;
    idProceso?: number | undefined | unknown;
    llaveProceso?: string | undefined | unknown;
}

export interface monNota extends intNota {
    _id: string;
}
