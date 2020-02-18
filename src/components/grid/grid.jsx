import React from 'react';
import styled from 'styled-components';

const GridEl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .grid__item + .grid__item {
        margin-top: 44px;
    }

    @media (min-width: 960px) {
        flex-direction: row;

        .grid__item {
            margin: 0 40px;
            max-width: 400px;
        }

        .grid__item + .grid__item {
            margin-top: 0px;
        }
    }
`;

const Grid = props => {
    return (
        <GridEl className="grid">
            {React.Children.toArray(props.children)
                .filter(Boolean)
                .map((item, index) => (
                    <div className="grid__item" key={`${index}`}>
                        {item}
                    </div>
                ))}
        </GridEl>
    );
};

export default Grid;
