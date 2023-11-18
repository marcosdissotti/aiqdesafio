import { createGlobalStyle, css } from 'styled-components';

import NunitoRegularTtf from '@assets/fonts/Nunito-Regular.ttf';
import NunitoRegularWoff from '@assets/fonts/Nunito-Regular.woff';
import NunitoRegularWoff2 from '@assets/fonts/Nunito-Regular.woff2';

import NunitoSemiBold from '@assets/fonts/Nunito-SemiBold.ttf';
import NunitoSemiBoldWoff from '@assets/fonts/Nunito-SemiBold.woff';
import NunitoSemiBoldWoff2 from '@assets/fonts/Nunito-SemiBold.woff2';

import NunitoBold from '@assets/fonts/Nunito-Bold.ttf';
import NunitoBoldWoff from '@assets/fonts/Nunito-Bold.woff';
import NunitoBoldWoff2 from '@assets/fonts/Nunito-Bold.woff2';

import NunitoExtraBold from '@assets/fonts/Nunito-ExtraBold.ttf';
import NunitoExtraBoldWoff from '@assets/fonts/Nunito-ExtraBold.woff';
import NunitoExtraBoldWoff2 from '@assets/fonts/Nunito-ExtraBold.woff2';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      outline: 0;
    }

    html {
      @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 93.74%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body,
    #root {
      max-width: 100%;
      min-height: calc(100vh);

      font-size: 16px;
      font-family: 'Nunito', sans-serif;
      background: ${theme.colors.white};
      -webkit-font-smoothing: antialiased;
    }

    button {
      border: none;

      cursor: pointer;
    }

    fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      min-width: 0;
    }

    @font-face {
      font-family: 'Nunito';
      src:
        url(${NunitoRegularWoff2}) format('woff2'),
        url(${NunitoRegularWoff}) format('woff'),
        url(${NunitoRegularTtf}) format('truetype');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Nunito';
      src:
        url(${NunitoSemiBoldWoff2}) format('woff2'),
        url(${NunitoSemiBoldWoff}) format('woff'),
        url(${NunitoSemiBold}) format('truetype');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Nunito';
      src:
        url(${NunitoBoldWoff2}) format('woff2'),
        url(${NunitoBoldWoff}) format('woff'),
        url(${NunitoBold}) format('truetype');
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: 'Nunito';
      src:
        url(${NunitoExtraBoldWoff2}) format('woff2'),
        url(${NunitoExtraBoldWoff}) format('woff'),
        url(${NunitoExtraBold}) format('truetype');
      font-weight: 800;
      font-style: normal;
    }
  `}
`;
