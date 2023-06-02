'use client';
import {
    monDia 
} from '#@/types/therapy';
import InputSearchBar from './InputSearchBar';
import CalendarTable from './calendar-table';

export default function FilterableCalendarTable({
    dias,
}: {
    dias: monDia[];
}) {
    return (
        <div>
            <InputSearchBar />
            <CalendarTable dias={dias} />
        </div>
    );
}
