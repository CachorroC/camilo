import layout from '#@/styles/css/layout.module.css';
import {
    Suspense 
} from 'react';
import FBButtons from './forwardBackButtons';
import {
    PancartaHorizontal 
} from './pancarta';
import Image from 'next/image';
import DoitForHim from '../../public/doitforhimblack.png';

export default function Footer() {
    return (
        <footer className={layout.footer}>
            <FBButtons />
            <Image
                src={DoitForHim}
                alt='doit for him'
                width={100}
                height={50}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
            <Suspense
                fallback={
                    <p>not ready yet with the pancarta</p>
                }
            >
                <PancartaHorizontal />
            </Suspense>
        </footer>
    );
}
