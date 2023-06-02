import {
    fixFechas 
} from '#@/lib/fix';
import {
    Suspense 
} from 'react';
import CardSkeleton from './card-skeleton';
import {
    Sufrimiento, Urgencia 
} from './dia';
import card from '#@/styles/css/card.module.css';
import box from '#@/styles/css/box.module.css';
import {
    intDia 
} from '#@/types/therapy';

export default function DiaCard({
    dia 
}: { dia: intDia }) {
    return (
        <div
            key={dia._id.toString()}
            className={card.layout}
        >
            <h1 className={card.title}>
                {fixFechas(dia.date)}
            </h1>
            <h3>{dia.semana}</h3>
            <sub className={card.date}>{dia.contenido}</sub>

            <sub className={card.date}>
                {fixFechas(dia.date)}
            </sub>
            <div className={card.sufrimiento}>
                <h4>Sufrimiento</h4>
                <Suspense fallback={<CardSkeleton />}>
                    <Sufrimiento
                        cuantity={dia.sufrimiento.fisico}
                        name={'fisico'}
                    />
                </Suspense>
                <Suspense fallback={<CardSkeleton />}>
                    <Sufrimiento
                        cuantity={dia.sufrimiento.alegría}
                        name={'alegria'}
                    />
                </Suspense>
                <Suspense fallback={<CardSkeleton />}>
                    <Sufrimiento
                        cuantity={dia.sufrimiento.emocional}
                        name={'emocional'}
                    />
                </Suspense>
            </div>
            <Urgencia
                name='abandonarTerapia'
                rate={dia.urgencia.abandonarTerapia}
            />
            <Urgencia
                name='conductasRiesgo'
                rate={dia.urgencia.conductasRiesgo}
            />
            <Urgencia
                name='suicidarme'
                rate={dia.urgencia.suicidarme}
            />
            <div className={box.container}>
                {dia.conductasProblema.map((
                    conducta, i
                ) => {
                    return (
                        <div
                            className={card.layout}
                            key={i}
                        >
                            <h1>{conducta.name}</h1>
                            <span className='material-symbols-outlined'>
                                {conducta.hasDesire
                                    ? 'check'
                                    : 'code_off'}
                            </span>
                            <p>
                                {conducta.hasDesire
                                        && conducta.queHice}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
