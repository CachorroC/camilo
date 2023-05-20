import { getBaseUrl } from "#@/lib/getBaseUrl";
import card from "#@/styles/css/card.module.css";
import { fixFechas } from "#@/lib/fix";
import box from "#@/styles/css/box.module.css";
import { monDia } from "#@/types/therapy";
import { Sufrimiento, Urgencia } from "#@/components/dia";
import { Suspense } from "react";
import CardSkeleton from "#@/components/card-skeleton";
import InputSearchBar from "#@/components/InputSearchBar";
import CalendarTable from "#@/components/calendar-table";
import FilterableCalendarTable from "#@/components/filterable-calendar-table";
import SearchOutputListSkeleton from "#@/components/SearchProcesosOutputSkeleton";
import SearchOutputList from "#@/components/SearchProcesosOutput";

export default async function Page() {
  const req = await fetch(
    `${getBaseUrl()}/api/dias/get`,
    {
      cache: "no-store",
    }
  );
  const dias = (await req.json()) as monDia[];
  return (
    <Suspense fallback={<SearchOutputListSkeleton />}>
      <SearchOutputList path={"/dias"} dias={dias} />
    </Suspense>
  );
}
