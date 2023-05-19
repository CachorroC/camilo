'use client';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import box from '#@/styles/css/box.module.css';
import layout from '#@/styles/css/layout.module.css';
import Fields from './field-array';
import FieldArray from './field-array';
import ConductaProblema from './conducta-problema';

const defaultValues = {
  comentarios: "no hay comentarios",
  datetime: new Date().getTime(),
  date: new Date(),
  semana: null,
  sufrimiento: {
    emocional: 0,
    fisico: 0,
    alegría: 0
  },
  urgencia: {
    abandonarTerapia: 0,
    conductasRiesgo: 0,
    suicidarme: 0
  },
  conductasProblema: [
    {
      name: "SustanciasPsicoactivas",
      isDone: false,
      cantidad: 0,
      extra: "no extra"
    },
    {
      name: "Autolesiones",
      isDone: false,
      cantidad: 0,
      extra: "no extra"
    },
    {
      name: "Agresiones",
      isDone: false,
      cantidad: 0,
      extra: "no extra"
    },
    {
      name: "NoHacer",
      isDone: false,
      cantidad: 0,
      extra: "no extra"
    },
    {
      name: "PracticasSexualesRiesgo",
      isDone: false,
      cantidad: 0,
      extra: "no extra"
    },
    {
      name: "WrecklessDriving",
      isDone: false,
      cantidad: 0,
      extra: "no extra"
    },
    {
      name: "AnaNMia",
      isDone: false,
      cantidad: 0,
      extra: "no extra"
    },
  ]
};
export default function NuevoDia () {
  const { control, register, handleSubmit, getValues, reset, setValue, formState: { errors } } = useForm(
    {
      defaultValues
    }
  );
  const onSubmit = async (
    data: unknown
  ) => {
    alert(
      JSON.stringify(
        data
      )
    );
    const postNuevoDia = await fetch(
      `${ getBaseUrl() }/api/dias/post`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(
          data
        )
      }
    )
    const responsePostNuevoDia = await postNuevoDia.json();
    alert(
      responsePostNuevoDia
    )
    return responsePostNuevoDia
  }

  const { fields, append, remove, prepend } = useFieldArray(
    {
      control,
      name: "conductasProblema"
    }
  );

  return (

    <form className={ layout.body } onSubmit={ handleSubmit(
      onSubmit
    ) }>
      <input type="week" placeholder="Semana" { ...register(
        "semana",
        { required: true }
      ) } />
      <input type="date" placeholder="date" { ...register(
        "date",
        {}
      ) } />
      <input type="datetime-local" placeholder="datetime" { ...register(
        "datetime",
        {}
      ) } />
      <h2>comentarios</h2>
      <textarea { ...register(
        "comentarios",
        {}
      ) } />
      <h1>Ganas de matarme</h1>
      <select { ...register(
        "urgencia.suicidarme"
      ) }>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>



      <h1>Ganas de conductas de riesgo </h1>
      <select { ...register(
        "urgencia.conductasRiesgo"
      ) }>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>


      <h1>Ganas de Abandonar terapia </h1>
      <select { ...register(
        "urgencia.abandonarTerapia"
      ) }>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>



      <h1>Sufrimiento</h1>

      <h2>Emocional</h2>
      <input type="range" placeholder="Sufrimiento Emocional" { ...register(
        "sufrimiento.emocional",
        {}
      ) } />


      <h2>Físico</h2>
      <input type="range" placeholder="Sufrimiento Fisico" { ...register(
        "sufrimiento.fisico"
      ) } />


      <h2>Alegría</h2>
      <input type="range" placeholder="Alegría" { ...register(
        "sufrimiento.alegría",
        {}
      ) } />
      <h1>Array of Array Fields</h1>
      <p>
        The following example demonstrate the ability of building nested array
        fields.
      </p>


      <ul>
        { fields.map(
          (
            item, index
          ) => {
            return (
              <li key={ item.id }>
                <input { ...register(
                  `conductasProblema.${ index }.name`
                ) } />
                <input type="checkbox" placeholder={ `conductasProblema.${ index }.isDone` } { ...register(
                  `conductasProblema.${ index }.isDone`
                ) } />
                <input type="range" placeholder={ `conductasProblema.${ index }.cantidad` }  { ...register(
                  `conductasProblema.${ index }.cantidad`
                ) } />
                <input type="text" placeholder={ `conductasProblema.${ index }.extra` }  { ...register(
                  `conductasProblema.${ index }.extra`
                ) } />
                <button type="button" onClick={ () => {
                  return remove(
                    index
                  )
                } }>
                  Delete
                </button>
              </li>
            );
          }
        ) }
      </ul>

      <section>
        <button
          type="button"
          onClick={ () => {
            append(
              {
                name: "extraConducta",
                isDone: true,
                cantidad: 10,
                extra: "idk"
              }
            );
          } }
        >
          append
        </button>

        <button
          type="button"
          onClick={ () => {
            setValue(
              "conductasProblema",
              [
                ...( getValues().conductasProblema || [] ),
                {
                  name: "extraConducta",
                  isDone: true,
                  cantidad: 10,
                  extra: "idk"
                }
              ]
            );
          } }
        >
          Append Nested
        </button>

        <button
          type="button"
          onClick={ () => {
            prepend(
              {
                name: "extraConducta",
                isDone: true,
                cantidad: 10,
                extra: "idk"
              }
            );
          } }
        >
          prepend
        </button>

        <button
          type="button"
          onClick={ () => {
            setValue(
              "conductasProblema",
              [
                {
                  name: "extraConducta",
                  isDone: true,
                  cantidad: 10,
                  extra: "idk"
                },
                ...( getValues().conductasProblema || [] )
              ]
            );
          } }
        >
          prepend Nested
        </button>
      </section>

      <button type="button" onClick={ () => {
        return reset(
          defaultValues
        )
      } }>
        Reset
      </button>
      <input type="submit" />
    </form>

  );
}