
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderCalculatorArrow from '../../assets/images/order-calculator_arrow.svg';
import CheckMark from '../../assets/images/order-calculator_check-mark.svg';
import CountSubstact from '../../assets/images/order-calculator_minus.svg';
import CountAdd from '../../assets/images/order-calculator_plus.svg';
import CountRemove from '../../assets/images/order-calculator_trash.svg';
import {
    addProductItemCount,
    clearBasket,
    removeProductItem, removeService, substractProductItemCount
} from '../../store/calculatorSlice';
import HeaderPhone from '../Icons/HeaderPhone/HeaderPhone';
import Trash from '../Icons/Trash/Trash';
import './OrderCalculator.scss';


const OrderCalculatorItemMobile = ({ id, title, price, count, group }) => {
    
    const isSpares = group !== 'service-type-1' 
                    && group !== 'service-type-2' 
                    && group !== 'service-type-3'

    const dispatch = useDispatch()
    
    const addItemCountOrderCalculator = () => dispatch(addProductItemCount({ id, price }))
    const substractItemCountOrderCalculator = () => dispatch(substractProductItemCount({ id, price }))
    const removeItemOrderCalculator = () => dispatch(removeProductItem({ id, totalPrice: price * count }))
    const removeServiceOrderCalculator = () => dispatch(removeService({ id }))

    
    return (
        <div className="products__items__item__mobile">
            <div className="title">{title}</div>
            <div className="other__data">
                {isSpares ? (
                    <>
                        <div 
                            className="count__action red"
                            onClick={removeItemOrderCalculator}
                            >
                            <img src={CountRemove} alt="remove" />
                        </div>
                        <div 
                            className="count__action"
                            onClick={substractItemCountOrderCalculator}
                            >
                            <img src={CountSubstact} alt="substract" />
                        </div>
                        <div className="count__total">{count}</div>
                        <div 
                            className="count__action"
                            onClick={addItemCountOrderCalculator}
                            >
                            <img src={CountAdd} alt="add" />
                        </div>

                        {isSpares && <div className="price">Цена по запросу</div>}
                    </>
                ) : (
                    <>
                        <div 
                            className="count__action red"
                            onClick={removeServiceOrderCalculator}
                            >
                            <img src={CountRemove} alt="remove" />
                        </div>
                        <div 
                            className="count__action"
                            style={{ 
                                cursor: 'default',
                                opacity: 0.3
                            }}
                            >
                            <img src={CountSubstact} alt="substract" />
                        </div>
                        <div className="count__total">{count}</div>
                        <div 
                            className="count__action"
                            style={{ 
                                cursor: 'default',
                                opacity: 0.3
                            }}
                            >
                            <img src={CountAdd} alt="add" />
                        </div>

                        <div className="price">{price} нормо-час</div>                        
                    </>
                )}
            </div>
        </div>
    )
}


const OrderCalculatorItem = ({ id, title, article, price, count, group }) => {

    const isSpares = group !== 'service-type-1' 
                    && group !== 'service-type-2'
                    && group !== 'service-type-3'

    const dispatch = useDispatch()
    
    const addItemCountOrderCalculator = () => dispatch(addProductItemCount({ id, price, group }))
    const substractItemCountOrderCalculator = () => dispatch(substractProductItemCount({ id, price, group }))
    const removeItemOrderCalculator = () => dispatch(removeProductItem({ id, totalPrice: price * count, group }))
    const removeServiceOrderCalculator = () => dispatch(removeService({ id, price, group }))
    

    return (
        <div className="products__items__item">
            <div className="title">{title}</div>
            <div className="article">{article}</div>
            
            {isSpares ? (
                <div className="count">
                    <div 
                        className="count__action red"
                        onClick={removeItemOrderCalculator}
                        >
                        <img src={CountRemove} alt="remove" />
                    </div>
                    <div 
                        className="count__action"
                        onClick={substractItemCountOrderCalculator}
                        >
                        <img src={CountSubstact} alt="substract" />
                    </div>
                    <div className="count__total">{count}</div>
                    <div 
                        className="count__action"
                        onClick={addItemCountOrderCalculator}
                        >
                        <img src={CountAdd} alt="add" />
                    </div>
                </div>
            ) : (
                <div className="count">
                    <div 
                        className="count__action red"
                        onClick={removeServiceOrderCalculator}
                        >
                        <img src={CountRemove} alt="remove" />
                    </div>
                    <div 
                        className="count__action"
                        style={{ 
                            cursor: 'default',
                            opacity: 0.3
                        }}
                        >
                        <img src={CountSubstact} alt="substract" />
                    </div>
                    <div className="count__total">{count}</div>
                    <div 
                        className="count__action"
                        style={{ 
                            cursor: 'default',
                            opacity: 0.3
                        }}
                        >
                        <img src={CountAdd} alt="add" />
                    </div>
                </div>
            )}
            
            {isSpares ? (
                <div className="price">По запросу</div>
            ) : (
                <div className="price">{price} нормо-час</div>
            )}
        </div>
    )
}


const OrderCalculator = () => {

    const calculatorBasket = useSelector(state => state.calculator.basket)
    const totalPriceStore = useSelector(state => state.calculator.totalPrice)
    const [isShowProducts, setIsShowProducts] = useState(true)

    const dispatch = useDispatch()

    const setIsShowProductsHandler = () => setIsShowProducts(prev => !prev)
    const clearOrderCalculatorBasket = () => dispatch(clearBasket())

    
    return (
        <>
            {calculatorBasket.length && (
                <motion.div 
                    className='order-calculator'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                    <div className="order-calculator__inner">
                        <div className="order-calculator__inner__header">
                            <div className="header__title">Калькулятор заказа</div>
                            <div 
                                className="header__roll-up"
                                onClick={setIsShowProductsHandler}
                                >
                                <div className="header__roll-up__text">Подробнее</div>
                                <img 
                                    className="header__roll-up__img" 
                                    src={OrderCalculatorArrow} 
                                    style={{ transform: `rotate(${ isShowProducts ? "0deg" : "180deg" })`}}
                                />
                            </div>
                        </div>

                        {isShowProducts && (
                            <motion.div 
                                className="order-calculator__inner__products"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: 'linear' }}
                                >
                                <div className="products__header">
                                    <div className="products__header__title">Наименование</div>
                                    <div className="products__header__article">Артикул</div>
                                    <div className="products__header__count">Кол-во (шт.)</div>
                                    <div className="products__header__price">Цена</div>
                                </div>
                                
                                <div className="products__items">
                                    
                                    {calculatorBasket.length && (
                                        calculatorBasket.map(item => {
                                            return <OrderCalculatorItem
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                article={item.article}
                                                price={item.price}
                                                count={item.count}
                                                group={item.group}
                                            />
                                        })
                                    )}
                                </div>
                            </motion.div>
                        )}

                        <div className="order-calculator__inner__footer">
                            <div className="footer__price">
                                <div className="footer__price-total">
                                    <span className='footer__price-text'>
                                        Цена:
                                    </span>
                                    {totalPriceStore.toLocaleString("ru")}₽
                                </div>
                            </div>
                            <div className="footer__buttons">

                                <div 
                                    className="footer__buttons__clear-basket"
                                    onClick={clearOrderCalculatorBasket}
                                    >
                                    <div className="clear-basket__text">Очистить заказ
                                    </div>
                                    <Trash className={"trash__img"} fill={"#343434"} />
                                </div>        
                                <a href='tel:+7 908 636 29 37' className="footer__buttons__call">
                                    <div  className="call__phone-number">+7 908 636 29 37</div>
                                    <HeaderPhone className={"call__img"} fill={"#CF9A11"} />
                                </a>
                                <Link 
                                    to="/cheque" 
                                    className="footer__buttons__create-cheque"
                                    >
                                    <div className="create-cheque__text">Создать чек</div>
                                    <img src={CheckMark} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </motion.div>
            )}

            {calculatorBasket.length && (
                <motion.div
                    className='order-calculator__mobile'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="order-calculator__mobile__inner">
                        <div className="order-calculator__mobile__inner__header">
                            <div 
                                className="header__clear"
                                onClick={clearOrderCalculatorBasket}
                                >
                                <Trash className={"header__clear__trash"} fill={"#343434"} />
                            </div>
                            <div 
                                className="header__arrow"
                                onClick={setIsShowProductsHandler}
                                >
                                <img 
                                    className="header__clear__up-img" 
                                    src={OrderCalculatorArrow} 
                                    style={{ transform: `rotate(${ isShowProducts ? "0deg" : "180deg" })`}}
                                />
                            </div>
                        </div>

                        {isShowProducts && (
                            <motion.div 
                                className="order-calculator__inner__products"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: 'linear' }}
                                >
                                
                                <div className="products__items">
                                    
                                    {calculatorBasket.length && (
                                        calculatorBasket.map(item => {
                                            return <OrderCalculatorItemMobile
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                price={item.price}
                                                count={item.count}
                                                group={item.group}
                                            />
                                        })
                                    )}
                                </div>
                            </motion.div>
                        )}

                        <div className="order-calculator__inner__footer">
                            <div className="footer__price">
                                <div className="footer__price-total">
                                    <span className='footer__price-text'>
                                        Цена:
                                    </span>
                                    {totalPriceStore.toLocaleString("ru")}₽
                                </div>
                            </div>
                            <div className="footer__buttons">       
                                <a href='tel:+79041714528' className="footer__buttons__call">
                                    <div  className="call__phone-number">Позвонить нам</div>
                                </a>
                                <Link 
                                    to="/cheque" 
                                    className="footer__buttons__create-cheque"
                                    >
                                    <div className="create-cheque__text">Создать чек</div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </motion.div>
            )}
        </>
        
    );
}

export default OrderCalculator;
