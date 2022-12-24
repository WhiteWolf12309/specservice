
import { motion } from 'framer-motion';
import React from 'react';
import { Link as AnimateLink } from "react-scroll";
import IntroDelivery from '../../assets/images/intro_delivery.svg';
import IntroEmail from '../../assets/images/intro_email.svg';
import IntrobackgroundImage from '../../assets/images/Intro_image.webp';
import IntroPhone from '../../assets/images/intro_phone.svg';
import IntroPoint from '../../assets/images/intro_point.svg';
import IntroArrow from '../../components/Icons/IntroArrow/introArrow';
import './Intro.scss';




const Intro = () => {

    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
            transition: { duration: 0.5 }
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.2,  duration: 0.5 }
        }
    }

    const contactDataAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
            transition: { duration: 1 }
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.5, duration: 0.8 }
        })
    }

    return (
        <motion.div 
            className='intro' 
            style={{ background: `url(${IntrobackgroundImage}) no-repeat center, rgb(62, 62, 62)` }} 
            id="intro" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            <div className="container">
                <div className="intro__inner">
                    <motion.div variants={textAnimation} className="intro__inner__content">
                        <div className="content__title">Мы - причина бесперебойной работы вашей складской техники</div>
                        <div  className="content__subtitle">Мы открыты к сотрудничеству и готовы оказать помощь, даже в самых сложных ситуациях. <br /> Работаем с 2015 года</div>
                        <AnimateLink
                            className='content__btn'
                            to='price-list'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            <div className="content__btn-text">Прайс-лист</div>
                            <IntroArrow className={"content__btn-img"} fill={"#cf9a11"} />
                        </AnimateLink>
                    </motion.div>
                    <div className="intro__inner__data">
                        <motion.div custom={1} variants={contactDataAnimation} className="data__element">
                            <div className="data__element__title">Контактные данные</div>
                            <div className="data__element__items">
                                <div className="data__element__item">
                                    <img className="item__image" src={IntroPhone} />
                                    <div className="item__data">
                                        <div className="item__data__title">Наши номера телефонов:</div>
                                        <a href='tel:+79041714528' className="item__data__content">+7 904 171 45 28</a>
                                        <a href='tel:+79221137455' className="item__data__content">+7 922 113 74 55</a>
                                    </div>
                                </div>
                                <div className="data__element__item">
                                    <img className="item__image" src={IntroEmail} />
                                    <div className="item__data">
                                        <div className="item__data__title">Наша почта:</div>
                                        <a href='mailto:specservis.info@gmail.com' className="item__data__content">specservis.info@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div custom={2} variants={contactDataAnimation} className="data__element">
                            <div className="data__element__title">Регионы работы</div>
                            <div className="data__element__items">
                                <div className="data__element__item">
                                    <img className="item__image" src={IntroPoint} />
                                    <div className="item__data">
                                        <div className="item__data__title">Где мы работаем (выездной сервис):</div>
                                        <div className="item__data__content">Свердловская, Тюменская, Челябинская область</div>
                                    </div>
                                </div>
                                <div className="data__element__item">
                                    <img className="item__image" src={IntroDelivery} />
                                    <div className="item__data">
                                        <div className="item__data__title">Продажа запчастей:</div>
                                        <div className="item__data__content">Отправка транспортной команией по всей России</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Intro;
