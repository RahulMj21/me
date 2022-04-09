import React, { useEffect, useState } from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { FaRegUser, FaRegEnvelope, FaRegEdit } from "react-icons/fa";
import image from "../assets/images/contact.png";
import Loader from "../components/Loader";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState("text-animate");
  const [email, setEmail] = useState();
  const contactArray = ["C", "o", "n", "t", "a", "c", "t", " ", " ", "M", "e"];

  const handleSubmit = (e) => {
    e.preventDefault();
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
            I'm available to freelance. If you have any project in mind or{" "}
            <br /> have any queries feel free to contact me.
          </p>
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="name-email-group">
              <div className="input-group">
                <FaRegUser />
                <input type="text" required name="name" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-group">
                <FaRegEnvelope />
                <input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className={email ? "active" : ""} htmlFor="email">
                  Email
                </label>
              </div>
            </div>
            <div className="input-group">
              <FaRegEdit />
              <input type="text" name="message" required />
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="btn-brand">
              Submit
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
