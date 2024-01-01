import { Suspense } from "react";
import { Metadata } from "next";
import H1 from "@/components/h1";
import Loading from "./loading";
import Events from "@/components/events";
import { capitalize } from "@/lib/utils";

type Props = {
  params: { city: string };
};

export function generateMetadata({ params: { city } }: Props): Metadata {
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

export default function EventsPage({ params: { city } }: Props) {
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events is ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <Events city={city} />
      </Suspense>
    </main>
  );
}
