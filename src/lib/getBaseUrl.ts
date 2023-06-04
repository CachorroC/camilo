import 'server-only';
import { cache } from 'react';
import { headers } from 'next/headers';

export const getBaseUrl = cache(
    () => {
        const headersList = headers();
        const uri = headersList.get(
            'Host'
        );
        if (process.env.NODE_ENV === 'development') {
            if (uri !== 'localhost:3000') {
                return `https://${ uri }`;
            }
            return `http://localhost:${
                process.env.PORT
                    ? process.env.PORT
                    : 3000
            }`;
        }
        if (uri) {
            return `https://${ uri }`;
        }
        return 'https://camilo.suarez-ramirez.com';
    }
);

function buildURL() {
    const headersList = headers();
    const uri = headersList.get(
        'Host'
    );
    if (process.env.NODE_ENV !== 'production') {
        return `http://localhost:${
            process.env.PORT
                ? process.env.PORT
                : 3000
        }`;
    }
    if (uri) {
        return `https://${ uri }`;
    }
    return 'https://camilo.suarez-ramirez.com';
}
