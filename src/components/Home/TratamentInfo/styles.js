import styled from "styled-components";
import media from "styled-media-query";

import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  /* background: #fff; */

  &::before {
    content: "";
    position: absolute;
    height: 25rem;
    width: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 0;
  }
`;

export const TreatmentsImg = styled(BackgroundImage)``;
export const TreatmentsBg = styled(Img)``;

export const Description = styled.div`
  width: 100%;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  min-height: 25rem;
  z-index: 1;

  h2 {
    font-family: "Josefin Sans", sans-serif;
    font-size: 3rem;
    font-weight: 500;
    padding: 0 0 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 3rem;
    padding: 0 1.6rem;
  }
  ${media.lessThan("1295px")`
   border-radius: 0 0 .5rem .5rem;
  `}
`;

export const TreatmentsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas: repeat(4, 1fr);

  padding: 1.6rem;
  background: #fff;
  margin: auto;
  ${TreatmentsImg} {
    width: 30rem;
    height: 20rem;
    margin: 0 0 1.6rem;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    justify-self: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.5);
      width: 100%;
      height: 100%;
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
      h3 {
        font-family: "Lora", serif;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
        font-style: italic;
        margin: 0 0 1.6rem;
      }
      a {
        text-decoration: none;
        color: #fff;
        padding: 1rem;
        background: ${({ theme }) => theme.colors.primary};
      }
    }
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      div {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  ${media.greaterThan("medium")`
    width: 768px;  
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: repeat(2, 1fr);
    grid-gap: 1.6rem;   
    ${TreatmentsImg} {
    width: 30rem;
    height: 20rem;
    margin: 0 0 1.6rem;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    justify-self: center; 
    }
  `}
`;
export const TreatmentsBgBox = styled.div`
  position: relative;
  clip-path: circle(40%);
  ${TreatmentsBg} {
    width: 100%;
  }
  ${media.greaterThan("small")`
    width: 45rem;
    margin: auto;
    ${TreatmentsBg} {
      width: 100%;
      }   
  `}
  ${media.greaterThan("1024px")`
   width: 60rem;
    ${TreatmentsBg} {
        width: 100%;
      }   
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  margin: auto;
  width: 95vw;
  ${media.greaterThan("1024px")`
    max-width: 1320px; 
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;  
  `}
`;
