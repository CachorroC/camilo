'use client';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import box from '#@/styles/css/box.module.css';
import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import form from '#@/styles/css/form.module.css';
import { fixFechas } from '#@/lib/fix';
import { intDia } from '#@/types/therapy';
import Day from 'dayjs';
import 'dayjs/plugin/weekOfYear'
import { useNoter } from '#@/app/notes-context';
const iso = new Date().toISOString().split(
    'T'
);
const isoShort = new Date().toUTCString();
const local = new Date().toLocaleString();
const normalitoString = new Date().toString();
const localeDate = new Date().toLocaleDateString();
const basic = new Date();
const cP = [
    'sP',
    'autoLesiones',
    'agresiones',
    'noHacer',
    'pSR',
    'wD',
    'eating',
];
const currentDate = new Date().valueOf();
const startDate = new Date(
    Day().year(),
    0,
    1
).valueOf();
const days = Math.floor(
    ( currentDate - startDate )
    / ( 24 * 60 * 60 * 1000 )
);

var weekNumber = Math.ceil(
    days / 7
);
const defaultDate = new Date();
const defaultValues = {
    titulo: fixFechas(
        new Date().toString()
    ),
    contenido: '',
    date: Day(),
    mes: Day().month(),
    año: Day().year(),
    dia: Day().date(),
    diaSemana: Day().day(),
    semana: weekNumber,
    sufrimiento: {
        emocional: 0,
        fisico: 0,
        alegría: 0,
    },
    urgencia: {
        abandonarTerapia: 0,
        conductasRiesgo: 0,
        suicidarme: 0,
    },
    conductasProblema: [
        {
            name: 'sP',
            hasDesire: false,
            queHice: '',
        },
        {
            name: 'autoLesiones',
            hasDesire: false,
            queHice: '',
        },
        {
            name: 'agresiones',
            hasDesire: false,
            queHice: '',
        },
        {
            name: 'noHacer',
            hasDesire: false,
            queHice: '',
        },
        {
            name: 'pSR',
            hasDesire: false,
            queHice: '',
        },
        {
            name: 'wD',
            hasDesire: false,
            queHice: '',
        },
        {
            name: 'eating',
            hasDesire: false,
            queHice: '',
        },
    ],
    tareaSemana: '',
};
export default function NuevoDia (
    {
        uri
    }: { uri: string }
) {
    const {
        control,
        register,
        handleSubmit,
        getValues,
        reset,
        setValue,
        formState: {
            errors
        },
    } = useForm(
        {
            defaultValues,
        }
    );
    const {
        fields,
        append,
        prepend,
        remove,
        swap,
        move,
        insert,
    } = useFieldArray(
        {
            control,
            name: 'conductasProblema',
        }
    );
    const onSubmit = async (
        data: any
    ) => {
        const values = getValues();
        alert(
            JSON.stringify(
                data
            )
        );
        alert(
            JSON.stringify(
                values
            )
        );
        console.log(
            JSON.stringify(
                data
            )
        );
        const postNuevoDia = await fetch(
            `${ uri }/api`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(
                    data
                ),
            }
        ).then(
            (
                fullfiled
            ) => {
                return fullfiled;
            }
        );
        const responsePostNuevoDia
            = await postNuevoDia.json();
        alert(
            responsePostNuevoDia
        );
        return responsePostNuevoDia;
    };
    const [
        isShowing,
        setIsShowing
    ] = useNoter()

    return (
        <form
            className={ layout.nuevoDia }
            onSubmit={ handleSubmit(
                onSubmit
            ) }
        >
            <p>{ iso[ 0 ] }</p>
            <p>{ isoShort }</p>
            <p>{ local }</p>
            <p>{ normalitoString }</p>
            <p>{ localeDate }</p>
            <p>{ basic.toString() }</p>
            <fieldset className={ layout.name }>
                <legend className={ typeface.title }>
                    Base
                </legend>

                <input
                    defaultValue={ defaultValues.titulo }
                    type='text'
                    placeholder='titulo'
                    { ...register(
                        'titulo',
                        {}
                    ) }
                />
                <input
                    type='week'
                    placeholder={ defaultValues.semana.toString() }
                    { ...register(
                        'semana',
                        {}
                    ) }
                />
                <textarea { ...register(
                    'contenido',
                    {}
                ) } />

                <input
                    defaultValue={ defaultValues.date.valueOf() }
                    type='date'
                    placeholder='date'
                    { ...register(
                        'date',
                        {
                            required: true,
                        }
                    ) }
                />
            </fieldset>
            <section className={ layout.main }>
                <fieldset className={ box.container }>
                    <legend className={ typeface.title }>
                        Urgencia
                    </legend>
                    <h3>Ganas de colgar los guayos</h3>
                    <select
                        id='suicidarme'
                        { ...register(
                            'urgencia.suicidarme',
                            {}
                        ) }
                    >
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>

                    <br></br>
                    <h3>
                        Ganas de hacer conductas de riesgo
                    </h3>
                    <select
                        id='conductasRiesgo'
                        { ...register(
                            'urgencia.conductasRiesgo',
                            {}
                        ) }
                    >
                        : intDia{ ' ' }
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>

                    <h1>Ganas de Abandonar terapia </h1>
                    <select
                        { ...register(
                            'urgencia.abandonarTerapia',
                            {}
                        ) }
                    >
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </fieldset>

                <fieldset className={ box.container }>
                    <legend className={ typeface.title }>
                        Sufrimiento
                    </legend>

                    <h2>Emocional</h2>
                    <input
                        type='range'
                        placeholder='Sufrimiento Emocional'
                        { ...register(
                            'sufrimiento.emocional',
                            {}
                        ) }
                    />

                    <h2>Físico</h2>
                    <input
                        type='range'
                        placeholder='Sufrimiento Fisico'
                        { ...register(
                            'sufrimiento.fisico',
                            {}
                        ) }
                    />

                    <h2>Alegría</h2>
                    <input
                        type='range'
                        placeholder='Alegría'
                        { ...register(
                            'sufrimiento.alegría',
                            {}
                        ) }
                    />
                </fieldset>
                <fieldset className={ box.grid }>
                    <legend className={ typeface.title }>
                        Conductas de Riesgo
                    </legend>

                    { fields.map(
                        (
                            item, index
                        ) => {
                            const desire
                                = 'conductasProblema.'
                                + item
                                + '.hasDesire';
                            const hice
                                = 'conductasProblema.'
                                + item
                                + '.queHice';
                            return (
                                <fieldset key={ item.name }>
                                    <input
                                        type='checkbox'
                                        placeholder={ `conductasProblema.${ item }.hasDesire` }
                                        { ...register(
                                            `conductasProblema.${ index }.hasDesire`,
                                            {}
                                        ) }
                                    />
                                    <input
                                        type='text'
                                        placeholder={ `conductasProblema.${ item }.queHice` }
                                        { ...register(
                                            `conductasProblema.${ index }.queHice`,
                                            {}
                                        ) }
                                    />
                                </fieldset>
                            );
                        }
                    ) }
                </fieldset>
                <textarea
                    { ...register(
                        'tareaSemana',
                        {}
                    ) }
                />

                <button
                    type='button'
                    onClick={ () => {
                        return reset(
                            defaultValues
                        );
                    } }
                >
                    Reset
                </button>
                <input type='submit' />
            </section>
        </form>
    )

}
