import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";

type EventsPageProps = {
  params: { city: string };
};

export default function EventsPage({ params: { city } }: EventsPageProps) {
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events is ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
