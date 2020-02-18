import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/icon/icon';

const PartnerListEl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .partners-list__item {
        display: flex;
        justify-content: center;
    }

    .partners-list__item + .partners-list__item {
        margin-top: 65px;
    }

    .partners-list__column + .partners-list__column {
        margin-top: 65px;
    }

    @media (min-width: 960px) {
        flex-direction: row;

        .partners-list__item {
            margin: 0 40px;
            max-width: 400px;
        }

        .partners-list__column {
            order: 1;
        }

        .partners-list__column + .partners-list__column {
            order: 2;
        }

        .partners-list__column + .partners-list__column--move-center-dw {
            order: 1;
        }

        .partners-list__item + .partners-list__item {
            margin-top: 45px;
        }

        .partners-list__column + .partners-list__column {
            margin-top: 0;
        }
    }
`;

const partners = [
    <React.Fragment>
        <div className="partners-list__item">
            <Icon src={Icon.partner.FORBES} width={'108px'} />
        </div>
        <div className="partners-list__item">
            <Icon src={Icon.partner.FINANCIAL_TIMES} width={'208px'} />
        </div>
    </React.Fragment>,
    <React.Fragment>
        <div className="partners-list__item">
            <Icon src={Icon.partner.WIRED} width={'125px'} />
        </div>
        <div className="partners-list__item">
            <Icon src={Icon.partner.YAHOO_FINANCE} width={'188px'} />
        </div>
    </React.Fragment>,
    <React.Fragment>
        <div className="partners-list__item">
            <Icon src={Icon.partner.TRUSTPILOT_SMALL} width={'172px'} />
        </div>
    </React.Fragment>,
];

const PartnerList = props => {
    return (
        <PartnerListEl className="partners-list">
            {partners.map((partner, index, list) => (
                <div
                    className={
                        index === list.length - 1
                            ? 'partners-list__column partners-list__column--move-center-dw'
                            : 'partners-list__column'
                    }
                    key={index}
                >
                    {partner}
                </div>
            ))}
        </PartnerListEl>
    );
};

export default PartnerList;
