import iconList from "../assets/icon-list.svg";
import illustrationMobile from "../assets/illustration-sign-up-mobile.svg";
import "../sass/MobileCard.scss";

const MobileCard = () => {
  return (
    <article className="mobileCard">
      <section className="imageContainer">
        <img src={illustrationMobile} alt="illustrationMobile" />
      </section>
      <section className="content">
        <h2 className="title">Stay updated!</h2>
        <p className="desc">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
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
            <input type="email" placeholder="email@company.com" />
          </div>
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </section>
    </article>
  );
};

export default MobileCard;
