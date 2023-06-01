import { WithId } from 'mongodb';

export interface intDia extends WithId<Document> {
    titulo: string;
    contenido: string;
    date: string;
    mes: string;
    semana: string;
    sufrimiento: Sufrimiento;
    urgencia: Urgencia;
    conductasProblema: ConductasProblema[];
    tareaSemana: string;
}
export interface monDia extends intDia {
    _id: string;
}

export interface ConductasProblema {
    name: string;
    hasDesire: boolean;
    queHice: string;
}

export interface Sufrimiento {
    emocional: number;
    fisico: number;
    alegría: number;
}

export interface Urgencia {
    abandonarTerapia: number;
    conductasRiesgo: number;
    suicidarme: number;
}
