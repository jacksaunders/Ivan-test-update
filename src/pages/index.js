import React from 'react';
import Reset from '../components/styles-reset/styles-reset';
import Layout from '../components/layout/layout';
import Grid from '../components/grid/grid';
import PartnersList from '../components/partners-list/partners-list';
import TimeLine from '../components/time-line/time-line';
import TimeLineItem from '../components/time-line/time-line-item';
import Header from '../components/header/header';
import Section from '../components/section/section';
import SectioMain from '../components/section/sectionMain';
import SectionSide from '../components/section/sectionSide';
import CtaBox from '../components/cta-box/cta-box';
import CtaBoxMedia from '../components/cta-box/cta-box-media';
import CtaBoxTitle from '../components/cta-box/cta-box-title';
import CtaBoxtext from '../components/cta-box/cta-box-text';
import CtaBoxAction from '../components/cta-box/cta-box-action';
import H1 from '../components/typography/h1';
import H2 from '../components/typography/h2';
import Text from '../components/typography/text';
import Button from '../components/button/button';
import Icon from '../components/icon/icon';
import Divider from '../components/divider/divider';
import Contacts from '../components/contacts/contacts';
import { Colors } from '../components/themes/themes';
import Img from '../components/img/img';
import ImageSplashScreen from '../images/image-splash-screen.jpg';
import ImageReview from '../images/image-review.png';
import ImageInterface from '../images/image-interface.png';
import ImageContactUs from '../images/image-contact-us.png';

const timelineMilestones = [
    {
        number: <H1 color={H1.color.DENIM65}>1</H1>,
        title: <H2>Apply in minutes</H2>,
        content: (
            <Text>
                It takes five minutes from start to finish. We're designed with small businesses in
                mind, so we'll just need the basics about your business to make a decision.
            </Text>
        ),
    },
    {
        number: <H1 color={H1.color.LONDON45}>2</H1>,
        title: <H2>Use your funds</H2>,
        content: (
            <Text>
                We'll approve you based on your business performance. You transfer as much as you
                need to your bank account, and the funds will typically be in your account in hours.
            </Text>
        ),
    },
    {
        number: <H1 color={H1.color.CACTUS}>3</H1>,
        title: <H2>Repay or top up</H2>,
        content: (
            <Text>
                We don't charge early repayment fees: we only charge interest for the days you have
                the money. If you need more funds, applying for a top up is easy. As your business
                grows your credit limit will too.
            </Text>
        ),
    },
];

const timelineitems = items =>
    items.map((item, index) => (
        <TimeLineItem
            key={`TimeLineItem=${index}`}
            number={item.number}
            title={item.title}
            content={item.content}
        />
    ));

export default () => {
    return (
        <React.Fragment>
            <Reset />

            <Layout>
                <Header />

                <Section>
                    <SectioMain>
                        <CtaBox>
                            <CtaBoxTitle turnLeftOnDesktop={true}>
                                <H1
                                    doubleOnDesktop={true}
                                    mobileLexeme="A smarter business credit card alternative"
                                    desktopLexeme="Smarter than a business credit card"
                                />
                            </CtaBoxTitle>
                            <CtaBoxtext turnLeftOnDesktop={true}>
                                <Text>
                                    iwoca is fast and flexible finance custom-designed for small
                                    businesses. Get £1,000- £250,000 delivered instantly to your
                                    bank account.
                                </Text>
                            </CtaBoxtext>

                            <CtaBoxAction turnLeftOnDesktop={true}>
                                <Button text="Check your eligibility" />
                            </CtaBoxAction>

                            <CtaBoxMedia
                                turnLeftOnDesktop={true}
                                mobileOnlyContent={
                                    <Icon src={Icon.partner.TRUSTPILOT_SMALL} width={'160px'} />
                                }
                                desktopOnlyContent={
                                    <React.Fragment>
                                        <Divider />
                                        <Icon src={Icon.partner.TRUSTPILOT} width={'265px'} />
                                    </React.Fragment>
                                }
                            ></CtaBoxMedia>
                        </CtaBox>
                    </SectioMain>

                    <SectionSide>
                        <div style={{ height: 'auto', width: '70%', display: 'block', marginLeft: 'auto' }}> <Img style={{ borderRadius: '100%', display: 'block', }} src={ImageSplashScreen} /> </div>
                    </SectionSide>
                </Section>

                <Section
                    horizontal={true}
                    bgColor={Colors.BACKGROUND.SECTION.SECONDARY}
                    title={
                        <H1>
                            Running a business, you need funds ready for anything from daily orders
                            to making your next big bet.
                        </H1>
                    }
                    content={
                        <Grid>
                            <CtaBox>
                                <CtaBoxMedia>
                                    <Icon src={Icon.type.WALLET} width={'76px'} />
                                </CtaBoxMedia>

                                <CtaBoxTitle>
                                    <H2>Cash or card? Use both</H2>
                                </CtaBoxTitle>
                                <CtaBoxtext>
                                    <Text>
                                        Funds go straight to your bank account for you to use any
                                        way you need. Like paying direct deposits and VAT bills -
                                        you can't do that with a credit card.
                                    </Text>
                                </CtaBoxtext>
                            </CtaBox>

                            <CtaBox>
                                <CtaBoxMedia>
                                    <Icon src={Icon.type.NO_FEES} width={'76px'} />
                                </CtaBoxMedia>

                                <CtaBoxTitle>
                                    <H2>No fees, ever </H2>
                                </CtaBoxTitle>
                                <CtaBoxtext>
                                    <Text>
                                        iwoca funds are free until you draw down, and then we just
                                        charge interest by the day. There's no annual fees, set up
                                        fees or early repayment fees.
                                    </Text>
                                </CtaBoxtext>
                            </CtaBox>

                            <CtaBox>
                                <CtaBoxMedia>
                                    <Icon src={Icon.type.FAST_THUNDER} width={'76px'} />
                                </CtaBoxMedia>

                                <CtaBoxTitle>
                                    <H2>Lightning fast service</H2>
                                </CtaBoxTitle>
                                <CtaBoxtext>
                                    <Text>
                                        You won't need to wait for a card to arrive in the mail. Get
                                        approved in hours then start using your funds instantly.
                                    </Text>
                                </CtaBoxtext>
                            </CtaBox>
                        </Grid>
                    }
                ></Section>

                <Section
                    vPadded={true}
                    horizontal={true}
                    hasDivider={false}
                    media={ <div style={{ height: '140px', width: '140px', display: 'block' }}> <Img src={ImageReview} /> </div>}
                    title={
                        <H1>
                            “The process has been easy, uncomplicated and very quick. Their service
                            is excellent with regular contact and support.”
                        </H1>
                    }
                    content={
                        <CtaBox>
                            <CtaBoxTitle>
                                <H2 style={{ color: Colors.TYPOGRAPHY.H2.SECONDARY }}>
                                    Tim Law - Simply Plants
                                </H2>
                            </CtaBoxTitle>
                        </CtaBox>
                    }
                />

                <Section
                    horizontal={true}
                    title={<H1>How it works</H1>}
                    content={
                        <React.Fragment>
                            <SectionSide>
                                <div style={{ height: 'auto', width: '100%', display: 'block' }}> <Img src={ImageInterface} /> </div>
                            </SectionSide>
                            <SectioMain>
                                <TimeLine>{timelineitems(timelineMilestones)}</TimeLine>
                            </SectioMain>
                        </React.Fragment>
                    }
                />

                <Section
                    horizontal={true}
                    title={<H1> Loved by small businesses (and big names) </H1>}
                    content={<PartnersList />}
                />

                <Section fullWidth={true} bgColor={Section.bgColor.LONDON95} bgMargin={'35%'}>
                    <Section
                        media={<div style={{ height: 390, width: 480, display: 'block', margin: '0 auto' }}> <Img src={ImageContactUs} /> </div>}
                        title={<H1 color={H1.color.BLACK0}>Questions? Speak to a real person</H1>}
                        content={
                            <Text>
                                Small business loans are all we do, so you'll get straight through to
                                someone who can help, like Lisa – we're not fans of hold music. Call us
                                from Monday to Friday (9am - 6pm). We accept applications over the
                                phone.
                            </Text>
                        }
                        horizontal={true}
                        hasDivider={false}
                        halfSize={true}
                    >
                        <Contacts />
                    </Section>
                </Section>


            </Layout>

            {/* <footer style={{ background: 'linear-gradient(180deg, #143B6B 0%, #0C2444 100%)', color: '#fff' }}>
                     <Logo fill='white' /> 

                    <Text>iwoca Ltd, 247 Tottenham Court Road, London, W1T 7QX</Text>

                    <ul>
                        <li>Privacy policy</li>
                        <li>Terms of use</li>
                        <li>Use of cookies</li>
                        <li>Products</li>
                        <li>Compliant policy</li>
                    </ul>

                    <span>
                        iwoca Limited is authorised and regulated by the Financial Conduct
                        Authority (reference number: 723378) in relation to regulated credit
                        agreements and are a registered account information service provider
                        (reference number: 791804). We're also registered with the Information
                        Commissioners Office in relation to the processing of personal
                        information (registration number: Z3007540). iwoca Limited is
                        incorporated in England and Wales (company number: 07798925). Our
                        registered office is 10 Queen Street Place, London, EC4R 1AG.
                </span>
                </footer> */}
        </React.Fragment>
    );
};
