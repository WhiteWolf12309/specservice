
import { motion } from 'framer-motion';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Advantages.scss';

const Advantages = () => {

    const itemAnimation = {
        hidden: {
            opacity: 0,
            transition: { delay: 0.1,  duration: 0.2 }
        },
        visible: custom => ({
            opacity: 1,
            transition: { delay: custom * 0.1,  duration: 0.2 }
        })
    }


    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="advantages section">
            <div className="container">
                <div className="advantages__inner">
                    <SectionTitle title={"Наши преимущества"} />

                    <div className="advantages__inner__content">
                        <motion.div custom={1} variants={itemAnimation} className="item">
                            <div className="item__text">Первичный выезд и осмотр техники бесплатно!</div>
                        </motion.div>
                        <motion.div custom={2} variants={itemAnimation} className="item">
                            <div className="item__text">Более 100 000 тысяч наименований запчастей на складе в Москве</div>
                        </motion.div>
                        <motion.div custom={3} variants={itemAnimation} className="item">
                            <div className="item__text">Ответим на вашу заявку в течении рабочего дня</div>
                        </motion.div>
                        <motion.div custom={4} variants={itemAnimation} className="item">
                            <div className="item__text">Наличие диагностического оборудования и программного обеспечения для диагностики складской техники и автопогрузчиков</div>
                        </motion.div>
                        <motion.div custom={5} variants={itemAnimation} className="item">
                            <div className="item__text">На выполненные работы предоставляется гарантия</div>
                        </motion.div>
                        <motion.div custom={6} variants={itemAnimation} className="item">
                            <div className="item__text">Оплата за проведенные работы производится в течение 10 (десяти) банковских дней после выполнения работ</div>
                        </motion.div>
                        <motion.div custom={7} variants={itemAnimation} className="item">
                            <div className="item__text">Выезд представителя исполнителя составляет 1000 руб, в т.ч НДС</div>
                        </motion.div>
                        <motion.div custom={8} variants={itemAnimation} className="item">
                            <div className="item__text">Стоимость нормо-часа проведения работ составляет 1000 руб, в т.ч НДС</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Advantages;
