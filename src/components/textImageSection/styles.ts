import styled from "styled-components";
import leftBackground from "../../images/desktop/image-graphic-design.jpg";
import rightBackground from "../../images/desktop/image-photography.jpg";
import leftMobileBackground from "../../images/mobile/image-graphic-design.jpg";
import rightMobileBackground from "../../images/mobile/image-photography.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  .leftContent {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url(${leftBackground});
    background-size: cover;
    background-position: center;

    .leftText {
      text-align: center;
      padding: 10% 20%;
      color: rgba(51, 51, 51, 0.683);
      

      h1 {
        font-size: 35px;
      }

      p {
        font-size: 13px;
        font-weight: bold;
      }
    }
    @media (max-width: 768px){
        background-image: url(${leftMobileBackground});
        .leftText{
            padding: 10% 5%;
        }
    }
  }

  .rightContent {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url(${rightBackground});
    background-size: cover;
    background-position: center;

    .rightText {
    text-align: center;
    padding: 10% 20%;
    color: rgba(51, 51, 51, 0.683);
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 13px;
      font-weight: bold;
    }
  }

    @media (max-width: 768px){
        background-image: url(${rightMobileBackground});
        .rightText{
            padding: 10% 5%;
        }
    }
  }

  @media (max-width: 768px){
    flex-direction: column;
  }
`;
