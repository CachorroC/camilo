"use client";
import { useCallback, useRef, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import layout from "#@/styles/css/layout.module.css";
import { useNoter } from "#@/app/notes-context";

export default function Modal(
  { children }: { children: ReactNode }
) {
  const overlay = useRef();
  const wrapper = useRef();
  const router = useRouter();
  const [ isShowing, setIsShowing ] = useNoter();
  const onDismiss = useCallback(
    () => {
      router.back();
    },
    [ router ]
  );

  const onClick = useCallback(
    (
      e
    ) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) {
          onDismiss();
        }
      }
    },
    [ onDismiss, overlay, wrapper ]
  );

  const onKeyDown = useCallback(
    (
      e
    ) => {
      if (e.key === "Escape") {
        onDismiss();
      }
    },
    [ onDismiss ]
  );

  useEffect(
    () => {
      document.addEventListener(
        "keydown",
        onKeyDown
      );
      return () => {
        return document.removeEventListener(
          "keydown",
          onKeyDown
        );
      };
    },
    [ onKeyDown ]
  );

  return (
    <div className={layout.modal} onClick={onClick}>
      {children}
    </div>
  );
}
