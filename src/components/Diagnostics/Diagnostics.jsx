
import React from 'react';
import DiagnosticsImage from '../../assets/images/diagnosticsImage.webp';
import DiagnosticsEngine from '../Icons/DiagnosticsEngine/DiagnosticsEngine';
import DiagnosticsShield from '../Icons/DiagnosticsShield/DiagnosticsShield';
import WarehouseLoader from '../Icons/Warehouseloader/WarehouseLoader';
import SectionTitle from '../SectionTitle/SectionTitle';


import './Diagnostics.scss';

const Diagnostics = () => {
    return (
        <div className="diagnostics section">
            <div className="container">
                <div className="diagnostics__inner">
                    <SectionTitle title={"Как происходит диагностика автопогрузчиков"} />

                    <div className="diagnostics__inner__content">
                        <div className="diagnostics__item">
                            <DiagnosticsShield className={"diagnostics__image"} fill={"#343434"} />
                            <div className="diagnostics__item__title">Проверка гидравлической системы</div>
                        </div>

                        <div className="diagnostics__item">
                            <DiagnosticsEngine className={"diagnostics__image"} fill={"#343434"} />
                            <div className="diagnostics__item__title">Осмотр двигателя</div>
                        </div>

                        <div className="diagnostics__item">
                            <WarehouseLoader className={"diagnostics__image"} />
                            <div className="diagnostics__item__title">Проверка рабочих узлов, мостов и ходовой части</div>
                        </div>
                    </div>   
                </div>
            </div>

            <div className="diagnostics__subtext" style={{ background: `url(${DiagnosticsImage}), rgb(62, 62, 62)` }}>  
                <div className="container">
                    <div className="diagnostics__subtext__inner">
                        Во время эксплуатации погрузочной техники, как и в любом механизме, происходит износ основных узлов и агрегатов. Чтобы предотвратить серьезные поломки и связанные с ними технологические простои, важно вовремя осуществлять диагностику и ремонт автопогрузчиков.
                        Также проводится визуальный осмотр основных узлов техники для выявления неисправностей
                        После проверки составляется Акт с перечнем запасных частей и расходных материалов, необходимых для выполнения ремонта. Использование специальных инструментов и оборудования позволяет определять поломки и оперативно принимать меры для их устранения
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Diagnostics;
