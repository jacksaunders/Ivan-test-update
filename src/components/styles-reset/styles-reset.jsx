import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Colors } from '../themes/themes';

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: visible;
    overflow-x: hidden;
  }
  body {
    color: ${Colors.TYPOGRAPHY.TEXT.PRIMARY};
    overflow-x: hidden;
  }
`;

export default ({ children }) => (
    <React.Fragment>
        <GlobalStyle theme="purple" />
    </React.Fragment>
);
