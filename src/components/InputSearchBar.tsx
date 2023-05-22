'use client';
import layout from '#@/styles/css/layout.module.css';
import { useNavigator } from '#@/app/navigator-context';
import { useSearch } from '#@/app/search-context';
import form from '#@/styles/css/form.module.css';
import box from '#@/styles/css/box.module.css';
import { usePathname } from 'next/navigation';

export default function InputSearchBar() {
    const [ search, setSearch ] = useSearch();
    const [ isOpen, setIsOpen ] = useNavigator();
    const pathname = usePathname();

    return (
        <input
            type='text'
            className={form.input}
            value={search}
            placeholder={pathname}
            onBeforeInput={() => {
                pathname === '/' && setIsOpen(
                    true
                );
            }}
            onChange={(
                input
            ) => {
                setSearch(
                    input.target.value
                );
            }}
        />
    );
}
