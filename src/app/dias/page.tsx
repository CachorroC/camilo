import DiaCard from '#@/components/dia-card'
import { fixFechas } from '#@/lib/fix'
import { getBaseUrl } from '#@/lib/getBaseUrl'
import { monDia } from '#@/types/therapy'
import Link from 'next/link'
import typeface from '#@/styles/css/typeface.module.css';

export default async function Page () {
    const req = await fetch(
        `${ getBaseUrl() }/api`
    )
    const dias = ( await req.json() ) as monDia[]
    return ( <>
        { dias.map(
            (
                dia
            ) => {
                return (
                    <Link href={ `/dias/${ dia.date }` } key={ dia._id }>
                        <h1 className={ typeface.title }>{ fixFechas(
                            dia.date
                        ) }</h1>
                        <span className='material-symbols-outlined'>open_in_new</span>
                    </Link>
                )
            }
        ) }
    </>

    )
}