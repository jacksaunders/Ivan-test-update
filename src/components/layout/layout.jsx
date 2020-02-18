import React from 'react';
import styled from 'styled-components';

const LayoutEl = styled.div`
    max-width: 1210px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .layout__item {
        display: block;
        width: 100%;
    }

    .layout__item + .layout__item {
        margin-top: 56px;
    }
`;

const Layout = props => {
    return (
        <LayoutEl className="layout">
            {React.Children.toArray(props.children)
                .filter(Boolean)
                .map((item, index) => (
                    <div className="layout__item" key={`${index}`}>
                        {item}
                    </div>
                ))}
        </LayoutEl>
    );
};

export default Layout;
