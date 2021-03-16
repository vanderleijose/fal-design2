import styled, { css } from "styled-components";

import Img from "gatsby-image";

export const Container = styled.div`
  width: 100%;
  padding: 0 0;
  margin-right: auto;
  margin-left: auto;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
  margin-top: 9rem;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
export const TratamentoImg = styled(Img)`
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  @media (min-width: 576px) {
    width: 50rem;
  }

  @media (min-width: 992px) {
    width: 60rem;
  }
  @media (min-width: 1200px) {
    width: 80rem;
  }
`;

export const TratamentoInfo = styled.div``;

export const Tratamento = styled.div`
  position: relative;
  margin: 0 0 2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    ${(props) =>
      props.side === "left"
        ? css`
            justify-content: flex-end;
          `
        : css`
            justify-content: flex-start;
          `}
  }

  ${TratamentoInfo} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.3rem;

    padding: 1.6rem;
    color: #fff;
    opacity: 0.9555;

    width: 90%;
    transform: translateY(-20%);
    align-self: center;
    @media (min-width: 768px) {
      ${(props) =>
        props.side === "left"
          ? css`
              transform: translateX(-70%) translateY(-50%);
            `
          : css`
              transform: translateX(-30%) translateY(-50%);
            `}
      position: absolute;
      left: 50%;
      top: 50%;
      width: 40rem;
      min-height: 28rem;
    }
    @media (min-width: 1200px) {
      transform: translateX(-50%) translateY(-50%);
    }
    ${(props) =>
      props.type === "acupuntura" &&
      css`
        background: #f9844a;
      `}
    ${(props) =>
      props.type === "infertilidade" &&
      css`
        background: #277da1;
      `}
    ${(props) =>
      props.type === "meditacao" &&
      css`
        background: #43aa8b;
      `}
    ${(props) =>
      props.type === "menteCorpo" &&
      css`
        background: #577590;
      `}
    h3 {
      font-size: 3rem;
      line-height: 2.33333rem;
      letter-spacing: -0.0544444rem;
      color: rgb(255, 255, 255);
      padding: 0 0 2.2rem 0;
      font-family: "Josefin Sans", sans-serif;
      font-weight: 400;
    }
    p {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.3rem;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      width: 20rem;
      margin: 2rem auto 1rem;
      padding: 1rem;
      border: 0.1rem solid #fff;

      font-size: 1.6rem;
      text-decoration: none;
      color: #fff;

      cursor: pointer;

      > span {
        position: relative;
        font-weight: 500;
        color: #fff;
        font-size: 1.9rem;
        background-image: linear-gradient(
          90deg,
          var(#fff) 0%,
          var(#fff) 50%,
          var(#fff) 50%,
          var(#fff) 100%
        );
        background-repeat: repeat;
        background-size: 200%;
        background-position: 100% 0;
        -webkit-background-clip: text;
        background-clip: text;
        transition: 0.5s;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: #fff;

        transition: 0.5s;
      }

      &:hover {
        span {
          background-position: 0 0;
          ${(props) =>
            props.type === "acupuntura" &&
            css`
              color: #f9844a;
            `}
          ${(props) =>
            props.type === "infertilidade" &&
            css`
              color: #277da1;
            `}
          ${(props) =>
            props.type === "meditacao" &&
            css`
              color: #43aa8b;
            `}
          ${(props) =>
            props.type === "menteCorpo" &&
            css`
              color: #577590;
            `}
        }
        &::before {
          width: 100%;
        }
      }
    }
  }
`;
