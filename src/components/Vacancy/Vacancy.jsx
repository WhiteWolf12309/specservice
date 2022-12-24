
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Vacancy.scss';


const Vacancy = () => {

    return (
        <div className="vacancy" id="vacancy">
            <SectionTitle title={"Вакансии"} />

            <div className="container">
                <div className="vacancy__inner">
                    <a href='mailto:specservis.info@gmail.com' className="vacancy__inner__item">                        
                        <div className="line blue"></div>
                        <div className="vacancy__title">Механик по ремонту погрузчиков</div>
                        <div className="vacancy__description">
                            <div className="description">Ремонт и обслуживание складской техники</div>
                            <div className="description">Опыт работы приветствуется</div>
                            <div className="description">Наличие автомобиля приветствуется</div>
                            <div className="description">Без вредных привычек</div>
                        </div>

                        <div className="vacancy__footer">
                            <div className="vacancy__wage">Заработная плата <span className="wage">{(50000).toLocaleString("ru")}</span> рублей</div>
                            <a href='mailto:specservis.info@gmail.com' className="vacancy__send-vacancy blue">Отправить своё резюме</a>
                        </div>
                    </a>

                    <a href='mailto:specservis.info@gmail.com' className="vacancy__inner__item">                        
                        <div className="line orange"></div>
                        <div className="vacancy__title">Сервис-менеджер</div>
                        <div className="vacancy__footer">
                            <div className="vacancy__wage">Заработная плата <span className="wage">{(50000).toLocaleString("ru")}</span> рублей</div>
                            <div className="vacancy__send-vacancy orange">Отправить своё резюме</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;
