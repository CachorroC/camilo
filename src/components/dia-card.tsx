import { fixFechas } from "#@/lib/fix";
import { Suspense } from "react";
import CardSkeleton from "./card-skeleton";
import { Sufrimiento, Urgencia } from "./dia";
import { monDia } from "#@/types/therapy";
import card from "#@/styles/css/card.module.css";
import box from "#@/styles/css/box.module.css";

export default function DiaCard(
  { dia }: { dia: monDia }
) {
  return (
    <div key={dia._id} className={card.layout}>
      <h1 className={card.title}>{fixFechas(
        dia.datetime
      )}</h1>
      <h3>{dia.semana}</h3>
      <sub className={card.date}>{dia.comentarios}</sub>

      <sub className={card.date}>{fixFechas(
        dia.date
      )}</sub>
      <div className={card.sufrimiento}>
        <h4>Sufrimiento</h4>
        <Suspense fallback={<CardSkeleton />}>
          <Sufrimiento cuantity={dia.sufrimiento.fisico} name={"fisico"} />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Sufrimiento cuantity={dia.sufrimiento.alegría} name={"alegria"} />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Sufrimiento
            cuantity={dia.sufrimiento.emocional}
            name={"emocional"}
          />
        </Suspense>
      </div>
      <Urgencia name="abandonarTerapia" rate={dia.urgencia.abandonarTerapia} />
      <Urgencia name="conductasRiesgo" rate={dia.urgencia.conductasRiesgo} />
      <Urgencia name="suicidarme" rate={dia.urgencia.suicidarme} />
      <div className={box.container}>
        {dia.conductasProblema.map(
          (
            conducta, i
          ) => {
            return (
              <div className={card.layout} key={i}>
                <h1>{conducta.name}</h1>
                <span className="material-symbols-outlined">
                  {conducta.isDone
                    ? "check"
                    : "code_off"}
                </span>
                <p> {conducta.isDone && conducta.extra}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
