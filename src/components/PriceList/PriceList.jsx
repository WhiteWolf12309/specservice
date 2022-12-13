
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import FilterListCross from '../../assets/images/filter-list_cross.svg';
import Filter from '../../assets/images/price-list_filter.svg';
import PriceListMagnifier from '../../assets/images/price-list_magnifier.svg';
import PriceListMorePlus from '../../components/Icons/PriceListMorePlus/PriceListMorePlus';
import { priceListData } from '../../priceList/priceList';

import { useSelector } from 'react-redux';
import OrderCalculator from '../OrderCalculator/OrderCalculator';
import PriceListItem from '../PriceListItem/PriceListItem';
import SectionTitle from '../SectionTitle/SectionTitle';
import './PriceList.scss';


const PriceList = () => {

    const updateUISortedPriceList = () => {
        const newSortedData = []

        if (sortedPriceList.length < 12 || sortedPriceList.length - 12 * pageIndex.current < 12) {
            // if elements of sortedPriceList < 12
            for (let i = 0; i < sortedPriceList.length; i++) {
                newSortedData.push(sortedPriceList[i])
            }
        } else if (sortedPriceList.length >= 13) {
            // if elements of sortedPriceList >= 13
            for (let i = 0; i < 12 * pageIndex.current; i++) {
                newSortedData.push(sortedPriceList[i])
                console.log(pageIndex.current)
            }
        }

        setUISortedPriceList(prev => newSortedData)
    }

    const applyFiltersAndSearch = () => {
        // Main function of items search

        // =================== [FILTRATION] ======================
        const filterServicesStatus = filterPoints['service-type-1'] 
                                    || filterPoints['service-type-2']
                                    || filterPoints['engine']
                                    || filterPoints['electric stacker']
                                    || filterPoints['controlled bridge']
                                    || filterPoints['hydraulics']
                                    || filterPoints['mast']
                                    || filterPoints['tires']
                                    || filterPoints['battery']
                                    || filterPoints['another']

                                    
        if (searchInputValue === "" && filterServicesStatus === false && (priceValues.from === "" || priceValues.from === "0" && priceValues.to === "" || priceValues.to === "0")) {
            console.log("FILTER not changed")
            // Nothing happend, then we just need to add unsorted list to sorted
            setSortedPriceList(priceList)
        } else {
            // if search input changed
            let newPriceList = priceList.filter(({ title }) => title.toLowerCase().includes(searchInputValue.toLowerCase()))
            setSortedPriceList(prev => newPriceList)

            const MinMaxDiap = {
                min: parseInt(priceValues.from, 10) || 0,
                max: parseInt(priceValues.to, 10) || 1000000,
            }
                    
            newPriceList = newPriceList.filter(({ price, group }) => {
                if (parseInt(price, 10) > MinMaxDiap.min && parseInt(price, 10) <= MinMaxDiap.max) {
                    return true
                }
            })
            setSortedPriceList(prev => newPriceList)
            

            if (filterServicesStatus === false) { 
                // if filters not changed
                
                setSortedPriceList(prev => newPriceList)
            } else if (filterServicesStatus === true) {
                // if filters changed

                newPriceList = newPriceList.filter(({ group }) => filterPoints[group] === true)
                setSortedPriceList(prev => newPriceList)
            } 
        }
        
        pageIndex.current = 1
    }

    const addPageIndex = () => {
        pageIndex.current += 1
        updateUISortedPriceList()
    }

    const initialUISortedPriceList = () => {
        const initialState = []
        
        for (let i = 0; i < 12; i++) {
            initialState.push(priceList[i])
        }
            
        return initialState
    }


    const basketListStore = useSelector(state => state.calculator.basket)

    const [isFilterListVisible, setIsFilterListVisible] = useState(false)
    
    const [priceList, setPriceList] = useState(priceListData);
    const [sortedPriceList, setSortedPriceList] = useState(priceList);
    const [UISortedPriceList, setUISortedPriceList] = useState(initialUISortedPriceList);
    const pageIndex = useRef(1)
    // const [pageIndex, setPageIndex] = useState(1)
    
    const [searchInputValue, setSearchInputValue] = useState("")
    const [priceValues, setPriceValues] = useState({ from: '', to: '' })
    const [filterPoints, setFilterPoints] = useState({
        'service-type-1': false,
        'service-type-2': false,
        'engine': false,
        'electric stacker': false,
        'controlled bridge': false,
        'hydraulics': false,
        'mast': false,
        'tires': false,
        'battery': false,
        'another': false
    }) 

    useEffect(() => {
        updateUISortedPriceList()
    }, [sortedPriceList])

    useEffect(() => {
        setFilterPoints({...priceValues, 'service-type-1': false, 'service-type-2': false })
    }, [priceValues.from, priceValues.to])

    const setPriceValueFrom = (e) => setPriceValues({ ...priceValues, from: e.target.value })
    const setPriceValueTo = (e) => setPriceValues({ ...priceValues, to: e.target.value })
    
    const setServiceType1 = () => setFilterPoints({ ...filterPoints, 'service-type-1': !filterPoints["service-type-1"] })
    const setServiceType2 = () => setFilterPoints({ ...filterPoints, 'service-type-2': !filterPoints["service-type-2"] })

    const setSparesEngine = () => setFilterPoints({ ...filterPoints, 'engine': !filterPoints["engine"] })
    const setServiceElectricStacker = () => setFilterPoints({ ...filterPoints, 'electric stacker': !filterPoints["electric stacker"] })
    const setServiceControlledBridge = () => setFilterPoints({ ...filterPoints, 'controlled bridge': !filterPoints["controlled bridge"] })
    const setServiceHydraulics = () => setFilterPoints({ ...filterPoints, 'hydraulics': !filterPoints["hydraulics"] })
    const setServiceMast = () => setFilterPoints({ ...filterPoints, 'mast': !filterPoints["mast"] })
    const setServiceTires = () => setFilterPoints({ ...filterPoints, 'tires': !filterPoints["tires"] })
    const setServiceBattery = () => setFilterPoints({ ...filterPoints, 'battery': !filterPoints["battery"] })
    const setServiceAnother = () => setFilterPoints({ ...filterPoints, 'another': !filterPoints["another"] })

    
    const clearFilters = () => {
        setPriceValues({ ...priceValues, from: '', to: '' })

        const newFilterStates = {
            'service-type-1': false,
            'service-type-2': false,
            'engine': false,
            'electric stacker': false,
            'controlled bridge': false,
            'hydraulics': false,
            'mast': false,
            'tires': false,
            'battery': false,
            'another': false
        }

        setFilterPoints((prev) => newFilterStates)
    }

    const setFilterList = () => setIsFilterListVisible(prev => !prev)
    
    const SearchItems = e => e.code === "Enter" ? applyFiltersAndSearch() : null

    return (
        <div className='price-list section' id='price-list'>
            <div className="container">
                <SectionTitle title={"Прайс-лист"} />

                <div className="price-list__inner">
                    <div className="search">
                        <input 
                            value={searchInputValue} 
                            onChange={e => setSearchInputValue(e.target.value)} 
                            type="text" 
                            placeholder='Название нужной техники или оборудования... ' 
                            onKeyDown={SearchItems}
                            className="search__input"
                        />

                        <div
                            onClick={applyFiltersAndSearch} 
                            className="search__button"
                        >
                            <div className="button__text">Поиск</div>
                            <img className="magnifier" src={PriceListMagnifier} alt="Поиск" />
                        </div>
                    </div>

                    <div className="mobile-filter">
                        <div className="mobile-filter__button" onClick={setFilterList}>
                            <img src={Filter} />
                            <div className="button__text">Фильтры</div>
                        </div>
                    </div>

                    
                    <div className="price-list__content">
                        <div className="filter">
                            <div className="filter__item">
                                <div className="filter__item__title">Цена</div>
                                <div className="filter__item__content">
                                    
                                    <div className="price">
                                        <div className="price__text">от</div>
                                        <input
                                            value={priceValues.from}
                                            onChange={setPriceValueFrom}
                                            className="price__input" 
                                            type="number"
                                            placeholder={priceValues.from === "" || priceValues.from === "0" ? "0" : priceValues.from}
                                        />
                                    </div>

                                    <div className="price">
                                        <div className="price__text">до</div>
                                        <input 
                                            value={priceValues.to}
                                            onChange={setPriceValueTo}
                                            className="price__input" 
                                            type="number" 
                                            placeholder={priceValues.to === "" || priceValues.to === "0" ? "0" : priceValues.to}
                                        />
                                    </div>
                                  
                                </div>
                            </div>

                            <div className="filter__item">
                                <div className="filter__item__title">Услуги</div>
                                <div className="filter__item__content">
                                    
                                    {!priceValues.from && !priceValues.to && (
                                        <motion.div 
                                            className="content__spare"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: 'linear' }}
                                            >
                                            <div className="element">
                                                <input
                                                    checked={filterPoints['service-type-1']}
                                                    onChange={setServiceType1}
                                                    type="checkbox" 
                                                    id="element-service-1" 
                                                    className="element__checkbox" 
                                                />
                                                <div className="element__text">
                                                    <label htmlFor="element-service-1">Для транспортировщиков паллет и эл. штабелеров</label>
                                                </div>
                                            </div>

                                            <div className="element">
                                                <input 
                                                    checked={filterPoints['service-type-2']}
                                                    onChange={setServiceType2}
                                                    type="checkbox" 
                                                    id="element-service-2" 
                                                    className="element__checkbox" 
                                                />
                                                <div className="element__text">
                                                    <label htmlFor="element-service-2">Для ричтраков и электропогрузчиков</label>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            <div className="filter__item">
                                <div className="filter__item__title">Запчасти</div>
                                <div className="filter__item__content">
                                    
                                    <div className="content__spare">
                                        <div className="element">
                                            <input
                                                checked={filterPoints['engine']}
                                                onChange={setSparesEngine}
                                                type="checkbox" 
                                                id="element-spare-1" 
                                                className="element__checkbox" 
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-spare-1">Двигатель</label>
                                            </div>
                                        </div>

                                        <div className="element">
                                            <input
                                                checked={filterPoints['electric stacker']}
                                                onChange={setServiceElectricStacker} 
                                                type="checkbox" 
                                                id="element-spare-2" 
                                                className="element__checkbox" 
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-spare-2">Электроштабеллер</label>
                                            </div>
                                        </div>

                                        <div className="element">
                                            <input
                                                checked={filterPoints['controlled bridge']}
                                                onChange={setServiceControlledBridge} 
                                                type="checkbox" 
                                                id="element-spare-3" 
                                                className="element__checkbox" 
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-spare-3">Управляемый мост</label>
                                            </div>
                                        </div>

                                        <div className="element">
                                            <input
                                                checked={filterPoints['hydraulics']}
                                                onChange={setServiceHydraulics}  
                                                type="checkbox" 
                                                id="element-spare-4" 
                                                className="element__checkbox" 
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-spare-4">Гидравлика</label>
                                            </div>
                                        </div>

                                        <div className="element">
                                            <input 
                                                checked={filterPoints['mast']}
                                                onChange={setServiceMast}
                                                type="checkbox" 
                                                id="element-spare-5" 
                                                className="element__checkbox" 
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-spare-5">Мачта</label>
                                            </div>
                                        </div>

                                        <div className="element">
                                            <input
                                                checked={filterPoints['tires']}
                                                onChange={setServiceTires} 
                                                type="checkbox" 
                                                id="element-spare-6" 
                                                className="element__checkbox" 
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-spare-6">Шины</label>
                                            </div>
                                        </div>

                                        <div className="element">
                                            <input
                                                checked={filterPoints['battery']}
                                                onChange={setServiceBattery}
                                                type="checkbox" 
                                                id="element-spare-7" 
                                                className="element__checkbox" 
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-spare-7">АКБ</label>
                                            </div>
                                        </div>
                                    
                                        <div className="element">
                                            <input
                                                checked={filterPoints['another']}
                                                onChange={setServiceAnother}
                                                type="checkbox" 
                                                id="element-spare-8" 
                                                className="element__checkbox" 
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-spare-8">Другие запчасти</label>
                                            </div>
                                        </div>

                                        <button
                                            onClick={applyFiltersAndSearch} 
                                            className="apply__filters"
                                            >Применить фильтры
                                        </button>
                                        <button 
                                            onClick={clearFilters}
                                            className="clear__filters"
                                            >Сбросить фильтры
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="products">
                            <div className="products__inner">

                                {UISortedPriceList.map(item => {
                                    return <PriceListItem 
                                            key={item.id} 
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            article={item.article}
                                            group={item.group}
                                            addition={item.addition || ""}
                                        /> 
                                })}
                                
                            </div>

                            { UISortedPriceList.length >= 12 ? (
                                <div 
                                    className="products__more"
                                    onClick={addPageIndex} 
                                >
                                    <div className="products__more__text">Больше</div>
                                    <PriceListMorePlus className={"plus"} fill={"#343434"} />
                                </div>
                            ) : null }
                            
                        </div>
                    </div>

                    <div className="help__text">
                        <div className="content">
                            В наличии и под заказ оригинальные, а также неоригинальные запасные части высокого качества, колеса, ролики, расходные материалы и дополнительное оборудование для складской и грузоподъемной техники ведущих европейских и японских производителей: ТСМ, Toyota, BT, Komatsu, Mitsubishi, Nissan, Linde, STILL, Jungheinrich, OM, Daewoo, Doosan, Hyster, Yale, Crown, Nichiyu, Hyundai, CLARK, KALMAR. Более 10000 наименований запасных частей на складе в Москве, доставка от 2х дней.
                        </div>
                    </div>
                </div>
            </div>

            {basketListStore.length ? <OrderCalculator /> : null}

            {isFilterListVisible && (
                <motion.div className="mobile-filter__list"
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'linear' }}
                >
                    <div className="mobile-filter__list__inner">
                        <div 
                            className="close__cross" 
                            onClick={setFilterList}    
                        >
                            <img src={FilterListCross} />
                        </div>

                            <div className="filter__item">
                                <div className="filter__item__title">Цена</div>
                                <div className="filter__item__content">
                                    
                                    <div className="price">
                                        <div className="price__text">от</div>
                                        <input 
                                            value={priceValues.from}
                                            onChange={setPriceValueFrom}
                                            className="price__input" 
                                            type="number" 
                                        />
                                    </div>

                                    <div className="price">
                                        <div className="price__text">до</div>
                                        <input 
                                            value={priceValues.to}
                                            onChange={setPriceValueTo}
                                            className="price__input" 
                                            type="number" 
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                        

                        
                        {!priceValues.from && !priceValues.to && (
                            <div className="filter__item">
                                <div className="filter__item__title">Услуги</div>
                                <div className="filter__item__content">
                                    
                                    <div className="content__spare">
                                        
                                        <div className="element">
                                            <input 
                                                type="checkbox" 
                                                id="element-service-1-mobile" 
                                                className="element__checkbox"
                                                checked={filterPoints['service-type-1']}
                                                onChange={setServiceType1} 
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-service-1-mobile">Для транспортировщиков паллет и эл. штабелеров</label>
                                            </div>
                                        </div>

                                        <div className="element">
                                            <input 
                                                type="checkbox" 
                                                id="element-service-2-mobile" 
                                                className="element__checkbox"
                                                checked={filterPoints['service-type-2']}
                                                onChange={setServiceType2}
                                            />
                                            <div className="element__text">
                                                <label htmlFor="element-service-2-mobile">Для ричтраков и электропогрузчиков</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                        <div className="filter__item">
                            <div className="filter__item__title">Запчасти</div>
                            <div className="filter__item__content">
                                
                                <div className="content__spare">

                                    <div className="element">
                                        <input
                                            checked={filterPoints['engine']}
                                            onChange={setSparesEngine} 
                                            type="checkbox" 
                                            id="element-spare-1-mobile" 
                                            className="element__checkbox" 
                                        />
                                        <div className="element__text">
                                            <label htmlFor="element-spare-1-mobile">Двигатель</label>
                                        </div>
                                    </div>

                                    <div className="element">
                                        <input 
                                            checked={filterPoints['electric stacker']}
                                            onChange={setServiceElectricStacker} 
                                            type="checkbox" 
                                            id="element-spare-2-mobile" 
                                            className="element__checkbox" 
                                        />
                                        <div className="element__text">
                                            <label htmlFor="element-spare-2-mobile">Электроштабеллер</label>
                                        </div>
                                    </div>

                                    <div className="element">
                                        <input
                                            checked={filterPoints['controlled bridge']}
                                            onChange={setServiceControlledBridge} 
                                            type="checkbox" 
                                            id="element-spare-3-mobile" 
                                            className="element__checkbox" 
                                        />
                                        <div className="element__text">
                                            <label htmlFor="element-spare-3-mobile">Управляемый мост</label>
                                        </div>
                                    </div>

                                    <div className="element">
                                        <input
                                            checked={filterPoints['hydraulics']}
                                            onChange={setServiceHydraulics} 
                                            type="checkbox" 
                                            id="element-spare-4-mobile" 
                                            className="element__checkbox" 
                                        />
                                        <div className="element__text">
                                            <label htmlFor="element-spare-4-mobile">Гидравлика</label>
                                        </div>
                                    </div>

                                    <div className="element">
                                        <input
                                            checked={filterPoints['mast']}
                                            onChange={setServiceMast}
                                            type="checkbox" 
                                            id="element-spare-5-mobile" 
                                            className="element__checkbox" 
                                        />
                                        <div className="element__text">
                                            <label htmlFor="element-spare-5-mobile">Мачта</label>
                                        </div>
                                    </div>

                                    <div className="element">
                                        <input
                                            checked={filterPoints['tires']}
                                            onChange={setServiceTires}  
                                            type="checkbox" 
                                            id="element-spare-6-mobile" 
                                            className="element__checkbox" 
                                        />
                                        <div className="element__text">
                                            <label htmlFor="element-spare-6-mobile">Шины</label>
                                        </div>
                                    </div>

                                    <div className="element">
                                        <input
                                            checked={filterPoints['battery']}
                                            onChange={setServiceBattery}
                                            type="checkbox" 
                                            id="element-spare-7-mobile" 
                                            className="element__checkbox" 
                                        />
                                        <div className="element__text">
                                            <label htmlFor="element-spare-7-mobile">АКБ</label>
                                        </div>
                                    </div>
                                
                                    <div className="element">
                                        <input
                                            checked={filterPoints['another']}
                                            onChange={setServiceAnother}
                                            type="checkbox" 
                                            id="element-spare-8-mobile" 
                                            className="element__checkbox" 
                                        />
                                        <div className="element__text">
                                            <label htmlFor="element-spare-8-mobile">Другие запчасти</label>
                                        </div>
                                    </div>

                                    <button 
                                        className="apply__filters"
                                        onClick={applyFiltersAndSearch}
                                        >Применить фильтры</button>
                                    <button
                                        onClick={clearFilters}
                                        className="clear__filters"
                                        >Сбросить фильтры
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            
        </div>
    );
}

export default PriceList;
