import React from 'react';
import styled from 'styled-components';
import { Colors } from '../themes/themes';

const TIMELINE_ITEM_MARGIN_LEFT_DW = 64;

const TTIMELINE_ITEM_LINE_JOINT_STYLES = `
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: ${Colors.BACKGROUND.TIMELNE_ITEM_LINE.PRIMARY};
    transform: translateX(-2px);
`;

const TimeLineEl = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .time-line-item__line {
        display: none;
    }

    .time-line-item__content {
        max-width: 480px;
    }

    .time-line-item__number {
        display: block;
        text-align: center;
    }

    .time-line-item__title {
        display: block;
        text-align: center;
    }

    .time-line-item__text {
        display: block;
        text-align: center;
    }

    .time-line-item__number + .time-line-item__title {
        margin-top: 22px;
    }

    .time-line-item__title + .time-line-item__text {
        margin-top: 28px;
    }

    @media (min-width: 960px) {
        .time-line-item__line {
            position: absolute;
            left: 10px;
            top: 48px;
            bottom: 8px;
            display: block;
            background-color: ${Colors.BACKGROUND.TIMELNE_ITEM_LINE.PRIMARY};
            width: 1px;

            &::before {
                ${TTIMELINE_ITEM_LINE_JOINT_STYLES}
            }

            &::after {
                ${TTIMELINE_ITEM_LINE_JOINT_STYLES}
                position: absolute;
                bottom: 0;
            }
        }

        .time-line-item__content {
            max-width: none;
            margin-bottom: 50px;
        }

        .time-line-item__number {
            position: absolute;
            top: -6px;
            text-align: left;
        }

        .time-line-item__title {
            display: flex;
            align-items: center;
        }

        .time-line-item__title {
            text-align: left;
        }

        .time-line-item__text {
            margin-left: ${TIMELINE_ITEM_MARGIN_LEFT_DW}px;
            text-align: left;
        }

        .time-line-item__number + .time-line-item__title {
            margin-left: ${TIMELINE_ITEM_MARGIN_LEFT_DW}px;
            margin-top: 0;
        }
    }
`;

const TimeLine = props => {
    return (
        <TimeLineEl className="time-line-item">
            <div className="time-line-item__content">
                {props.number ? (
                    <span className="time-line-item__number">{props.number}</span>
                ) : null}

                {props.title ? <span className="time-line-item__title">{props.title}</span> : null}

                {props.content ? <div className="time-line-item__text">{props.content}</div> : null}

                <div className="time-line-item__line"></div>
            </div>
        </TimeLineEl>
    );
};

export default TimeLine;
