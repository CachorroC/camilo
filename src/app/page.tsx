import layout from "#@/styles/css/layout.module.css";
import Button from "#@/components/button";
import InputSearchBar from "#@/components/InputSearchBar";
import Form from "#@/components/form";
import typeface from "#@/styles/css/typeface.module.css";
import { LinkCard } from "#@/components/link";
import { Card } from "#@/components/card";
import { Suspense } from "react";
import CardSkeleton from "#@/components/card-skeleton";
import LinkCardSkeleton from "#@/components/link-skeleton";

export default function Page() {
  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1 className={typeface.titulo}>
          <strong>Demandados</strong>
        </h1>
      </div>
      <div className={layout.main}>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={0}
            path={"/"}
            array={[]}
            content={"Some enterprice cute little slogan shit."}
            title={"R&S Consultoria Jurídica"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={0}
            path={"/"}
            array={[]}
            content={"Some enterprice cute little slogan shit."}
            title={"R&S Consultoria Jurídica"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={1}
            path={"/Procesos"}
            array={[]}
            content={undefined}
            title={"Procesos"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={2}
            path={"/NuevoProceso"}
            array={[]}
            content={undefined}
            title={"NuevoProceso"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={2}
            path={"/api"}
            array={[]}
            content={undefined}
            title={"api"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={2}
            path={"/api/notas"}
            array={[]}
            content={undefined}
            title={"api notas"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={2}
            path={"/api/procesos"}
            array={[]}
            content={undefined}
            title={"api procesos"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={2}
            path={"/api/procesos/NuevoProceso"}
            array={[]}
            content={undefined}
            title={"api/procesos/NuevoProceso"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={2}
            path={"/api/procesos/post"}
            array={[]}
            content={undefined}
            title={"api/procesos/post"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            index={2}
            path={"/pruebasMng"}
            array={[]}
            content={undefined}
            title={"pruebas"}
            ultimaActDate={undefined}
            actuacion={false}
          >
            <span className="material-symbols-outlined">rocket</span>
          </Card>
        </Suspense>

        <Button isLink={true} />

        <InputSearchBar />
        <Button isLink={false} />
      </div>
      <h1>
        Bienvenido a
        <strong>
          <strong> R&S </strong> consultoría jurídica
        </strong>
      </h1>
    </div>
  );
}
