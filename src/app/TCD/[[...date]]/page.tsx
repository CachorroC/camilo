import layout from '#@/styles/css/layout.module.css';

export default function Page (
    {
        params
    }: { params: { date?: string[] } }
) {
    if ( params.date ) {
        return (
            <div className={ layout.main }>
                <h1>TCD</h1>
                { params.date.map(
                    (
                        date, i
                    ) => {
                        return (
                            <h1 key={ i }>{ date }</h1>
                        )
                    }
                ) }
            </div>
        )
    }
    return (
        <div className={ layout.main }>
            <h1>TCD</h1>
        </div>
    )
}
