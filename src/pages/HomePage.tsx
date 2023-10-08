import { useMediaQuery } from "react-responsive";
import DesktopCard from "../components/DesktopCard";
import MobileCard from "../components/MobileCard";

const HomePage = () => {
  const isBiggerThan700px = useMediaQuery({ query: "(min-width:700px)" });
  return <>{isBiggerThan700px ? <DesktopCard /> : <MobileCard />}</>;
};

export default HomePage;
