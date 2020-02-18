import React from 'react';
import styled from 'styled-components';

const CtaBoxTextEl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (min-width: 770px) {
        text-align: ${props => (props.turnLeftOnDesktop ? 'left' : 'center')};
    }
`;

const CtaBoxText = props => (
    <CtaBoxTextEl className="cta-box__text" {...props}>
        {props.children}
    </CtaBoxTextEl>
);

export default CtaBoxText;
