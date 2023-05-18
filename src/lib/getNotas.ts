import { monNota } from "#@/types/notas";
import { getBaseUrl } from "#@/lib/getBaseUrl";
export async function getNotasbyPathname(
  addr: string
) {
  const req = await fetch(
    `${getBaseUrl()}/api/notas?pathname=${addr}`,
    {
      cache: "no-store",
    }
  );
  if (!req.ok) {
    const notas = await getNotas();
    return notas;
  }
  const notas = (await req.json()) as monNota[];
  return notas;
}

export async function getNotasbyllaveProceso(
  {
    llaveProceso,
  }: {
  llaveProceso: string;
}
) {
  const req = await fetch(
    `${getBaseUrl()}/api/notas?llaveProceso=${llaveProceso}`,
    { cache: "no-store" }
  );
  if (!req.ok) {
    throw new Error(
      "no pudo obtener las notas por demandado desde mongo"
    );
  }
  const notas = (await req.json()) as monNota[];
  return notas;
}

export async function getNotas() {
  const req = await fetch(
    `${getBaseUrl()}/api/notas`,
    { cache: "no-store" }
  );
  if (!req.ok) {
    throw new Error(
      "no pudimos cargar todas las notas "
    );
  }
  const notas = (await req.json()) as monNota[];
  return notas;
}
