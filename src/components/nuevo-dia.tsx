'use client';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import React from 'react';
import { useForm } from 'react-hook-form';

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

  const defaultValues = {

  }

  return (
    <form onSubmit={ handleSubmit(
      onSubmit
    ) }>
      <div className={ box.container }>

      </div>
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
      <select { ...register(
        "Urgencia.ConductasRiesgo "
      ) }>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
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
      <input type="range" placeholder="Sufrimiento Emocional" { ...register(
        "sufrimiento.emocional",
        {}
      ) } />
      <input type="range" placeholder="Sufrimiento Fisico" { ...register(
        "sufrimiento.fisico",
        {}
      ) } />
      <input type="range" placeholder="Alegría" { ...register(
        "sufrimiento.alegría",
        {}
      ) } />
      <textarea { ...register(
        "ComentariosAdicionales",
        {}
      ) } />
      <input type="week" placeholder="Semana" { ...register(
        "semana",
        { required: true }
      ) } />
      <input type="time" placeholder="time" { ...register(
        "time",
        {}
      ) } />
      <input type="datetime-local" placeholder="datetime" { ...register(
        "datetime",
        {}
      ) } />
      <input type="checkbox" placeholder="CP.Sustancias Psicoactivas " { ...register(
        "CP.SustanciasPsicoactivas ",
        {}
      ) } />
      <input type="range" placeholder="CP.Sustancias Psicoactivas Cantidad" { ...register(
        "CP.SustanciasPsicoactivas.Cantidad",
        {
          min: 0,
          max: 5
        }
      ) } />
      <input type="text" placeholder="CP.Sustancias Psicoactivas Extra" { ...register(
        "CP.SustanciasPsicoactivas.Extra",
        {}
      ) } />
      <input type="checkbox" placeholder="CP.Autolesiones" { ...register(
        "CP.Autolesiones",
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
      <input type="checkbox" placeholder="CP.Agresiones" { ...register(
        "CP.Agresiones",
        {}
      ) } />
      <input type="range" placeholder="CP.Agresiones Cantidad" { ...register(
        "CP.Agresiones.Cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.Agreciones Extra" { ...register(
        "CP.Agreciones.Extra",
        {}
      ) } />
      <input type="checkbox" placeholder="CP.No-Hacer " { ...register(
        "CP.No-Hacer ",
        {}
      ) } />
      <input type="range" placeholder="CP.No-Hacer Cantidad " { ...register(
        "CP.No-Hacer.Cantidad ",
        {}
      ) } />
      <input type="text" placeholder="CP.No-Hacer Extra" { ...register(
        "CP.No-Hacer.Extra",
        {}
      ) } />
      <input type="checkbox" placeholder="CP.PSR " { ...register(
        "CP.PSR ",
        {}
      ) } />
      <input type="range" placeholder="CP.PSR cantidad" { ...register(
        "CP.PSR.cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.PSR Extra" { ...register(
        "CP.PSR.Extra",
        {}
      ) } />
      <input type="checkbox" placeholder="CP.Driving " { ...register(
        "CP.Driving ",
        {}
      ) } />
      <input type="range" placeholder="CP.Driving Cantidad" { ...register(
        "CP.Driving.Cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.Driving Extra" { ...register(
        "CP.Driving.Extra",
        {}
      ) } />
      <input type="checkbox" placeholder="CP.Eating" { ...register(
        "CP.Eating",
        {}
      ) } />
      <input type="range" placeholder="CP.Eating Cantidad" { ...register(
        "CP.Eating.Cantidad",
        {}
      ) } />
      <input type="text" placeholder="CP.Eating Extra" { ...register(
        "CP.Eating.Extra",
        {}
      ) } />

      <input type="submit" />
    </form>
  );
}