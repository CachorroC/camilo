import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import {
    Card
} from '#@/components/card';
import {
    intDia
} from '#@/types/therapy';
import {
    getBaseUrl
} from '#@/lib/getBaseUrl';
import Link from 'next/link';
import {
    fixFechas
} from '#@/lib/fix';
import Image from 'next/image';
import DoitForHim from '../../public/doitforhimwhite.png';

export default async function Page () {
    const req = await fetch( `${ getBaseUrl() }/api` );
    const dias = ( await req.json() ) as intDia[];
    return (
        <div className={ layout.body }>
            <div className={ layout.name }>
                <h1 className={ typeface.title }>
                    <Image
                        src={ DoitForHim }
                        alt='doit for him'
                        width={ 500 }
                        height={ 300 }
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </h1>
                <Link href={ '/dias' }>
                    <h1>Terapia Conductal Dialéctica</h1>
                </Link>
            </div>
            <div className={ layout.main }>
                { dias.map( ( dia ) => {
                    return (
                        <Link
                            href={ `/dias/${ dia.date }` }
                            key={ dia._id.toString() }
                        >
                            <h1 className={ typeface.title }>
                                { dia.date }
                            </h1>
                            <span className='material-symbols-outlined'>
                                open_in_new
                            </span>
                        </Link>
                    );
                } ) }
                <Link href='/NuevoDia'>
                    <span className='material-symbols-outlined'>
                        add
                    </span>
                </Link>
            </div>
        </div>
    );
}
