import { fixFechas } from '#@/lib/fix';
import box from '#@/styles/css/box.module.css';

import sufrimiento from '#@/styles/css/sufrimiento.module.css';
import { monDia } from '#@/types/therapy';
import { ReactElement, JSXElementConstructor, ReactFragment, PromiseLikeOfReactNode, JSX, useState } from 'react';
import 'server-only'
export function Urgencia (
  { rate, name }: { rate: number; name: string }
) {
  return (
    <div className={ box.container }>
      <h2>{ name }</h2>
      { Array.from(
        { length: rate }
      ).map(
        (
          _, i
        ) => {
          return (
            <span className={ `material-symbols-outlined  ${ sufrimiento.urgencia }` } key={ i }>star</span>
          )
        }
      ) }
    </div>
  )
}

export function Sufrimiento (
  { cuantity, name }: { cuantity: number; name: string }
) {
  let severity = "medium"
  if ( cuantity >= 60 ) {
    severity = "high"
  }
  if ( cuantity <= 40 ) {
    severity = "low"
  }
  let percentage = cuantity.toString() + '%'
  return (
    <div className={ `${ sufrimiento.container } ${ severity }` }>
      <h2>{ name }</h2>
      <p>{ cuantity }</p>
      <div className={ sufrimiento.box }>
        <div style={ {
          width: percentage,
          backgroundColor: "var(--tertiary)"
        } } className={ sufrimiento.skills }>
        </div>
      </div>
    </div >
  )
}
