import React from 'react';
import styled from 'styled-components';

const SectionSideEl = styled.aside`
    display: none;

    @media (min-width: 770px) {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`;

const SectionSide = props => <SectionSideEl>{props.children}</SectionSideEl>;

export default SectionSide;
