import NuevoDia from '#@/components/nuevo-dia/nuevo-dia';
import layout from '#@/styles/css/layout.module.css';
import {
    getBaseUrl 
} from '#@/lib/getBaseUrl';

export default function Page() {
    return (
        <div className={layout.body}>
            <NuevoDia uri={getBaseUrl()} />
        </div>
    );
}
