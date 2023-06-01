'use client';
import { useSearch } from '#@/app/search-context';
import { fixFechas } from '#@/lib/fix';
import { monDia } from '#@/types/therapy';

export function SemanaRow(
    { semana }: { semana: string }
) {
    return (
        <tr>
            <th colSpan={2}>{semana}</th>
        </tr>
    );
}

export function DiaRow(
    { dia }: { dia: monDia }
) {
    const name = fixFechas(
        dia.date
    );
    return (
        <tr>
            <td>{name}</td>
            <td>{dia._id}</td>
        </tr>
    );
}

export default function CalendarTable(
    {dias,}: {
    dias: monDia[];
}
) {
    const [ search ] = useSearch();
    const rows: JSX.Element[] = [];
    let lastCategory: string | null = null;

    dias.forEach(
        (
            dia
        ) => {
            const ffecha = fixFechas(
                dia.date
            );

            if (
                ffecha
                    .toLowerCase()
                    .indexOf(
                        search.toLowerCase()
                    ) === -1
            ) {
                return;
            }
            if (dia.semana !== lastCategory) {
                rows.push(
                    <SemanaRow
                        semana={dia.semana}
                        key={dia.semana}
                    />
                );
            }
            rows.push(
                <DiaRow
                    dia={dia}
                    key={dia._id}
                />
            );
            lastCategory = dia.semana;
        }
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
