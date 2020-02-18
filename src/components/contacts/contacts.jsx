import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/icon';
import Text from '../typography/text';
import Divider from '../divider/divider';

const ContactsEl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 56px 0 65px;

    @media (min-width: 960px) {
        flex-direction: row;
        margin: 45px 0 56px;
    }

    .contacts__divider {
        display: flex;
        margin: 44px 0 45px;

        @media (min-width: 960px) {
            display: none;
        }
    }

    .contacts__divider--dw {
        display: none;

        @media (min-width: 960px) {
            display: flex;
            margin: 0 60px;
        }
    }
`;

const Menu = () => (
    <ContactsEl>
        <div className="contacts__item">
            <Text icon={<Icon src={Icon.type.PHONE} width={'16px'} />} noVerticalSpace={true}>
                020 3778 0274
            </Text>
        </div>
        <div className="contacts__divider">
            <Divider noMargins={true} bgColor={Divider.bgColor.DENIM80} />
        </div>

        <div className="contacts__divider--dw">
            <Divider noMargins={true} bgColor={Divider.bgColor.DENIM80} type="vertical" />
        </div>

        <div className="contacts__item">
            <Text icon={<Icon src={Icon.type.MAIL} width={'16px'} />} noVerticalSpace={true}>
                contact@iwoca.co.uk
            </Text>
        </div>
    </ContactsEl>
);

export default Menu;
