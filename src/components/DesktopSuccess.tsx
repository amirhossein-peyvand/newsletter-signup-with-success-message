import successIcon from "../assets/icon-success.svg";
import "../sass/DesktopSuccess.scss";

const DesktopSuccess = () => {
  return (
    <article className="desktopSuccessCard">
      <img src={successIcon} alt="successIcon" />
      <h1 className="title">Thanks for subscribing!</h1>
      <p className="desc">
        A confirmation email has been sent to{" "}
        <strong>ash@loremcompany.com</strong>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button className="btn">Dismiss message</button>
    </article>
  );
};

export default DesktopSuccess;
