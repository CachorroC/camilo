'use client';
import fab from '#@/styles/css/fab.module.css';
import Button from './button';
export default function FAB() {
    return (
        <div className={fab.button}>
            <Button isLink={false} />
        </div>
    );
}
