import { intConsultaActuaciones, intActuacion } from "#@/types/procesos";
import { fixFechas } from "#@/lib/fix";
import card from "#@/styles/css/card.module.css";
import { Suspense } from "react";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import "server-only";
import { headers } from "next/headers";

async function getActuaciones(
  { id }: { id: number }
) {
  const header = headers();
  const req = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${id}`,
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

  const fixed: intActuacion = {
    idRegActuacion: actuacion.idRegActuacion,
    llaveProceso: actuacion.llaveProceso,
    consActuacion: actuacion.consActuacion,
    fechaActuacion: fixFechas(
      actuacion.fechaActuacion
    ),
    actuacion: actuacion.actuacion,
    anotacion: actuacion.anotacion,
    fechaInicial: fixFechas(
      actuacion.fechaInicial
    ),
    fechaFinal: fixFechas(
      actuacion.fechaFinal
    ),
    fechaRegistro: fixFechas(
      actuacion.fechaRegistro
    ),
    codRegla: actuacion.codRegla,
    conDocumentos: actuacion.conDocumentos,
    cant: actuacion.cant,
  };
  console.log(
    fixed
  );
  return <sub className={card.date}>{fixed.fechaActuacion}</sub>;
}
export async function Fecha(
  {
    idProceso,
    data,
  }: {
  idProceso?: number;
  data?: string;
}
) {
  if (data) {
    return <sub className={card.date}>{data}</sub>;
  }
  if (idProceso) {
    const act = await getActuaciones(
      { id: idProceso }
    );
    return act;
  }
  return <p>no nos diste nada </p>;
}
