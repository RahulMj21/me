import React, { useEffect, useState } from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { FaRegUser, FaRegEnvelope, FaRegEdit } from "react-icons/fa";
import image from "../assets/images/contact.png";
import Loader from "../components/Loader";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { FaCircleNotch } from "react-icons/fa";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(true);
  const [sendingMail, setSendingMail] = useState(false);
  const [letterClass, setLetterClass] = useState("text-animate");
  const contactArray = ["C", "o", "n", "t", "a", "c", "t", " ", " ", "M", "e"];

  const handleSubmitMail = async (values) => {
    try {
      setSendingMail(true);
      const input = {
        from: values.email,
        subject: "From portfolio site",
        html: `
          <p>name: ${values.name}</p>
          <p>email: ${values.email}</p>
          <p>message: ${values.message}</p>
        `,
      };
      await axios.post(
        `${process.env.REACT_APP_MAIL_API_URI}/api/v1/send`,
        input
      );
      reset({ name: "", email: "", message: "" });
      return toast.success("message sent successfully");
    } catch (err) {
      return console.log(err);
    } finally {
      setSendingMail(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);

  return loading ? (
    <Loader setLoading={setLoading} />
  ) : (
    <section className="contact">
      <Toaster position="top-right" />
      <h3 className="tag html-open">
        {"<"}html{">"}
      </h3>
      <h3 className="tag body-open">
        {"<"}body{">"}
      </h3>

      <div className="content">
        <div className="contact__left">
          <h1 className="heading">
            <h3 className="tag h1-open">
              {"<"}h1{">"}
            </h3>
            <h3 className="tag h1-close">
              {"<"}/h1{">"}
            </h3>
            <AnimatedLetters
              letterClass={letterClass}
              letterArray={contactArray}
              idx={9}
            />
          </h1>
          <p className="para">
            I would love to work & collaborate with new people. If you have any
            project or queries in your mind, feel free to contact me.
          </p>
          <form
            onSubmit={handleSubmit(handleSubmitMail)}
            className="contact__form"
          >
            <div className="name-email-group">
              <div className="input-group">
                <FaRegUser />
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Name"
                  {...register("name")}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-group">
                <FaRegEnvelope />
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="input-group">
              <FaRegEdit />
              <input
                placeholder="Message"
                type="text"
                name="message"
                required
                id="message"
                {...register("message")}
              />
              <label htmlFor="message">Message</label>
            </div>
            <button
              type="submit"
              disabled={sendingMail}
              className={`btn-brand ${sendingMail ? "loading" : ""}`}
            >
              Submit <FaCircleNotch />
            </button>
          </form>
        </div>
        <div className="contact__right">
          <img src={image} alt="contact" className="contact__image" />
        </div>
      </div>

      <h3 className="tag body-close">
        {"<"}/body{">"}
      </h3>
      <h3 className="tag html-close">
        {"<"}/html{">"}
      </h3>
    </section>
  );
};

export default Contact;
