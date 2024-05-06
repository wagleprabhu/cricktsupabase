import { getSingleEvent, getSingleStadium } from "../_actions/allActions";
import EventCarousel from "../_components/EventCarousel";
import { EventDetailCard } from "../_components/EventDetailCard";
import { Booking } from "../_components/Booking";
export default async function BookEvent({ params: { id } }) {
  const event = await getSingleEvent(id);
  if (!event) {
    return null;
  }
  const stadium = await getSingleStadium(event.stadiumId);
  const imagePaths = event?.images.map((image) => image.url);
  imagePaths?.shift();
  console.log("imagePaths: ", imagePaths);
  return (
    <main className="">
      <EventCarousel images={imagePaths} />
      <div className="flex flex-col items-center">
        <EventDetailCard event={event} />
        <Booking stadium={stadium}></Booking>
      </div>
    </main>
  );
}

//about seat layout and seat selection
