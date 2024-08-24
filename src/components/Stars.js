import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
const Stars = ({ stars, reviews }) => {
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5; //to show star when it is in decimals
    return (
      <span key={index}>
        {stars > index + 1 ? (
          <FaStar className="icon" />
        ) : stars > number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStars}
        <p>({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }

    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;
export default Stars;
