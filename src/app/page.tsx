import layout from "#@/styles/css/layout.module.css";
import typeface from "#@/styles/css/typeface.module.css";
import { Card } from "#@/components/card";
import { monDia } from "#@/types/therapy";
import { getBaseUrl } from "#@/lib/getBaseUrl";
import Link from "next/link";
import { fixFechas } from "#@/lib/fix";

export default async function Page() {
  const req = await fetch(
    `${getBaseUrl()}/api/dias/get`,
    {
      cache: "no-store",
    }
  );
  const dias = (await req.json()) as monDia[];
  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1 className={typeface.titulo}>
          <strong>Demandados</strong>
        </h1>
      </div>
      <div className={layout.main}>
        <Link href="/NuevoDia/">
          <span className="material-symbols-outlined">add</span>
        </Link>
        {dias.map(
          (
            dia, i, da
          ) => {
            return (
              <Card key={dia._id} index={i} path={"/dias"} array={da} dia={dia}>
                <sub>{fixFechas(
                  dia.date
                )}</sub>
              </Card>
            );
          }
        )}
      </div>
      <h1>
        Bienvenido a
        <strong>
          <strong> R&S </strong> consultoría jurídica
        </strong>
      </h1>
    </div>
  );
}
