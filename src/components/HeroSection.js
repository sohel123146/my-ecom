import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({MyData}) => {
    const { name } = MyData
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <div className="intro-data">Welcome to</div>
            <h1> {name} </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              aliquam et eius repellat eos quibusdam ipsum modi quo, numquam vel
              esse ut dolores iure aut optio deleniti minus error delectus.
            </p>
            <NavLink>
              <Button className="btn">Shop Now</Button>
            </NavLink>
          </div>
          {/* our homepage image */}
          <div className="hero-section-image">
            <figure>
              <img
                className="img-style"
                src="./images/hero.jpg"
                alt="family-shopping"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0; /* Fixed margin */
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold; /* Fixed typo */
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4); /* Fixed typo */
    }
  }
`;

export default HeroSection;
