import Link from 'next/link';
import { fixFechas } from '#@/lib/fix';
import calendar from '#@/styles/css/calendar.module.css';

const currYear = new Date().getFullYear();
const currMonth = new Date().getMonth();
const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];
const date = new Date(
    currYear,
    currMonth,
    1
);
const today = new Date();
const firstDayofMonth = date.getDay();
const lastDateofMonth = new Date(
    currYear,
    currMonth + 1,
    0
).getDate();
const lastDayofMonth = new Date(
    currYear,
    currMonth,
    lastDateofMonth
).getDay();
const lastDateofLastMonth = new Date(
    currYear,
    currMonth,
    0
).getDate();

export default function Calendar () {
    const rows = [];
    for ( let i = firstDayofMonth; i > 0; i-- ) {
        const href
            = currYear + '-' + currMonth + '-' + i.toString();
        rows.push(
            <Link
                className={ calendar.disabled }
                href='/dias'
            >
                { lastDateofLastMonth - i + 1 }
            </Link>
        );
    }
    for ( let i = 1; i <= lastDateofMonth; i++ ) {
        const href
            = currYear + '-' + currMonth + '-' + i.toString();
        const setToday = i === today.getDate();
        rows.push(
            <Link
                className={
                    setToday
                        ? calendar.active
                        : calendar.inactive
                }
                href={ `/dias/${ href }` }
            >
                { i }
            </Link>
        );
    }

    for ( let i = lastDayofMonth; i < 6; i++ ) {
        const href
            = currYear + '-' + currMonth + '-' + i.toString();
        const setToday = i === date.getDate();
        rows.push(
            <Link
                className={
                    setToday
                        ? calendar.active
                        : calendar.inactive
                }
                href={ `/dias/${ href }` }
            >
                { i - lastDayofMonth + 1 }
            </Link>
        );
    }

    return (
        <div className={ calendar.container }>
            <p>{ months[ currMonth ] + currYear }</p>
            <div className={ calendar.calendar }>
                <div className={ calendar.weeks }>
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </div>
                <div className={ calendar.days }>{ rows }</div>
            </div>
        </div>
    );
}
