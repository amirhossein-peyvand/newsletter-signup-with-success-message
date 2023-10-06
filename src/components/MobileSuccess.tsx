import successIcon from "../assets/icon-success.svg";
import "../sass/MobileSuccess.scss";

const MobileSuccess = () => {
  return (
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
};

export default MobileSuccess;
