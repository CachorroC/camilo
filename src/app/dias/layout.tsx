import layout from '#@/styles/css/layout.module.css';
import { ReactNode } from 'react';
export default function Layout(
    props: {
    calendar: ReactNode;
    children: ReactNode;
}
) {
    return (
        <div className={layout.body}>
            <div className={layout.name}>
                {props.calendar}
            </div>
            <div className={layout.main}>
                {props.children}
            </div>
        </div>
    );
}
