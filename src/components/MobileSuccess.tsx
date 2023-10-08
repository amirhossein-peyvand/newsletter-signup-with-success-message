import { useMediaQuery } from "react-responsive";
import successIcon from "../assets/icon-success.svg";
import "../sass/MobileSuccess.scss";
import DesktopSuccess from "./DesktopSuccess";

const MobileSuccess = () => {
  const isBiggerThan700px = useMediaQuery({ query: "(min-width:700px)" });
  const mobileSuccess = (
    <article className="mobileSuccessCard">
      <section>
        <img src={successIcon} alt="successIcon" />
        <h2 className="title">Thanks for subscribing!</h2>
        <p className="desc">
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </section>
      <button className="btn">Dismiss message</button>
    </article>
  );

  return <>{isBiggerThan700px ? <DesktopSuccess /> : mobileSuccess}</>;
};

export default MobileSuccess;
