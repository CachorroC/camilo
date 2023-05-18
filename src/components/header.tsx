import layout from "#@/styles/css/layout.module.css";
import { ReactNode, Suspense } from "react";
import Drawer from "#@/components/drawer";
import SearchOutputListSkeleton from "#@/components/SearchProcesosOutputSkeleton";
import SearchOutputList from "#@/components/SearchProcesosOutput";
import Button from "#@/components/button";
import { getProcesos } from "#@/lib/getProcesos";
import InputSearchBar from "./InputSearchBar";
import FBButtons from "./forwardBackButtons";

export default async function Header() {
  const procesos = await getProcesos();
  return (
    <div className={layout.header}>
      <FBButtons />
      <Drawer>
        <div className={layout.sidenav}>
          <Suspense fallback={<SearchOutputListSkeleton />}>
            <SearchOutputList path={"/Procesos"} procesos={procesos} />
          </Suspense>
        </div>
      </Drawer>
      <Button isLink={true} />
      <InputSearchBar />
    </div>
  );
}
