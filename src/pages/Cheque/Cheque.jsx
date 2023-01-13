
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ChequeSave from '../../assets/images/cheque_save.svg';
import CompanyLogo from '../../assets/images/logo/logo.svg';
import HeaderPhone from '../../components/Icons/HeaderPhone/HeaderPhone';
import './Cheque.scss';


const Cheque = () => {
    
    const printRef = useRef();

    const basketStore = useSelector(state => state.calculator.basket)
    const totalPriceStore = useSelector(state => state.calculator.totalPrice)
    const navigate = useNavigate()

    const handleDownloadImage = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = 'image.jpg';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            navigate("/");
        } else {
            window.open(data);
            navigate("/");
        }
    }

    return (
        <motion.div 
            className='cheque'
            initial={{ 
                opacity: 0
            }}
            animate={{ 
                opacity: 1 
            }}
            exit={{ 
                opacity: 0 
            }}
            >
                <div 
                    className="cheque__inner"
                    id='cheque__content'
                    ref={printRef}
                    >
                    <div className="cheque__inner__header">
                        <div className="header__head">
                            <div className="header__logo">
                                <img src={CompanyLogo} alt="СК СпецСервис" />
                            </div>
                            <div className="header__title">Чек заказа</div>
                        </div>
                        <div className="header__total-sum">Сумма заказа: <b>{totalPriceStore}₽</b></div>
                    </div>
                    <div className="cheque__inner__content">
                        <div className="content__title">Подробности заказа</div>

                        {basketStore && basketStore.map(item => (
                            <div 
                            className="content__item"
                            key={item.id}
                            >
                                <div className="content__item__data">
                                    <div className="item__title">{item.title} {item.count}шт.</div>
                                    <div className="item__article">Артикул: {item.article}</div>
                                </div>

                                {item.group !== 'service-type-1' && item.group !== 'service-type-2' && item.group !== 'service-type-3' ? (
                                    <div className="content__item__price">Цена по запросу</div>
                                ) : (
                                    <div className="content__item__price">{item.price} нормо-час</div>
                                )}
                            </div>
                        ))}

                        <div className="content__total__price">Итого: <b>{totalPriceStore}₽</b></div>
                    </div>
                    <div className="cheque__inner__footer">
                        <div className="footer__item">ООО СК “СПЕЦСЕРВИС”</div>
                        <div className="footer__item">ИНН 6683014840</div>
                        <div className="footer__item">ОГРН 1186658083700</div>
                        <div className="footer__item">КПП 668301001</div>
                        <div className="footer__item">БИК 046577674</div>
                    </div>
                </div>

            <div className="cheque__buttons">
                <a href='tel:+79041714528' className="cheque__buttons__call">
                    <div className="call__text">Позвонить нам</div>
                    <HeaderPhone fill={"#fff"} />
                </a>
                <div 
                    className="cheque__buttons__save"
                    onClick={handleDownloadImage}
                    >
                    <div className="save__text">Сохранить</div>
                    <img src={ChequeSave} />                                                      
                </div>
            </div>
            
        </motion.div>
    );
}

export default Cheque;
