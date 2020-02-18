import React from 'react';
import styled from 'styled-components';
import { Colors } from '../themes/themes';

const TextEl = styled.p`
    color: ${Colors.TYPOGRAPHY.TEXT.PRIMARY};
    font-size: 18px;
    line-height: ${props => (props.noVerticalSpace ? '100%' : '150%')};
    font-weight: 500;
    margin: 0;

    .text__icon {
        display: inline-block;
        vertical-align: middle;
        margin-right: ${props => (props.iconGap === 'lg' ? '12px' : '8px')};
    }
`;

const Text = props => (
    <TextEl {...props}>
        {props.icon ? <span className="text__icon">{props.icon}</span> : null}
        {props.children}
    </TextEl>
);

export default Text;
