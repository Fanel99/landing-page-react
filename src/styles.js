/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const navigationHeader = css`
  background: linear-gradient(0deg, #e7daed, #d8bfe3);
  border: 1px solid #5c4678;
  border-top: none;
  border-bottom: none;
`;

export const container = css`
  max-width: 1128px;
  margin: 0 auto;
  width: 100%;

  h1 {
    font-size: 64px;
    font-weight: 600;
    color: #391f5b;
  }

  p {
    margin: 32px auto 64px;
    width: 50%;
    color: #76226f;
    text-shadow: none;
    font-size: 21px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.04em;
  }
`;

export const navigation = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 42px;
`;

export const navUl = css`
  display: flex;
  list-style: none;
  margin-right: 30px;
  align-items: center;

  a {
    margin-right: 32px;
    text-decoration: none;
    color: #76226f;
    font-size: 16px;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const sectionHero = css`
  padding-top: 128px;
  background: linear-gradient(180deg, #e7daed, #d8bfe3);
  border: 1px solid #5c4678;
  border-top: none;
  text-align: center;
  min-height: 100vh;
`;

export const button = css`
  margin: 0 auto;

  padding: 18px 34px;
  font-size: 21px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(179, 132, 201, 0.84),
    rgba(57, 31, 91, 0.84) 50%
  );
  box-shadow: 0 2px 2px rgb(57 31 91 / 24%), 0 8px 12px rgb(179 132 201 / 40%);
  border-radius: 42px;

  text-decoration: none;
  color: #fff;
  margin-bottom: 100px;

  letter-spacing: 0.04em;
  text-shadow: 0 0 4px hsl(0deg 0% 100% / 40%), 0 0 12px hsl(0deg 0% 100% / 20%),
    1px 1px 4px rgb(57 31 91 / 60%), 4px 4px 16px rgb(57 31 91 / 32%);

  &:hover {
    background-color: #c8a2c8;
    transform: scale(1.1);
  }
`;

export const heroBrowsing = css`
  position: relative;
  z-index: 2;
  img {
    max-width: 100%;
    :last-child {
      width: 91%;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
    }
  }
`;

export const sectionFeatures = css`
  background: #391f5b;
  padding-top: 300px;
  position: relative;
  padding-bottom: 128px;
  margin-top: -150px;
`;

export const split = css`
  margin-left: 40px;
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const splitImg = css`
  width: 40%;
  margin: 0;

  img {
    width: 100%;
    height: auto;
  }
`;

export const splitText = css`
  width: 55%;
  height: auto;

  h2 {
    font-size: 32px;
    font-weight: 700;
    text-shadow: 0 0 4px hsl(0deg 0% 100% / 30%),
      0 0 12px hsl(0deg 0% 100% / 20%), 1px 1px 4px rgb(57 31 91 / 60%),
      4px 4px 16px rgb(57 31 91 / 32%);
    letter-spacing: 0.04em;
    color: #fff;
    margin-bottom: 24px;
  }

  p {
    font-size: 21px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.04em;
    color: #b384c9;
    text-shadow: #1b0835 0 1px 1px;
    width: 100%;
    margin: 0;

    :last-child {
      font-size: 21px;
      color: #fff;
      text-decoration: unset;
      margin-top: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const spliter = css`
  margin: 64px 0;
  height: 2px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0.4),
    rgba(179, 132, 201, 0)
  );
`;

export const spliterReverse = css`
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0),
    rgba(179, 132, 201, 0.4)
  );
  margin: 64px 0;
  width: 100%;
  height: 2px;
`;

export const movieYoutube = css`
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
`;
