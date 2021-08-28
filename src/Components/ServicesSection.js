import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Kokemus"} span={"Kokemus"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={
              "Olen käyttänyt Html, Css, Flask, Pthon, React native, React route, javascript vanilla."
            }
          />
          <div className="mid-card"></div>
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
