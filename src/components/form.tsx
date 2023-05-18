"use client";

import { getBaseUrl } from "#@/lib/getBaseUrl";
import { NextRequest } from "next/server";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (
    data: unknown
  ) => {
    alert(
      JSON.stringify(
        data
      )
    );
    const idk = await fetch(
      `${getBaseUrl()}/api/procesos/post`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(
          data
        ),
      }
    );

    const jsondt = await idk.json();
    alert(
      jsondt
    );
    return jsondt;
  };

  return (
    <form onSubmit={handleSubmit(
      onSubmit
    )}>
      <input
        type="text"
        placeholder="Nombre"
        {...register(
          "sujetosProcesales",
          {
            required: true,
          }
        )}
      />
      <input
        type="text"
        placeholder="llaveProceso"
        {...register(
          "llaveProceso",
          {
            required: true,
            minLength: 23,
            maxLength: 23,
          }
        )}
      />
      <input
        type="number"
        placeholder="idProceso"
        {...register(
          "idProceso",
          {
            required: true,
            maxLength: 10,
          }
        )}
      />

      <input
        type="checkbox"
        placeholder="esNuevo"
        {...register(
          "esNuevo",
          { required: true }
        )}
      />

      <button
        type="submit"
        onClick={() => {
          handleSubmit(
            onSubmit
          );
        }}
      >
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}
