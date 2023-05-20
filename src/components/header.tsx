import layout from "#@/styles/css/layout.module.css";
import { ReactNode, Suspense } from "react";
import Drawer from "#@/components/drawer";
import SearchOutputListSkeleton from "#@/components/SearchProcesosOutputSkeleton";
import SearchOutputList from "#@/components/SearchProcesosOutput";
import Button from "#@/components/button";
import { getProcesos } from "#@/lib/getProcesos";
import InputSearchBar from "./InputSearchBar";
import FBButtons from "./forwardBackButtons";
import { getBaseUrl } from "#@/lib/getBaseUrl";
import { monDia } from "#@/types/therapy";

export default async function Header() {
  const req = await fetch(
    `${getBaseUrl()}/api/dias/get`,
    {
      cache: "no-store",
    }
  );
  const dias = (await req.json()) as monDia[];
  const procesos = await getProcesos();
  return (
    <div className={layout.header}>
      <FBButtons />
      <Drawer>
        <div className={layout.sidenav}>
          <Suspense fallback={<SearchOutputListSkeleton />}>
            <SearchOutputList path={"/dias"} dias={dias} />
          </Suspense>
        </div>
      </Drawer>
      <Button isLink={true} />
      <InputSearchBar />
    </div>
  );
}
