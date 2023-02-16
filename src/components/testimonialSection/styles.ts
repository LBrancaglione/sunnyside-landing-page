import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10%;
  padding-bottom: 10%;

  h1 {
    color: rgba(51, 51, 51, 0.7);
    font-size: 35px;
    letter-spacing: 2px;
  }
`;

export const Testemunials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 0 10%;
  .ClientTestemunialCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .cardHead {
      img {
        padding: 10%;
        width: 80px;
        border-radius: 100px;
      }
      p {
        font-size: 15px;
        color: #333;
        font-weight: 500;
      }
    }

    .cardFooter {
      padding-top: 5%;
      color: #333;
      h1 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
        color: rgba(51, 51, 51, 0.603);
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
