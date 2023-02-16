import styled from "styled-components";
import headerBackground from "./images/desktop/image-header.jpg"
import headerMBBackground from "./images/mobile/image-header.jpg"

export const Body = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Header = styled.header`
  height: 100vh;
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: center;

 .bannerContent{
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    text-align: center;
    letter-spacing: 10px;
    font-size: 5rem;
    color: #FFF;
  }
  img{
    height: 120px;
    width: 40px;
  }
 }

  @media (max-width: 768px){
    background-image: url(${headerMBBackground});
  }
`
