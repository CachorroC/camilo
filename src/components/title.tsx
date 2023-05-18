"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import typeface from "#@/styles/css/typeface.module.css";

export default function Title() {
  const segments = useSelectedLayoutSegments();
  return (
    <>
      {segments.map(
        (
          segment, i
        ) => {
          return (
            <h1 className={typeface.title} key={i}>
              {segment}
            </h1>
          );
        }
      )}
    </>
  );
}
