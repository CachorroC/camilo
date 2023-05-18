import { getBaseUrl } from '#@/lib/getBaseUrl'
import { mongoDia } from '#@/types/therapy';
import card from '#@/styles/css/card.module.css';
import { fixFechas } from '#@/lib/fix';
import box from '#@/styles/css/box.module.css';

export default async function Page () {
  const req = await fetch(
    `${ getBaseUrl() }/api/dias/get`
  )
  const dias = ( await req.json() ) as mongoDia[];
  return (
    <>
      { dias.map(
        (
          dia, index, days
        ) => {
          return (
            <div key={ dia._id } className={ card.layout }>
              <h1>{ fixFechas(
                dia.datetime
              ) }</h1>
              <div className={ box.container }>
                <p>{ dia.semana }</p>
                <>
                  { JSON.stringify(
                    dia.CP
                  ) }
                </>
                <>{ dia.CP.toString() }</>
              </div>
            </div>
          )
        }
      ) }
    </>
  )
}