"use client";

import { useSearch } from "#@/app/search-context";
import { LinkCard } from "./link";
import { monDemandado } from "../types/demandados";
import { monDia } from '#@/types/therapy';
import { fixFechas } from '#@/lib/fix';
import Link from 'next/link';
import navbar from '#@/styles/css/navbar.module.css';
export function SemanaRow (
  { semana }: { semana: string }
) {
  return (
    <tr>
      <th colSpan={ 2 }>
        { semana }
      </th>
    </tr>
  );
}

export function DiaRow (
  { dia }: { dia: monDia }
) {
  const name = fixFechas(
    dia.date
  )
  return (
    <Link key={ dia._id } className={ navbar.link } href={ `/dias/${ dia.datetime }` }>
      <td>{ name }</td>
    </Link>
  );
}

export default function SearchOutputList (
  {
    path,
    dias,
  }: {
    path: string;
    dias: monDia[];
  }
) {
  const [ search ] = useSearch();
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;

  dias.forEach(
    (
      dia, index, array
    ) => {
      const ffecha = fixFechas(
        dia.date
      )
      if (
        ffecha.toLowerCase().indexOf(
          search.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if ( dia.semana !== lastCategory ) {
        rows.push(
          <SemanaRow
            semana={ dia.semana }
            key={ dia.semana } />
        );
      }
      rows.push(
        <DiaRow
          dia={ dia }
          key={ dia._id } />
      );
      lastCategory = dia.semana;
    }
  );

  return (
    <>
      <LinkCard path={ "/dias" } sujetosProcesales={ "dias" } />
      { rows }
    </>
  );
}
