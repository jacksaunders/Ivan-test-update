import React from 'react';
import styled from 'styled-components';
import { Colors, Palette as Color, setBgColor } from '../themes/themes';

const SectionEl = styled.section`
    width: 100%;
    display: flex;
    flex-direction: ${props => (props.horizontal ? 'column' : 'row')};
    justify-content: center;
    background-color: ${props =>
        props.bgColor && !props.bgMargin ? setBgColor(props.bgColor) : null};
    border-radius: 8px;

    ${props => props.bgMargin ? `
        background: linear-gradient(to bottom, transparent 0%, transparent ${props.bgMargin}, ${props.bgColor} ${props.bgMargin}, ${props.bgColor} 100%) no-repeat;
        ` : null}

    ${props =>
        props.fullWidth
            ? `
        width: calc(100% + 40px);
        margin:  0 -20px;
    `
            : null}

    ${props =>
        props.bgColor
            ? `
        padding:  64px 20px;
    `
            : null}

    ${props =>
        props.vPadded
            ? `
        padding: 64px 0 128px;
    `
            : null}

    ${props =>
        props.halfSize
            ? `
        .section__content {
            max-width: 576px;
            margin: 0 auto;
            text-align: center;
        }
    `
            : null}

    .section__media {
        display: flex;
        justify-content: center;
    }

    .section__title {
        max-width: 80%;
        margin: 0 auto;
        text-align: center;
    }

    .section__content {
        display: flex;
    }

    .section__divider {
        width: 60px;
        height: 2px;
        background: ${Colors.BACKGROUND.DIVIDER.PRIMARY};
        margin: 0 auto;
    }

    .section__media + .section__title {
        margin-top: 52px;
    }

    .section__title + .section__content {
        margin-top: 52px;
    }

    .section__title + .section__divider {
        margin-top: 40px;
    }

    .section__divider + .section__content {
        margin-top: 52px;
    }

    @media(min-width: 770px) {
        justify-content: flex-start;
    }
`;

const Section = props => {
    return (
        <SectionEl
            horizontal={props.horizontal}
            vPadded={props.vPadded}
            halfSize={props.halfSize}
            fullWidth={props.fullWidth}
            bgColor={props.bgColor}
            bgMargin={props.bgMargin}
        >
            {props.media ? <div className="section__media">{props.media}</div> : null}

            {props.title ? <div className="section__title">{props.title}</div> : null}

            {props.title && props.hasDivider ? <div className="section__divider"></div> : null}

            {props.content ? <div className="section__content">{props.content}</div> : null}

            {props.children}
        </SectionEl>
    );
};

Section.bgColor = Color;
Section.defaultProps = {
    hasDivider: true,
};

export default Section;
