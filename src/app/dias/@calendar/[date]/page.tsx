import Calendar from '#@/components/calendar/calendar';

export default function Page(
    {
        params: {
            date
        }
    }: {params: {date: string}}
) {
    return <Calendar date={date} />;
}
