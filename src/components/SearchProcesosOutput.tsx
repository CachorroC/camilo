"use client";

import { useSearch } from "#@/app/search-context";
import { LinkCard } from "./link";
import { monDemandado } from "../types/demandados";

export default function SearchOutputList(
  {
    path,
    procesos,
  }: {
  path: string;
  procesos: monDemandado[];
}
) {
  const [ search ] = useSearch();
  const rows: any[] = [];
  procesos.forEach(
    (
      proceso, index, array
    ) => {
      if (
        proceso.sujetosProcesales.toLowerCase().indexOf(
          search.toLowerCase()
        ) ===
      -1
      ) {
        return;
      }
      rows.push(
        <LinkCard
          key={proceso.idProceso}
          path={path}
          llaveProceso={proceso.llaveProceso}
          sujetosProcesales={proceso.sujetosProcesales}
        />
      );
    }
  );

  return (
    <>
      <LinkCard path={"/Procesos"} sujetosProcesales={"Demandados"} />
      {rows}
    </>
  );
}
