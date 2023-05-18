import card from "#@/styles/css/card.module.css";
export default function CardSkeleton() {
  return (
    <div className={card.layout}>
      <h2 className={card.title}>Cargando...</h2>
      <p className={card.content}>
        Su contenido se está cargando, espere un momento
      </p>
      <sub className={card.sub}>0 de 0</sub>
      <button className={card.link}>
        <span className={`${card.icon}  material-symbols-outlined`}>
          autorenew
        </span>
      </button>
    </div>
  );
}
