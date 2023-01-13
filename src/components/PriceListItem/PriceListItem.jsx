
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductItem, addService } from '../../store/calculatorSlice';
import './PriceListItem.scss';


const PriceListItem = ({ id, title, article, price, group, addition }) => {

    const dispatch = useDispatch()
    const isSpare = group !== 'service-type-1' && group !== 'service-type-2' && group !== 'service-type-3'

    const addToOrderCalculator = () => dispatch(addProductItem({ id, title, article, price, group }))
    const addServiceToOrderCalculator = () => dispatch(addService({ id, title, addition, price, group }))

    return (
        <AnimatePresence>
            <motion.div 
                className="products__inner__item"
                onClick={isSpare ? addToOrderCalculator : addServiceToOrderCalculator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'linear' }}
                >
                <div className="products__inner__item__title">{title}</div>
                
                { article && (
                    <div className="products__inner__item__article"> 
                        <div className="article-title">Артикул:</div>
                        <div className="article-text">{article}</div>
                    </div>
                ) }
                { addition && (
                    <div className="products__inner__item__article"> 
                        <div className="article-title">Примечание:</div>
                        <div className="article-text">{addition}</div>
                    </div>
                )}

                <div className="products__inner__item__price">
                    <div className="price__text">{isSpare ? "Цена:" : "Время:"}</div>

                    { isSpare ? (
                        <div className="price__count">По запросу</div>
                    ) : (
                        <div className="price__count">{price} нормо-час</div>
                    ) }

                    
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default PriceListItem;
