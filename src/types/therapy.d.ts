
export interface intDia {
  semana: string;
  date: string;
  datetime: string;
  comentarios: string;
  Urgencia: intUrgencia;
  sufrimiento: intSufrimiento;
  CP: intConductasProblema;
}

export interface mongoDia extends intDia {
  _id: string;
}

export interface intConductasProblema {
  Sustancias?: intConductas;
  Autolesiones?: intConductas;

  Agreciones?: intConductas;
  NoHacer?: intConductas;
  PSR?: intConductas;
  Driving?: intConductas;
  Eating: intConductas;
}



export interface intConductas {
  bool: boolean;
  Cantidad?: string | undefined;
  Extra?: string | undefined;
}


export interface intUrgencia {
  Suicidarme: string;
  ConductasRiesgo: string;
  AbandonarTerapia: string;
}

export interface intSufrimiento {
  emocional: string;
  fisico: string;
  alegría: string;
}
