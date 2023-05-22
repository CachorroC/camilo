import { cache } from 'react';

export const getBaseUrl = cache(
    () => {
        return process.env.TUNNEL
            ? `http://localhost:${process.env.PORT ?? 3000}`
            : `https://camilo.suarez-ramirez.com`;
    }
);
