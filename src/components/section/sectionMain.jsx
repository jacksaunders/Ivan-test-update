import React from 'react';
import styled from 'styled-components';

const SectionMainEl = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 770px) {
        width: 50%;
    }
`;

const SectionMain = props => <SectionMainEl>{props.children}</SectionMainEl>;

export default SectionMain;
