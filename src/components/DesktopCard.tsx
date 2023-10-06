import iconList from "../assets/icon-list.svg";
import illustrationDesktop from "../assets/illustration-sign-up-desktop.svg";
import "../sass/DesktopCard.scss";

const DesktopCard = () => {
  return (
    <article className="desktopCard">
      <section className="content">
        <h2 className="title">Stay updated!</h2>
        <p className="desc">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="list">
          <li>
            <img src={iconList} alt="iconList" />
            <span>Product discovery and building what matters</span>
          </li>
          <li>
            <img src={iconList} alt="iconList" />
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li>
            <img src={iconList} alt="iconList" />
            <span>And much more!</span>
          </li>
        </ul>
        <form>
          <div className="formGroup">
            <label htmlFor="email">Email address</label>
            <input id="email" type="text" placeholder="email@company.com" />
          </div>
          <button type="submit" className="btn">
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
      <section className="imageContainer">
        <img src={illustrationDesktop} alt="illustrationDesktop" />
      </section>
    </article>
  );
};

export default DesktopCard;
