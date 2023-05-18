'use client';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import React from 'react';
import { useForm } from 'react-hook-form';
import box from '#@/styles/css/box.module.css';
import layout from '#@/styles/css/layout.module.css';

export default function NuevoDia () {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
  };
  console.log(
    errors
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
        "Urgencia.Suicidarme"
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
        "Urgencia.ConductasRiesgo"
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
        "Urgencia.AbandonarTerapia"
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
        "sufrimiento.fisico",
        {}
      ) } />


      <h2>Alegría</h2>
      <input type="range" placeholder="Alegría" { ...register(
        "sufrimiento.alegría",
        {}
      ) } />





      <h1>sustancias Pricoactivas</h1>
      <input type="checkbox" placeholder="CP.Sustancias Psicoactivas " { ...register(
        "CP.Sustancias.bool",
        {}
      ) } />
      <input type="range" placeholder="CP.Sustancias Psicoactivas Cantidad" { ...register(
        "CP.Sustancias.Cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.Sustancias Psicoactivas Extra" { ...register(
        "CP.Sustancias.Extra",
        {}
      ) } />


      <h1>Autolesiones</h1>
      <input type="checkbox" placeholder="CP.Autolesiones" { ...register(
        "CP.Autolesiones.bool",
        {}
      ) } />
      <input type="range" placeholder="CP.Autolesiones Cantidad" { ...register(
        "CP.Autolesiones.Cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.Autolesiones Extra" { ...register(
        "CP.Autolesiones.Extra",
        {}
      ) } />


      <h1> agresiones</h1>
      <input type="checkbox" placeholder="CP.Agresiones" { ...register(
        "CP.Agreciones.bool",
        {}
      ) } />
      <input type="range" placeholder="CP.Agresiones Cantidad" { ...register(
        "CP.Agreciones.Cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.Agreciones Extra" { ...register(
        "CP.Agreciones.Extra",
        {}
      ) } />


      <h1>dejar de hacer cosas</h1>
      <input type="checkbox" placeholder="CP.NoHacer" { ...register(
        "CP.NoHacer.bool",
        {}
      ) } />
      <input type="range" placeholder="CP.NoHacer.Cantidad" { ...register(
        "CP.NoHacer.Cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.NoHacer.Extra" { ...register(
        "CP.NoHacer.Extra",
        {}
      ) } />


      <h1>prácticas sexuales de riesgo</h1>
      <input type="checkbox" placeholder="CP.PSR " { ...register(
        "CP.PSR.bool",
        {}
      ) } />
      <input type="range" placeholder="CP.PSR.cantidad" { ...register(
        "CP.PSR.cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.PSR.Extra" { ...register(
        "CP.PSR.Extra",
        {}
      ) } />


      <h1>conduccion temeraria</h1>
      <input type="checkbox" placeholder="CP.Driving " { ...register(
        "CP.Driving.bool",
        {}
      ) } />
      <input type="range" placeholder="CP.Driving.Cantidad" { ...register(
        "CP.Driving.Cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.Driving.Extra" { ...register(
        "CP.Driving.Extra",
        {}
      ) } />


      <h1>eating dissorders</h1>
      <input type="checkbox" placeholder="CP.Eating" { ...register(
        "CP.Eating.bool",
        {}
      ) } />
      <input type="range" placeholder="CP.Eating.Cantidad" { ...register(
        "CP.Eating.Cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.Eating.Extra" { ...register(
        "CP.Eating.Extra",
        {}
      ) } />

      <input type="submit" />
    </form>

  );
}