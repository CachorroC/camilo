import layout from '#@/styles/css/layout.module.css';
import { ReactNode } from 'react';
export default async function Layout(
    {
        children,
    }: {
    children: ReactNode;
}
) {
    return <div className={layout.body}>{children}</div>;
}
