import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import {Button} from "../styles/Button";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1)

  const setIncrease= () =>{
    amount < stock ? setAmount(amount + 1) : setAmount(stock)    //if amount is less than stock then set amount to amount + 1 else set amount to stock
  }

  /**
   * Decrease the product amount by one if it is greater than one
   * Otherwise set it to one
   */
  const setDecrease= () =>{
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }


  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((currCOlor, index) => {
            return (
              <button
                key={index}
                className={color === currCOlor ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: currCOlor }}
                onClick={() => setColor(currCOlor)}
              >
                {color === currCOlor ? (
                  <FaCheck className="checkStyle" />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart */}
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />

      <NavLink to="/cart">
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-right: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      outline: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
