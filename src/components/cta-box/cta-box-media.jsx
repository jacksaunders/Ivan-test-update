import React from 'react';
import styled from 'styled-components';

const CtaBoxMediaEl = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-width: 770px) {
        justify-content: ${props => (props.turnLeftOnDesktop ? 'flex-start' : 'center')};
    }
`;

const CtaBoxMediaElMobile = styled.span`
    @media (min-width: 1220px) {
        display: none;
    }
`;

const CtaBoxMediaElDesktop = styled.span`
    display: none;

    @media (min-width: 1220px) {
        display: inline;
    }
`;

const CtaBoxMedia = props => (
    <CtaBoxMediaEl className="cta-box__media" {...props}>
        {props.children}

        <CtaBoxMediaElMobile>{props.mobileOnlyContent}</CtaBoxMediaElMobile>

        <CtaBoxMediaElDesktop>{props.desktopOnlyContent}</CtaBoxMediaElDesktop>
    </CtaBoxMediaEl>
);

export default CtaBoxMedia;
