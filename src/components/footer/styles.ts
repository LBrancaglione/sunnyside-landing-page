import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  background-color: #90d4c5;
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  .Logo {
    width: 15%;
  }
  .linklist {
    display: flex;
    flex-direction: row;
    gap: 50px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(51, 51, 51, 0.683);
    padding-top: 1%;
  }
  .linklist p:hover{
    color: #fff;
    cursor: pointer;
  }

  .iconslinks{
    display: flex;
    flex-direction: row;
    padding-top: 5%;
    gap: 30px;
  }
  .iconslinks img:hover{
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.8);
    cursor: pointer;
  }

  @media (max-width: 768px){
    padding-top: 15%;
    padding-bottom: 15%;
    .Logo{
        width: 50%;
    }
  }
`;
