'use client';
import { intDia } from '#@/types/therapy';
import InputSearchBar from './InputSearchBar';
import CalendarTable from './calendar-table';

export default function FilterableCalendarTable(
    {
        dias,
    }: {
    dias: intDia[];
}
) {
    return (
        <div>
            <InputSearchBar />
            <CalendarTable dias={dias} />
        </div>
    );
}
