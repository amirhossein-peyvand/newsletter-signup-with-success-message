import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import iconList from "../assets/icon-list.svg";
import illustrationDesktop from "../assets/illustration-sign-up-desktop.svg";
import message from "../errorMessage";
import "../sass/DesktopCard.scss";

const schema = z.object({
  email: z
    .string()
    .email({ message })
    .min(14, { message })
    .max(45, { message }),
});
type FormData = z.infer<typeof schema>;

const DesktopCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

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
