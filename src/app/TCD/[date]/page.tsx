import layout from '#@/styles/css/layout.module.css';
export default function Page (
    {
        params
    }: {
        params: {
            date: string
        }
    }
) {
    return (
        <div className={ layout.main }>
            <h1>{ params.date }</h1>
        </div>
    )
}