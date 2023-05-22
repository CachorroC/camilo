import CardSkeleton from '#@/components/card-skeleton';
import LinkCardSkeleton from '#@/components/link-skeleton';
import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';

export default function Loading() {
    return (
        <div className={layout.body}>
            <div className={layout.name}>
                <h1 className={typeface.titulo}>
                    <strong>cargando</strong>
                </h1>
            </div>
            <div className={layout.main}>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </div>
        </div>
    );
}
