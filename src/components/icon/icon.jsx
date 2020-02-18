import React from 'react';

import IconYahooFinance from '../../icons/icon-partner-yahoo-finance.svg';
import IconWired from '../../icons/icon-partner-wired.svg';
import IconFinancialTimes from '../../icons/icon-partner-financial-times.svg';
import IconForbers from '../../icons/icon-partner-forbes.svg';
import IconTrustPilot from '../../icons/icon-partner-trustpilot.svg';
import IconTrustPilotSm from '../../icons/icon-partner-trustpilot-sm.svg';
import IconWallet from '../../icons/icon-wallet.svg';
import IconNoFees from '../../icons/icon-no-fees.svg';
import IconFastThunder from '../../icons/icon-fast-thunder.svg';
import IconPhone from '../../icons/icon-telephone.svg';
import IconMail from '../../icons/icon-mail.svg';

const Type = {
    WALLET: props => <IconWallet {...props} />,
    NO_FEES: props => <IconNoFees {...props} />,
    FAST_THUNDER: props => <IconFastThunder {...props} />,
    PHONE: props => <IconPhone {...props} />,
    MAIL: props => <IconMail {...props} />,
};

const Partner = {
    YAHOO_FINANCE: props => <IconYahooFinance {...props} />,
    WIRED: props => <IconWired {...props} />,
    FINANCIAL_TIMES: props => <IconFinancialTimes {...props} />,
    FORBES: props => <IconForbers {...props} />,
    TRUSTPILOT_SMALL: props => <IconTrustPilotSm {...props} />,
    TRUSTPILOT: props => <IconTrustPilot {...props} />,
};

const mapIconToSrc = {
    ...Type,
    ...Partner,
};

const Icon = props => {
    const icon = mapIconToSrc.hasOwnProperty(props.src.name)
        ? mapIconToSrc[props.src.name]
        : undefined;
    const iconProps = { width: props.width };

    if (!icon) {
        console.log(`icon ${props.src} is not defined`);
        return false;
    }

    return icon(iconProps);
};

Icon.type = Type;
Icon.partner = Partner;

export default Icon;
