
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link as AnimateLink } from "react-scroll"
import BurgerMenuCross from '../../assets/images/burger-menu_cross.svg'
import Logo from '../../assets/images/logo/logo.svg'
import HeaderPhone from '../../components/Icons/HeaderPhone/HeaderPhone'
import HeaderTime from '../../components/Icons/HeaderTime/HeaderTime'
import HeaderBurgerMenu from '../Icons/HeaderBurgerMenu/HeaderBurgerMenu'
import './Header.scss'



function Header() {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isBurgerContentVisusble, setIsBurgerContentVisible] = useState(false)

    const handleScroll = () => {
        const position = window.pageYOffset;

        if (position > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    };

    const setBurgerMenu = () => setIsBurgerContentVisible(prev => !prev)


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerStyles = {
        backgroundColor: `${ isScrolled ? "white" : "transparent" }`,
        boxShadow: `${isScrolled ? "0px 0px 30px rgba(0, 0, 0, 0.2)" : ""}`,
        color: `${ isScrolled ? "#343434" : "#fff" }`
    }

    const navLinkStyles = {
        cursor: "pointer",
        color: `${ isScrolled ? "#343434" : "#fff" }`
    }


    return (
        <>
            <header className="header" style={headerStyles}>
                <div className="container">
                    <div className="header__inner">
                        <a href='/' className="header__inner__logo">
                            <div className="logo__img">
                                <img src={Logo} alt="СК СпецСервис" />
                            </div>
                            <div className="logo-title">СК СпецСервис</div>
                        </a>
                        <nav className="header__inner__nav">
                            <AnimateLink
                                className={isScrolled ? "nav-link scrolled" : "nav-link"}
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
                                className={isScrolled ? "nav-link scrolled" : "nav-link"}
                                activeClass="active"
                                to='price-list'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                style={navLinkStyles}
                            >Прайс-лист
                            </AnimateLink>

                            <AnimateLink
                                className={isScrolled ? "nav-link scrolled" : "nav-link"}
                                activeClass="active"
                                to='about-us'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                style={navLinkStyles}
                            >О нас
                            </AnimateLink>

                            <AnimateLink
                                className={isScrolled ? "nav-link scrolled" : "nav-link"}
                                activeClass="active"
                                to='vacancy'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                style={navLinkStyles}
                            >Вакансии
                            </AnimateLink>


                        </nav>
                        <div className="header__inner__contacts">
                            <div className="contacts">
                                <HeaderPhone className={"contacts__image"} fill={isScrolled ? "#343434" : "#fff"} />
                                <div className="contacts__info">
                                    <div className="contacts__info__title">Контакты:</div>
                                    <a href='tel:+79086362937' className="contacts__info__contact">+7 908 636 29 37</a>
                                </div>
                            </div>

                            <div className="contacts">
                                <HeaderTime className={"contacts__image"} fill={isScrolled ? "#343434" : "#fff"} />
                                <div className="contacts__info">
                                    <div className="contacts__info__title">Режим работы:</div>
                                    <div className="contacts__info__contact">ПН-ПТ с 9:00 до 18:00</div>
                                </div>
                            </div>
                        </div>

                        <div className="burger__menu" onClick={setBurgerMenu}>
                            <HeaderBurgerMenu fill={isScrolled ? "#343434" : "#fff"} />
                        </div>

                    </div> 
                </div>
            </header>

            {isBurgerContentVisusble && (
                <motion.div className="burger__content" 
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'linear' }}
                >
                    <div className="burger__content__header">
                        <div className="container">
                            <div className="header__inner">
                                <div className="header__logo">
                                    <img src={Logo} />
                                </div>
                                <div className="header__company-name">
                                    СК СпецСервис
                                </div>
                                <div className="header__exit" onClick={setBurgerMenu}>
                                    <img src={BurgerMenuCross} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="burger__content__navbar">
                        <div className="container">
                            <div className="navbar__inner">

                                <a className="navbar__inner__link" href='/'>Главная</a>

                                <AnimateLink
                                    onClick={setBurgerMenu}
                                    className='navbar__inner__link'
                                    activeClass="active"
                                    to='price-list'
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >Прайс-лист
                                </AnimateLink>

                                <AnimateLink
                                    onClick={setBurgerMenu}
                                    className='navbar__inner__link'
                                    activeClass="active"
                                    to='about-us'
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >О нас
                                </AnimateLink>

                            </div>
                        </div>
                    </nav>
                </motion.div>
            )}
        </>
        
    )
}

export default Header
