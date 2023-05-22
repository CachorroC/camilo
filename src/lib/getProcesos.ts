import {
    intConsultaNumeroRadicacion,
    intProceso,
} from '#@/types/procesos';
import { fixFechas, fixDemandado } from '#@/lib/fix';
import clientPromise from '#@/lib/mongodb';
import 'server-only';
import { monDemandado } from '#@/types/demandados';

const rows: unknown[] = [];

export async function getProcesos() {
    const req = await fetch(
        'http://localhost:3000/api/procesos',
        {
            cache: 'no-store',
        }
    );
    if (!req.ok) {
        throw new Error(
            'no pudimos comunicarnos con /api/procesos, este error proviene de getProcesos'
        );
    }
    const res = (await req.json()) as monDemandado[];
    return res;
}
export async function getProcesosByllaveProceso(
    {
        llaveProceso,
    }: {
    llaveProceso: string;
}
) {
    const req = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`
    );

    const res =
        (await req.json()) as intConsultaNumeroRadicacion;
    const Procesos = res.procesos.map(
        (
            proceso, index, array
        ) => {
            const fixed: intProceso = {
                idProceso: proceso.idProceso,
                idConexion: index,
                llaveProceso: proceso.llaveProceso,
                fechaProceso: fixFechas(
                    proceso.fechaProceso
                ),
                fechaUltimaActuacion: fixFechas(
                    proceso.fechaUltimaActuacion
                ),
                despacho: proceso.despacho.toLowerCase(),
                departamento: proceso.departamento
                    .toLowerCase()
                    .replace(
                        /^./,
                        (
                            str
                        ) => {
                            return str.toUpperCase();
                        }
                    ),
                sujetosProcesales: fixDemandado(
                    proceso.sujetosProcesales
                ),
                esPrivado: proceso.esPrivado,
                cantFilas: array.length,
            };
            return fixed;
        }
    );
    return Procesos;
}

export async function getProcesoByidProceso(
    {
        idProceso,
    }: {
    idProceso: number;
}
) {
    const res = await fetch(
        `http://localhost:3000/api/procesos?idProceso=${idProceso}`,
        { cache: 'no-store' }
    );
    if (!res.ok) {
        throw new Error(
            'no pudo obtener el proceso by idProceso en /api/procesos desde getProcesos'
        );
    }
    const proceso = (await res.json()) as monDemandado;
    return proceso;
}
