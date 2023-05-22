import { WithId } from 'mongodb';

export interface intDemandado extends WithId<Document> {
    llaveProceso: string;
    sujetosProcesales: string;
    idProceso: number;
}

export interface monDemandado extends intDemandado {
    _id: string;
}
