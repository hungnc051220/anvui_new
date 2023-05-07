import BusTicket from "@/components/home/busTicket/BusTicket";
import CardSlider from "@/components/home/cardSlider/CardSlider";
import Download from "@/components/home/download/Download";
import Feedback from "@/components/home/feedback/Feedback";
import Lookup from "@/components/home/lookup/Lookup";
import Rules from "@/components/home/rules/Rules";
import Search from "@/components/home/search/Search";

export default function Home() {
  return (
    <>
      <Search />
      <Download />
      <CardSlider />
      <Lookup />
      <BusTicket />
      <Rules />
      <Feedback />
    </>
  );
}
