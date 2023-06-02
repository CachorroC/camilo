'use client';

import {
    useEffect 
} from 'react';
import mistake from '#@/styles/css/mistake.module.css';
import box from '#@/styles/css/box.module.css';
import React from 'react';
import layout from '#@/styles/css/layout.module.css';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(
        () => {
            console.error(error);
        },
        [ error ]
    );

    return (
        <div className={box.container}>
            <h2>Error en /:</h2>
            <p>{JSON.stringify(error)}</p>
            <button
                onClick={() => {
                    return reset();
                }}
            >
                Try again
            </button>
        </div>
    );
}
