import layout from '#@/styles/css/layout.module.css';
import Drawer from '#@/components/drawer';
import Button from '#@/components/button';
import InputSearchBar from '#@/components/InputSearchBar';
import FBButtons from '#@/components/forwardBackButtons';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import Link from 'next/link';
import { fixFechas } from '#@/lib/fix';
import card from '#@/styles/css/card.module.css';
import { intDia } from '#@/types/therapy';
import typeface from '#@/styles/css/typeface.module.css';

export default async function Header () {
    const req = await fetch(
        `${ getBaseUrl() }/api`,
        { cache: 'no-store', }
    );
    const dias = ( await req.json() ) as intDia[];
    return (
        <div className={ layout.header }>
            <FBButtons />
            <Drawer>
                <div className={ layout.sidenav }>
                    { dias.map(
                        (
                            dia, i, ds
                        ) => {
                            return (
                                <div
                                    className={ card.layout }
                                    key={ dia._id.toString() }
                                >
                                    <h1
                                        className={
                                            typeface.title
                                        }
                                    >
                                        { fixFechas(
                                            dia.date
                                        ) }
                                    </h1>
                                    <Link
                                        href={ `/TCD/${ dia.date }` }
                                    >
                                        <span className='material-symbols-outlined'>
                                            open_in_new
                                        </span>
                                    </Link>
                                </div>
                            );
                        }
                    ) }
                </div>
            </Drawer>
            <Button isLink={ true } />
            <InputSearchBar />
        </div>
    );
}
