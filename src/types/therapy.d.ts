import { WithId } from 'mongodb';

export interface monDia extends WithId<Document> {
    date: string;
    titulo: string;
    sufrimiento: {
        emocional: number;
        fisico: number;
        alegría: number;
    };
    urgencia: {
        abandonarTerapia: number;
        conductasRiesgo: number;
        suicidarme: number;
    };
    conductasProblema: {
        name: string;
        hasDesire: boolean;
        queHice: string;
    }[];
    contenido?: string | null | undefined;
    semana?: string | null | undefined;
    mes: string | null | undefined;

    año: string | null | undefined;
    dia: number | null | undefined;
    diaSemana?: number | null | undefined;
    tareaSemana?: string | null | undefined;
}

export interface intDia extends monDia {
    _id: string;
}
