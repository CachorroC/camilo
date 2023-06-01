import calendar from '#@/styles/css/calendar.module.css';
import box from '#@/styles/css/box.module.css';
import Link from 'next/link';
import { fixFechas } from '#@/lib/fix';

const currYear = new Date().getFullYear();
const currMonth = new Date().getMonth();
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const date = new Date(
    currYear,
    currMonth,
    1
);
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

export default function Calendar() {
    const rows = [];
    for (let i = firstDayofMonth; i > 0; i--) {
        const href = new Date(
            currYear,
            currMonth,
            i
        );
        rows.push(
            <li>
                <Link
                    className={calendar.inactive}
                    href={`/TCD/${fixFechas(
                        href.toLocaleString()
                    )}`}
                >
                    {lastDateofLastMonth - i + 1}
                </Link>
            </li>
        );
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        const href = new Date(
            currYear,
            currMonth,
            i
        );
        const setToday = href === date;
        let isToday
            = i === new Date().getDate()
            && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear()
                ? 'calendar.active'
                : '';
        rows.push(
            <li>
                <Link
                    className={
                        setToday
                            ? 'calendar.active'
                            : isToday
                    }
                    href={`/TCD/${fixFechas(
                        href.toDateString()
                    )}`}
                >
                    {i}
                </Link>
            </li>
        );
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        const href = new Date(
            currYear,
            currMonth,
            i
        );
        rows.push(
            <li>
                {' '}
                <Link
                    className={calendar.inactive}
                    href={`/TCD/${fixFechas(
                        href.toLocaleString()
                    )}`}
                >
                    {i - lastDayofMonth + 1}
                </Link>
            </li>
        );
    }

    return (
        <div className={box.container}>
            <p>{months[currMonth] + currYear}</p>
            <div className={calendar.calendar}>
                <ul className={calendar.weeks}>
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul className={calendar.days}>{rows}</ul>
            </div>
        </div>
    );
}
