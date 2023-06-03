import Linker from '#@/components/link/active-link';
import layout from '#@/styles/css/layout.module.css';
import { ReactNode, Suspense } from 'react';
import typeface from '#@/styles/css/typeface.module.css';
import { fixFechas } from '#@/lib/fix';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { intDia } from '#@/types/therapy';
export default async function Layout(props: {
    calendar: ReactNode;
    children: ReactNode;
}) {
    const req = await fetch(`${getBaseUrl()}/api`);
    const dias = (await req.json()) as intDia[];
    return (
        <div className={layout.body}>
            <div className={layout.name}>
                {props.calendar}
                <Suspense fallback={<>Loading ...</>}>
                    {dias.map((dia, i, ds) => {
                        return (
                            <Linker
                                key={dia._id}
                                href={`/dias/${dia.date}`}
                            >
                                <span className='material-symbols-outlined'>
                                    open_in_new
                                </span>

                                <h1
                                    className={
                                        typeface.title
                                    }
                                >
                                    {fixFechas(dia.date)}
                                </h1>
                            </Linker>
                        );
                    })}
                </Suspense>
            </div>
            <div className={layout.main}>
                {props.children}
            </div>
        </div>
    );
}
