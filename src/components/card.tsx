"use client";
import Link from "next/link";
import card from "#@/styles/css/card.module.css";
import { intActuacion, intProceso } from "#@/types/procesos";
import type { Route } from "next";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { ReactNode, useState } from "react";
export const Card = (
  {
    children,
    index,
    path,
    array,
    content,
    title,
    llaveProceso,
    idProceso,
    icon,
    actuacion,
  }: {
  children: ReactNode;
  index: number;
  path: string;
  array: string[] | intActuacion[] | intProceso[] | any[];
  content: string | null | undefined;
  title: string;
  llaveProceso?: string;
  idProceso?: number;
  icon?: string;
  ultimaActDate: string | null | undefined;
  actuacion: boolean;
}
) => {
  const pathname = usePathname();
  const params = useParams();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const selectedLayoutSegments = useSelectedLayoutSegments();
  const llave = params.llaveProceso
    ? params.llaveProceso
    : "";
  const id = params.idProceso
    ? params.idProceso
    : "";

  const href = (
    llaveProceso
      ? idProceso
        ? path + "/" + llaveProceso + "/" + idProceso.toString()
        : path + "/" + llaveProceso
      : path
  ) as Route;
  const isActive =
    pathname === href ||
    pathname === path + "/" + llaveProceso + "/" + idProceso?.toString() ||
    pathname === path + "/" + llaveProceso;
  return (
    <div className={card.layout} key={index}>
      <div className={card.top}>
        <sub className={card.sub}>{`${index + 1} - ${array.length}`}</sub>
        <h2 className={card.title}>{title}</h2>
      </div>
      <p className={card.content}>{content?.toLowerCase()}</p>
      <div className={card.bottom}>
        {children}
        {!actuacion && (
          <Link
            href={href}
            className={isActive
              ? card.linkIsActive
              : card.link}
          >
            <span className={`material-symbols-outlined ${card.icon}`}>
              {icon
                ? icon
                : "star"}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};
