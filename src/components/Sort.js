import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products } =
    useFilterContext();

  return (
    <Wrapper className="sort-section">
      {/* 1st column */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={grid_view ? "sort-btn" : "active sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>

      {/* 2nd column */}
      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>{" "}
      </div>

      {/* 3rd column */}
      <div className="sort-selection">dropdown</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 1rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: lightgray;
      border-radius: 10px;
    }

    .icon {
      font-size: 1.6rem;
    }

    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection {
    .sort-selection--style {
      padding: 0.5rem;
      cursor: pointer;

      .sort-selection--option {
        padding: 0.5rem 0;
        cursor: pointer;
        height: 2rem;
        padding: 10px;
      }
    }
  }
`;

export default Sort;
