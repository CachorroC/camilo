import layout from '#@/styles/css/layout.module.css';
import Drawer from '#@/components/drawer';
import Button from '#@/components/button';
import { Suspense, ReactNode } from 'react';
import FBButtons from '#@/components/forwardBackButtons';
import Linker from '#@/components/link/active-link';
import { getDias } from '#@/lib/helper';
import { Route } from 'next';

export default async function Layout (
    {
        children
    }: { children: ReactNode }
) {
    const dias = await getDias();

    return (
        <div className={ layout.header }>
            { children }
            <FBButtons />
            <Drawer>
                { dias.map(
                    (
                        dia, i, arr
                    ) => {
                        return (
                            <Linker key={ dia._id } href={ ('/dias/' +  dia.date) as Route  }>
                                <span className='material-symbols-round'>open_in_full</span>
                            </Linker>
                        )
                    }
                ) }
            </Drawer>
        </div>
    );
}
