"use client";
import { useNoter } from "#@/app/notes-context";
import { getBaseUrl } from "#@/lib/getBaseUrl";
import modal from "#@/styles/css/modal.module.css";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { useForm } from "react-hook-form";
import { Card } from "./card";
export default function Nota() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (
    data: unknown
  ) => {
    alert(
      JSON.stringify(
        data
      )
    );
    const postNota = await fetch(
      `${getBaseUrl()}/api/notas/post`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(
          data
        ),
      }
    );
    const responsePostNota = await postNota.json();
    alert(
      responsePostNota
    );
    return responsePostNota;
  };

  const params = useParams();
  const segments = useSelectedLayoutSegments();
  const pathname = usePathname();
  const str = pathname.replaceAll(
    ",",
    "/"
  );
  {
    /**guardar las notas en mongodb con un tag que sea el segment o el pathname correspondiente para asi poder mapear las notas desde cada una de sus ubicaciones */
  }
  const [ isShowing ] = useNoter();
  if (!isShowing) {
    return null;
  }
  const now = new Date();
  const defaultValues = {
    pathname: str,
    fecha: now.toString(),
    llaveProceso: params.llaveProceso
      ? params.llaveProceso
      : segments[0],
    idProceso: params.idProceso
      ? params.idProceso
      : segments[1],
  };
  return (
    <div className={modal.modal}>
      <form onSubmit={handleSubmit(
        onSubmit
      )}>
        <input
          type="text"
          placeholder="Titulo"
          {...register(
            "titulo",
            { required: true }
          )}
        />
        <textarea {...register(
          "contenido",
          {}
        )} />
        <input
          defaultValue={defaultValues.fecha}
          type="datetime"
          placeholder="fecha"
          {...register(
            "fecha",
            { required: true }
          )}
        />
        <input
          defaultValue={defaultValues.pathname}
          type="text"
          placeholder="pathname"
          {...register(
            "pathname",
            { required: true }
          )}
        />
        <input
          defaultValue={defaultValues.llaveProceso}
          type="text"
          placeholder="llaveProceso"
          {...register(
            "llaveProceso",
            { required: false }
          )}
        />
        <input
          defaultValue={defaultValues.idProceso}
          type="text"
          placeholder="idProceso"
          {...register(
            "idProceso",
            { required: false }
          )}
        />
        <input
          type="checkbox"
          placeholder="completada"
          {...register(
            "completada",
            {}
          )}
        />

        <input type="submit" />
        {segments.map(
          (
            segment, index, array
          ) => {
            return (
              <Card
                key={index}
                index={index}
                path={"/Procesos"}
                array={array}
                content={segment}
                title={segment}
                ultimaActDate={undefined}
                actuacion={false}
              >
                <p>{segment}</p>
              </Card>
            );
          }
        )}
      </form>
    </div>
  );
}
