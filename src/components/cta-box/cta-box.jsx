import React from 'react';
import styled from 'styled-components';

const CtaBoxEl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .cta-box__media + .cta-box__title {
        margin-top: 32px;
    }

    .cta-box__title + .cta-box__text {
        margin-top: 36px;
    }

    .cta-box__text + .cta-box__action {
        margin-top: 42px;
    }

    .cta-box__action + .cta-box__media {
        margin-top: 50px;
    }
`;

const CtaBox = props => <CtaBoxEl>{props.children}</CtaBoxEl>;

export default CtaBox;
