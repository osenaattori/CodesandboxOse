import React from "react";
import styled from "styled-components";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="right-content">
        <h4>
          Hei <span> </span>
        </h4>
        <p className="paragraph">
          Opiskelen It-Tukihenkilöksi, mutta tykkään koodailla nettisivuja ja
          pelejä. Olen myös kiinnostunut hakkeröinnistä ja siitä miten laitteet
          toimii.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Nimi</p>
            <p>Ikä</p>
            <p>Maa </p>
            <p>Kielet </p>
            <p>Asuinpaikka</p>
          </div>
          <div className="info">
            <p>: Oskari Hirvonen</p>
            <p>: 15 </p>
            <p>: Suomi </p>
            <p>: Finnish and English </p>
            <p>: Suomi, Oulu</p>
          </div>
        </div>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
