import React from 'react';
import styled from 'styled-components';
import { Colors } from '../themes/themes';

const H2EL = styled.h2`
    color: ${Colors.TYPOGRAPHY.H2.PRIMARY};
    font-size: 24px;
    line-height: 120%;
    font-weight: bold;
    margin: 0;
`;

const H2 = props => <H2EL {...props}>{props.children}</H2EL>;

export default H2;
