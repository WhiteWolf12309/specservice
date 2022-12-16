
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Vacancy.scss';

const VacancyItem = ({ title, description, wage, line_type }) => {

    return (
        <div className="vacancy__inner__vacancy">
            <div className={`line ${line_type}`}></div>
            <div className="vacancy__title">{title}</div>
            <div className="vacancy__description">{description}</div>
            <div className="vacancy__wage">Заработная плата <span className="wage">{wage}</span> рублей</div>
        </div>
    )
}


const Vacancy = () => {

    


    return (
        <div className="vacancy" id="vacancy">
            <SectionTitle title={"Вакансии"} />

            <div className="container">
                <div className="vacancy__inner">
                    <div className="vacancy__inner__item">                        
                        <div className="line blue"></div>
                        <div className="vacancy__title">Механик по ремонту погрузчиков</div>
                        <div className="vacancy__description">
                            <div className="description">Ремонт и обслуживание складской техники</div>
                            <div className="description">Опыт работы приветствуется</div>
                            <div className="description">Наличие автомобиля приветствуется</div>
                            <div className="description">Без вредных привычек</div>
                        </div>
                        <div className="vacancy__wage">Заработная плата <span className="wage">{(50000).toLocaleString("ru")}</span> рублей</div>
                    </div>

                    <div className="vacancy__inner__item">                        
                        <div className="line green"></div>
                        <div className="vacancy__title">Слесарь-механик</div>
                        <div className="vacancy__wage">Заработная плата <span className="wage">{(40000).toLocaleString("ru")}</span> рублей</div>
                    </div>

                    <div className="vacancy__inner__item">                        
                        <div className="line orange"></div>
                        <div className="vacancy__title">Сервис-менеджер</div>
                        <div className="vacancy__wage">Заработная плата <span className="wage">{(50000).toLocaleString("ru")}</span> рублей</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;
