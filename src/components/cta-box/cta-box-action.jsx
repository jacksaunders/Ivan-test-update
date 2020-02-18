import React from 'react';
import styled from 'styled-components';

const CtaBoxActionEl = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-width: 770px) {
        justify-content: ${props => (props.turnLeftOnDesktop ? 'flex-start' : 'center')};
    }
`;

const CtaBoxAction = props => (
    <CtaBoxActionEl className="cta-box__action" {...props}>
        {props.children}
    </CtaBoxActionEl>
);

export default CtaBoxAction;
