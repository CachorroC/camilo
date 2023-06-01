import layout from '#@/styles/css/layout.module.css';
import {
    ReactNode, Suspense 
} from 'react';
import Drawer from '#@/components/drawer';
import Button from '#@/components/button';
import InputSearchBar from './InputSearchBar';
import FBButtons from './forwardBackButtons';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { monDia } from '#@/types/therapy';
import card from '#@/styles/css/card.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import Link from 'next/link';
import { fixFechas } from '#@/lib/fix';

export default async function Header() {
    const req = await fetch(
        `${getBaseUrl()}/api`,
        {cache: 'no-store',}
    );
    const dias = (await req.json()) as monDia[];
    return (
        <div className={layout.header}>
            <FBButtons />
            <Drawer>
                <div className={layout.sidenav}>
                    {dias.map(
                        (
                            dia, i, ds
                        ) => {
                            return (
                                <div
                                    className={card.layout}
                                    key={dia._id}
                                >
                                    <h1
                                        className={
                                            typeface.title
                                        }
                                    >
                                        {fixFechas(
                                            dia.date
                                        )}
                                    </h1>
                                    <Link
                                        href={`/TCD/${dia.date}`}
                                    >
                                        <span className='material-symbols-outlined'>
                                        open_in_new
                                        </span>
                                    </Link>
                                </div>
                            );
                        }
                    )}
                </div>
            </Drawer>
            <Button isLink={true} />
            <InputSearchBar />
        </div>
    );
}
