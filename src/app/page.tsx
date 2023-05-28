import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import { Card } from '#@/components/card';
import { monDia } from '#@/types/therapy';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import Link from 'next/link';
import { fixFechas } from '#@/lib/fix';
import Image from 'next/image';
import DoitForHim from '../../public/doitforhimwhite.png';

export default function Page() {
    return (
        <div className={layout.body}>
            <div className={layout.name}>
                <h1 className={typeface.titulo}>
                    <Image
                        src={DoitForHim}
                        alt='doit for him'
                        width={500}
                        height={300}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                </h1>
                <Link href={'/TCD'}>
                    <h1>Terapia Conductal Dialéctica</h1>
                </Link>
            </div>
            <div className={layout.main}>
                <Link href='/NuevoDia'>
                    <span className='material-symbols-outlined'>
                        add
                    </span>
                </Link>
            </div>
        </div>
    );
}
