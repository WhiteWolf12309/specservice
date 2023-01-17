
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AdditionslServices.scss';

const AdditionalServices = () => {
    return (
        <div className='additional-services'>
            <div className="container">
                <div className="additional-services__inner">
                    <SectionTitle title={"Техническое обслуживание автопогрузчиков"} />
        
                    <div className="content">
                        
                        <div className="content__item">
                            <div className="content__item__title">Техническое обслуживание (ТО) автопогрузчиков  № 1 (через каждые 500 моточасов, но не реже 1 раза в 3 месяца)</div>
                            <div className="content__item__list">
                                <div className="list__item">Продувка узлов и агрегатов погрузчика</div>
                                <div className="list__item">Замена масла в двигателе с масляным фильтром</div>
                                <div className="list__item">Проверка: уровней жидкостей, состояния приводных ремней, колес, РВД, основных узлов и механизмов погрузчика</div>
                                <div className="list__item">Смазка по точкам</div>
                            </div>
                            <div className="content__item__price"><span>2</span> Нормо-часа</div>
                        </div>

                        <div className="content__item">
                            <div className="content__item__title">Техническое обслуживание № 3 (через каждые 2000 моточасов, но не реже 1 раза в год)</div>
                            <div className="content__item__list">
                                <div className="list__item">Работы проводимые при ТО №1 и №2</div>
                                <div className="list__item">Замена масла в АКПП (МКПП) с масляным фильтром</div>
                                <div className="list__item">Замена масла в редукторе ведущего моста</div>
                                <div className="list__item">Замена фильтра гидравлики</div>
                            </div>
                            <div className="content__item__price"><span>7</span> Нормо-часов</div>
                        </div>

                        <div className="content__item">
                            <div className="content__item__title">Техническое обслуживание № 4 (через каждые 3000 моточасов, но не реже 1 раза в 2 года)</div>
                            <div className="content__item__list">
                                <div className="list__item">Работы проводимые при ТО №1, №2, №3</div>
                                <div className="list__item">Замена масла в гидравлике с фильтрами</div>
                                <div className="list__item">Замена охлаждающей жидкости</div>
                                <div className="list__item">Замена приводных ремней</div>
                                <div className="list__item">Замена свечей зажигания (свечей накала для диз. ДВС)</div>
                                <div className="list__item">Замена тормозной жидкости</div>
                            </div>
                            <div className="content__item__price"><span>10</span> Нормо-часов</div>
                        </div>                        
                        

                        <div className="content__item">
                            <div className="content__item__title">Техническое обслуживание (ТО) автопогрузчиков  №2 (через каждые 1000 моточасов, но не реже 1 раза в 6 месяцев)</div>
                            <div className="content__item__list">
                                <div className="list__item">Работы проводимые при ТО №1</div>
                                <div className="list__item">Замена топливных фильтров</div>
                                <div className="list__item">Замена воздушного фильтра</div>
                            </div>
                            <div className="content__item__price"><span>3</span> Нормо-часа</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdditionalServices;
