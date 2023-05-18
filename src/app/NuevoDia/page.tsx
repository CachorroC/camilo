import NuevoDia from '#@/components/nuevo-dia';
import box from '#@/styles/css/box.module.css';

export default function Page () {
  return (
    <div className={ box.container }>
      <NuevoDia />
    </div>
  )
}