
import React from 'react';
import { Link as AnimateLink } from "react-scroll";
import FooterArrow from '../../assets/images/footer_arrow.svg';
import Logo from '../../assets/images/logo/logo.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__inner__company-info">
                        <div className="company-info__logo">
                            <img src={Logo} />
                        </div>
                        <div className="company-info__data">
                            <div className="data">ООО “СК СПЕЦСЕРВИС”</div>
                            <div className="data">ИНН 6683014840</div>
                            <div className="data">ОГРН 1186658083700</div>
                            <div className="data">КПП 668301001</div>
                        </div>
                    </div>
                    <nav className="footer__inner__nav">

                        <AnimateLink
                            className='nav-link'
                            activeClass="active"
                            to='intro'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            style={navLinkStyles}
                        >Главная
                        </AnimateLink>
                            
                        <AnimateLink
                            className='nav__link'
                            to='price-list'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Прайс-лист
                        </AnimateLink>
                        <AnimateLink
                            className='nav__link'
                            to='about-us'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            О нас
                        </AnimateLink>
                    </nav>

                    <AnimateLink
                        className='footer__inner__go-up'
                        to='intro'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <img src={FooterArrow} />
                    </AnimateLink>
                </div>
            </div>
        </div>
    );
}

export default Footer;
