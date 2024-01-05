import { Suspense } from "react";
import { Metadata } from "next";
import { z } from "zod";
import H1 from "@/components/h1";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import EventsList from "@/components/events-list";

type Props = {
  params: { city: string };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params: { city } }: Props): Metadata {
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default function EventsPage({
  params: { city },
  searchParams,
}: EventsPageProps) {
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events is ${capitalize(city)}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
