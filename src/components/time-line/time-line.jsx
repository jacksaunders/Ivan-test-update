import React from 'react';
import styled from 'styled-components';

const TimeLineEl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .time-line__item {
        padding: 0 40px;
    }

    .time-line__item + .time-line__item {
        margin-top: 42px;
    }

    @media (min-width: 960px) {
        .time-line__item {
            padding: 0;
        }

        .time-line__item--last .time-line-item__line {
            display: none;
        }
    }
`;

const TimeLine = props => {
    return (
        <TimeLineEl className="time-line">
            {React.Children.toArray(props.children)
                .filter(Boolean)
                .map((item, index, list) => (
                    <div
                        className={
                            index === list.length - 1
                                ? 'time-line__item time-line__item--last'
                                : 'time-line__item'
                        }
                        key={`${index}`}
                    >
                        {item}
                    </div>
                ))}
        </TimeLineEl>
    );
};

export default TimeLine;
