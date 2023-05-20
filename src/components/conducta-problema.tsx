"use client";
import { getBaseUrl } from "#@/lib/getBaseUrl";
import { useForm } from "react-hook-form";
import FieldArray from "./field-array";

export default function ConductaProblema() {
  const defaultValues = {
    conductasProblema: [
      {
        name: "SustanciasPsicoactivas",

        isDone: false,
        cantidad: 0,
        extra: "no extra",
      },
      {
        name: "Autolesiones",

        isDone: false,
        cantidad: 0,
        extra: "no extra",
      },
      {
        name: "Agresiones",

        isDone: false,
        cantidad: 0,
        extra: "no extra",
      },
      {
        name: "NoHacer",

        isDone: false,
        cantidad: 0,
        extra: "no extra",
      },
      {
        name: "PracticasSexualesRiesgo",

        isDone: false,
        cantidad: 0,
        extra: "no extra",
      },
      {
        name: "WrecklessDriving",

        isDone: false,
        cantidad: 0,
        extra: "no extra",
      },
      {
        name: "AnaNMia",

        isDone: false,
        cantidad: 0,
        extra: "no extra",
      },
    ],
  };
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm(
    {
      defaultValues,
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
      `${getBaseUrl()}/api/dias/post`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(
          data
        ),
      }
    );
    const responsePostNuevoDia = await postNuevoDia.json();
    alert(
      responsePostNuevoDia
    );
    return responsePostNuevoDia;
  };
  return (
    <form onSubmit={handleSubmit(
      onSubmit
    )}>
      <h1>Array of Array Fields</h1>
      <p>
        The following example demonstrate the ability of building nested array
        fields.
      </p>

      <FieldArray
        {...{
          control,
          register,
          defaultValues,
          getValues,
          setValue,
          errors,
        }}
      />

      <button
        type="button"
        onClick={() => {
          return reset(
            defaultValues
          );
        }}
      >
        Reset
      </button>

      <input type="submit" />
    </form>
  );
}
