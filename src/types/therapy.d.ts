export interface intDia {
  comentarios: string;
  datetime: string;
  date: string;
  semana: string;
  sufrimiento: Sufrimiento;
  urgencia: Urgencia;
  conductasProblema: ConductasProblema[];
}
export interface monDia extends intDia {
  _id: string;
}

export interface ConductasProblema {
  name: string;
  isDone: boolean;
  cantidad: string;
  extra: string;
}

export interface Sufrimiento {
  emocional: number;
  fisico: number;
  alegría: number;
}

export interface Urgencia {
  abandonarTerapia: number;
  conductasRiesgo: number;
  suicidarme: number
}
