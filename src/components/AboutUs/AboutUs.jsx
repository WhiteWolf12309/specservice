
import { motion } from 'framer-motion';
import React from 'react';
import AboutUsIImage1 from '../../assets/images/about-us_first.webp';
import AboutUsIImage2 from '../../assets/images/about-us_second.webp';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutUs.scss';

const AboutUs = () => {

    const itemAnimation = {
        hidden: custom => ({
            x: custom * 100,
            opacity: 0,
            transition: { delay: 0.2,  duration: 0.5 }
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.2,  duration: 0.5 }
        }
    }


    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className='about-us section' id="about-us">
            <div className="container">
                <div className="about-us__inner">
                    <SectionTitle title={"Немного о нас"} />

                    <div className="about-us__inner__items">

                        <div className="mobile-item" style={{ background: `url(${AboutUsIImage1}), rgb(70, 70, 70)` }}>
                            <div className="content__title">Обслуживание и ремонт складской техники</div>
                            <div className="content__text">Мы имеем большой опыт по обслуживанию и ремонту складской техники (Автопогрузчики, Штабелеры, Ричтраки, Транспортировщики паллет), квалифицированный персонал, производим ремонты любой сложности: двигателей, АКПП, гидравлической системы, управляемых и ведущих мостов, электронной системы управления</div>
                        </div>

                        <div className="mobile-item" style={{ background: `url(${AboutUsIImage2}), rgb(70, 70, 70)` }}>
                            <div className="content__title">Ремонт и восстановление электронных блоков</div>
                            <div className="content__text">Ремонт и восстановление электронных блоков - сложный процесс, требующий от инженера специфического оборудования и технических знаний в сфере электроники и электрики. Мы оказываем профессиональный ремонт блоков Zapi,Curtis,DanaherJungheinrich, Linde и.д.р. Выгода до 50% по сравнению с приобретением нового.На все выполненные работы по ремонту контроллеров предоставляется гарантия.</div>
                        </div>

                        <motion.div custom={1} variants={itemAnimation} className="item">
                            <div className="content">
                                <div className="content__title">Обслуживание и ремонт складской техники</div>
                                <div className="content__text">Мы имеем большой опыт по обслуживанию и ремонту складской техники (Автопогрузчики, Штабелеры, Ричтраки, Транспортировщики паллет), квалифицированный персонал, производим ремонты любой сложности: двигателей, АКПП, гидравлической системы, управляемых и ведущих мостов, электронной системы управления</div>
                            </div>
                            <img className="image" src={AboutUsIImage1} />
                        </motion.div>
                        
                        <motion.div custom={-1} variants={itemAnimation} className="item">
                            <img className="image" src={AboutUsIImage2} />
                            <div className="content">
                                <div className="content__title">Ремонт и восстановление электронных блоков</div>
                                <div className="content__text">Ремонт и восстановление электронных блоков - сложный процесс, требующий от инженера специфического оборудования и технических знаний в сфере электроники и электрики. Мы оказываем профессиональный ремонт блоков Zapi,Curtis,DanaherJungheinrich, Linde и.д.р. Выгода до 50% по сравнению с приобретением нового.На все выполненные работы по ремонту контроллеров предоставляется гарантия.</div>
                            </div>
                        </motion.div>
                    </div>
                    
                </div>
            </div>
        </motion.div>
    );
}

export default AboutUs;
