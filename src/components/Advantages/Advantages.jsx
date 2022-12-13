
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Advantages.scss';

const Advantages = () => {
    return (
        <div className="advantages section">
            <div className="container">
                <div className="advantages__inner">
                    <SectionTitle title={"Наши преимущества"} />

                    <div className="advantages__inner__content">
                        <div className="item">
                            <div className="item__text">Первичный выезд и осмотр техники бесплатно!</div>
                        </div>
                        <div className="item">
                            <div className="item__text">Более 100 000 тысяч наименований запчастей на складе в Москве</div>
                        </div>
                        <div className="item">
                            <div className="item__text">Ответим на вашу заявку в течении рабочего дня</div>
                        </div>
                        <div className="item">
                            <div className="item__text">Наличие диагностического оборудования и программного обеспечения для диагностики складской техники и автопогрузчиков</div>
                        </div>
                        <div className="item">
                            <div className="item__text">На выполненные работы предоставляется гарантия</div>
                        </div>
                        <div className="item">
                            <div className="item__text">Оплата за проведенные работы производится в течение 10 (десяти) банковских дней после выполнения работ</div>
                        </div>
                        <div className="item">
                            <div className="item__text">Выезд представителя исполнителя составляет 1000 руб, в т.ч НДС</div>
                        </div>
                        <div className="item">
                            <div className="item__text">Стоимость нормо-часа проведения работ составляет 1000 руб, в т.ч НДС</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advantages;
