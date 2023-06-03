import NuevoDia from '#@/components/nuevo-dia/nuevo-dia';
import layout from '#@/styles/css/layout.module.css';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import Modal from '#@/components/modal';

export default function Page () {
    return (
        <Modal>
            <NuevoDia uri={ getBaseUrl() } />
        </Modal>
    );
}
