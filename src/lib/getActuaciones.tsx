import { intActuacion, intConsultaActuaciones } from "#@/types/procesos";
import card from "#@/styles/css/card.module.css";
import { fixFechas } from "./fix";
import clientPromise from "./mongodb";
import { monDemandado } from "#@/types/demandados";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export async function getActuacionFecha(
  { idProceso }: { idProceso: number }
) {
  const req = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`,
    { next: { revalidate: 43200 } }
  );
  if (!req.ok) {
    return "request was not ok";
  }
  const res = (await req.json()) as intConsultaActuaciones;
  if (!res.actuaciones) {
    return "no hay actuaciones";
  }
  const ff = fixFechas(
    res.actuaciones[0].fechaActuacion
  );
  return ff;
}
export async function getActuacion(
  { idProceso }: { idProceso: number }
) {
  const req = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`,
    { next: { revalidate: 43200 } }
  );
  if (!req.ok) {
    return "request was not ok";
  }
  const res = (await req.json()) as intConsultaActuaciones;
  if (!res.actuaciones) {
    return "no hay actuaciones";
  }
  return res.actuaciones[0];
}
export async function getAllLastActuaciones() {
  const acts: intActuacion[] = [];

  const client = await clientPromise;
  if (!client) {
    throw new Error(
      "no hay cliente mongólico"
    );
  }
  const db = client.db(
    "RyS"
  );
  const procesos = (await db
    .collection(
      "Procesos"
    )
    .find(
      {}
    )
    .toArray()) as unknown as monDemandado[];
  procesos.forEach(
    (
      proceso, index, prcs
    ) => {
      setTimeout(
        async () => {
          const actuacion = await getActuaciones(
            {
              idProceso: proceso.idProceso,
            }
          );
          acts.push(
            actuacion[0]
          );

          return actuacion;
        },
        index * 1000
      );
    }
  );
  return acts;
}

export async function getActuaciones(
  { idProceso }: { idProceso: number }
) {
  const req = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`,
    { next: { revalidate: 43200 } }
  );
  if (!req.ok) {
    throw new Error(
      "no pudimos contactar las actuaciones de este rpoceso"
    );
  }
  const res = (await req.json()) as intConsultaActuaciones;
  const headers = req.headers;
  if (!res.actuaciones) {
    throw new Error(
      "no hay actuaciones"
    );
  }
  const actuaciones = res.actuaciones;
  if (actuaciones.length === 0) {
    throw new Error(
      "no hay actuaciones disponibles"
    );
  }
  return actuaciones;
}

export async function ActuacionesDateElement(
  {
    idProceso,
  }: {
  idProceso: number;
}
) {
  const req = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`,
    { next: { revalidate: 43200 } }
  );

  if (!req.ok) {
    return <sub className={card.date}> {JSON.stringify(
      req
    )} </sub>;
  }
  const res = (await req.json()) as intConsultaActuaciones;
  if (!res.actuaciones) {
    return <sub className={card.date}>{JSON.stringify(
      res
    )}</sub>;
  }
  const headers = req.headers;
  const actuaciones = res.actuaciones;
  if (actuaciones.length === 0) {
    return <sub className={card.date}>{JSON.stringify(
      actuaciones
    )}</sub>;
  }
  const actuacion = actuaciones[0];
  if (!actuacion.fechaActuacion) {
    return <sub className={card.date}>{JSON.stringify(
      actuacion
    )} </sub>;
  }

  const fechaFixed = fixFechas(
    actuacion.fechaActuacion
  );
  return <sub className={card.date}> {fechaFixed} </sub>;
}
