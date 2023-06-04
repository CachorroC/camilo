import { DiaCard } from '#@/components/dia-card';
import Modal from '#@/components/modal';
import { getDia } from '#@/lib/helper';

export default async function Page (
    {
        params,
    }: {
        params: { date: string };
    }
) {
    const date = params.date;
    const dias = await getDia(
        date
    );

    return (
        <Modal>
            { dias.map(
                (
                    dia
                ) => {
                    return (
                        <DiaCard
                            key={ dia._id }
                            dia={ dia }
                        />
                    );
                }
            ) }
        </Modal>
    );
}
