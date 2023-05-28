import { cache } from 'react';
import { headers } from 'next/headers';

export const getBaseUrl = cache(
    () => {
        return process.env.TUNNEL
            ? `https://camilo.suarez-ramirez.com`
            : `http://localhost:${ process.env.PORT ?? 3000 }`;
    }
);
