/* eslint-disable jsx-a11y/iframe-has-title */
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../styles/Button";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .common-heading {
      margin-top: -4rem;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  const [state, handleSubmit] = useForm("meojlvbv");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.22894994385!2d78.07767044666471!3d17.412076731336708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1724125111442!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="container">
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="contact-inputs">
            <input
              type="text"
              id="name"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="username"
              field="name"
              errors={state.errors}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <Button type="submit" disabled={state.submitting}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

