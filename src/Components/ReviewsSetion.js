import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";

function ReviewsSetion() {
  return (
    <ReviewsStyled>
      <InnerLayout>
        <div className="reviews">/></div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ReviewsSetion;
