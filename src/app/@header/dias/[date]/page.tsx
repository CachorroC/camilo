import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
export default function HeaderPage({
    params,
}: {
    params: { date: string };
}) {
    return (
        <div className={layout.header}>
            <h1 className={typeface.title}>
                {params.date}
            </h1>
        </div>
    );
}
