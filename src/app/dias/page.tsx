import { getBaseUrl } from '#@/lib/getBaseUrl'
import card from '#@/styles/css/card.module.css';
import { fixFechas } from '#@/lib/fix';
import box from '#@/styles/css/box.module.css';
import { monDia } from '#@/types/therapy';
import { Sufrimiento, Urgencia } from '#@/components/dia';
import { Suspense } from 'react';
import CardSkeleton from '#@/components/card-skeleton';
import InputSearchBar from '#@/components/InputSearchBar';
import CalendarTable from '#@/components/calendar-table';
import FilterableCalendarTable from '#@/components/filterable-calendar-table';

export default async function Page () {
  const req = await fetch(
    `${ getBaseUrl() }/api/dias/get`,
    { cache: 'no-store' }
  )
  const dias = ( await req.json() ) as monDia[];
  return (
    <>
      <InputSearchBar />
      <CalendarTable dias={ dias } />
      <FilterableCalendarTable dias={ dias } />
      { dias.map(
        (
          dia, index, days
        ) => {
          return (
            <div key={ dia._id } className={ card.layout }>
              <h1>{ fixFechas(
                dia.datetime
              ) }</h1>
              <h3>{ dia.semana }</h3>
              <sub className={ card.date }>{ dia.comentarios }</sub>
              <div className={ box.container }>
                <h4>Sufrimiento</h4>
                <Suspense fallback={ <CardSkeleton /> }>
                  <Sufrimiento cuantity={ dia.sufrimiento.fisico } name={ "fisico" } />
                </Suspense>
                <Suspense fallback={ <CardSkeleton /> }>
                  <Sufrimiento cuantity={ dia.sufrimiento.alegría } name={ "alegria" } />
                </Suspense>
                <Suspense fallback={ <CardSkeleton /> }>
                  <Sufrimiento cuantity={ dia.sufrimiento.emocional } name={ "emocional" } />
                </Suspense>

              </div>
              <Urgencia name="abandonarTerapia" rate={ dia.urgencia.abandonarTerapia } />
              <Urgencia name="conductasRiesgo" rate={ dia.urgencia.conductasRiesgo } />
              <Urgencia name="suicidarme" rate={ dia.urgencia.suicidarme } />
              <div className={ box.container }>
                { dia.conductasProblema.map(
                  (
                    conducta, i
                  ) => {
                    return (
                      <div className={ card.layout } key={ i }>
                        <h1>{ conducta.name }</h1>
                        <span className="material-symbols-outlined">
                          { conducta.isDone
                            ? "check"
                            : "code_off" }
                        </span>
                        <p> { conducta.isDone && conducta.extra }</p>
                      </div>
                    )
                  }
                ) }
                hU</div>
            </div>
          )
        }
      ) }
    </>
  )
}