import { cache } from "react";

export const getBaseUrl = cache(
  () => {
    return process.env.TUNNEL
      ? `https://app.rsasesorjuridico.com`
      : `http://localhost:${process.env.PORT ?? 3000}`;
  }
);
