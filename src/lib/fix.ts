import Day from 'dayjs';
import { prototype } from 'events';
import NewDayButton from '../components/nuevo-dia/nuevo-dia-button';
export function fixFechas (
    fecha: string | null | undefined
) {
    if ( fecha === null ) {
        return 'no hay contenido';
    }
    if ( fecha === undefined ) {
        return 'no se ha definido el contenido';
    }
    const date = Day(
        fecha
    );
    const months = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
    ];

    const month = months[ date.month() ];
    const dia = date.date();
    const ano = date.year();
    return dia + ' de ' + month + ' de ' + ano;
}
export function fixDemandado (
    sujetosProcesales: string
): string {
    const locateDemandado = sujetosProcesales.search(
        /(demandado|causante)+:(?:\s*?|'\s*?')/gi
    );

    if ( locateDemandado === -1 ) {
        return 'missing demandado';
    }
    const extractDemandado = sujetosProcesales
        .slice(
            locateDemandado + 10
        )
        .toLocaleLowerCase();

    const trimDemandado = extractDemandado.replace(
        /^\s+|\s+$/gm,
        ''
    );

    const splitDemandado = trimDemandado.split(
        ' '
    );

    const splitDemandadotoUnify = splitDemandado.map(
        (
            nombreOapellido, index
        ) => {
            if ( index >= 5 ) {
                return '';
            }

            if ( nombreOapellido === '|' ) {
                return '';
            }
            if ( nombreOapellido.includes(
                's.a.s'
            ) ) {
                return '';
            }
            if ( nombreOapellido.includes(
                'sas'
            ) ) {
                return '';
            }
            if ( nombreOapellido.includes(
                '(emplazado)'
            ) ) {
                return '';
            }
            return nombreOapellido.replace(
                /^./,
                (
                    str
                ) => {
                    return str.toUpperCase();
                }
            );
        }
    );

    const unifyDemandado = splitDemandadotoUnify.join(
        ' '
    );
    return unifyDemandado;
}



// Returns the ISO week of the date.
Date.prototype.getWeek = function () {
    var date = new Date(
        this.getTime()
    );
    date.setHours(
        0,
        0,
        0,
        0
    );
    // Thursday in current week decides the year.
    date.setDate(
        date.getDate() + 3 - ( date.getDay() + 6 ) % 7
    );
    // January 4 is always in week 1.
    var week1 = new Date(
        date.getFullYear(),
        0,
        4
    );
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(
        ( ( date.getTime() - week1.getTime() ) / 86400000
            - 3 + ( week1.getDay() + 6 ) % 7 ) / 7
    );
}



export const Hoy = () => {
    const date = Day();
}