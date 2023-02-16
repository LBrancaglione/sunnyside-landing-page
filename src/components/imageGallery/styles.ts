import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    img{
        width: 25%;
    }
    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding-top: 10%;
        img{
            width: 50%;
        }
    }
` 