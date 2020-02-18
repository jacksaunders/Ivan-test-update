import React from 'react';
import styled from 'styled-components';

const CtaBoxEl = styled.div`
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

const CtaBox = props => (
    <CtaBoxEl className="cta-box__title" {...props}>
        {props.children}
    </CtaBoxEl>
);

export default CtaBox;
