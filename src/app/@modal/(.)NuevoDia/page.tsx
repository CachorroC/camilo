import Modal from '#@/components/modal';
import NuevoDia from '#@/components/nuevo-dia/nuevo-dia';
import { getBaseUrl } from '#@/lib/getBaseUrl';

export default function Page() {
    return (
        <Modal>
            <NuevoDia uri={getBaseUrl()} />
        </Modal>
    );
}
