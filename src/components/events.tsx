import type { EventoEvent } from "@/lib/types";
import EventsList from "./events-list";

type EventsDataProps = {
  city: string;
};

export default async function Events({ city }: EventsDataProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return <EventsList events={events} />;
}
