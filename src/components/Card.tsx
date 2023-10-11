import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { z } from "zod";
import iconList from "../assets/icon-list.svg";
import illustrationDesktop from "../assets/illustration-sign-up-desktop.svg";
import illustrationMobile from "../assets/illustration-sign-up-mobile.svg";
import message from "../errorMessage";
import "../sass/DesktopCard.scss";
import "../sass/MobileCard.scss";

const schema = z.object({
  email: z
    .string()
    .email({ message })
    .min(14, { message })
    .max(45, { message }),
});
type FormData = z.infer<typeof schema>;

const Card = () => {
  const isBiggerThan700px = useMediaQuery({ query: "(min-width:700px)" });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const desktopCard = (
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroup">
            <div>
              <label htmlFor="email">Email address</label>
              {errors.email && (
                <p style={{ color: "hsl(4, 100%, 67%)" }}>
                  {errors.email.message}
                </p>
              )}
            </div>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="email@company.com"
            />
          </div>
          <button type="submit" className="btn">
            {isValid ? (
              <Link
                to={"/success"}
                style={{ color: "hsl(0, 0%, 100%)", textDecoration: "none" }}
              >
                Subscribe to monthly newsletter
              </Link>
            ) : (
              "Subscribe to monthly newsletter"
            )}
          </button>
        </form>
      </section>
      <section className="imageContainer">
        <img src={illustrationDesktop} alt="illustrationDesktop" />
      </section>
    </article>
  );

  const mobileCard = (
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroup">
            <div>
              <label htmlFor="email">Email address</label>
              {errors.email && (
                <p style={{ color: "hsl(4, 100%, 67%)" }}>
                  {errors.email.message}
                </p>
              )}
            </div>
            <input
              {...register("email")}
              type="email"
              placeholder="email@company.com"
            />
          </div>
          <button type="submit">
            {isValid ? (
              <Link
                to={"/success"}
                style={{ color: "hsl(0, 0%, 100%)", textDecoration: "none" }}
              >
                Subscribe to monthly newsletter
              </Link>
            ) : (
              "Subscribe to monthly newsletter"
            )}
          </button>
        </form>
      </section>
    </article>
  );

  return <>{isBiggerThan700px ? desktopCard : mobileCard}</>;
};

export default Card;
