import React from 'react';
import styled from 'styled-components';

const ImgEl = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

const Img = props => {
    return <ImgEl {...props} />;
};

export default Img;
