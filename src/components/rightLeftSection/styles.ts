import styled from "styled-components";
import leftBackground from "../../images/desktop/image-stand-out.jpg";
import leftMobileBackground from "../../images/mobile/image-stand-out.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const rightContent = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .leftMain {
    padding: 0px 20%;
    text-align: left;
    h1 {
      font-size: 2rem;
    }
    p {
      color: rgba(48, 47, 47, 0.74);
      font-weight: 600;
      font-size: 20px;
      text-align: left;
    }
    .lineUnder {
      width: 120px;
      background: yellow;
      border: 5px solid #ff7361;
      border-radius: 5px;
      margin-top: -8px;
      display: none;
    }
    button {
      border: none;
      background: rgba(0, 0, 0, 0);
      font-size: 20px;
      font-weight: bold;
      padding: 0px;
      transition: all 0.5s;
    }
    button:hover {
      transform: scale(1.2);
      cursor: pointer;
      .lineUnder {
        display: block;
      }
    }
  }
  @media (max-width: 768px) {
    order: 1;
    .leftMain {
      padding: 0 5%;
      text-align: center;
      p {
        text-align: center;
      }
      .lineUnder {
        display: block;
      }
    }
  }
`;

export const leftContent = styled.div`
  width: 100%;
  background-image: url(${leftBackground});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    background-image: url(${leftMobileBackground});
    height: 600px;
    order: 0;
  }
`;
