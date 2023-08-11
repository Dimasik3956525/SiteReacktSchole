import React from 'react';
import './PriceList.css';

const PriceBlock = ({ title, price, description }) => (
    <div className="priceBlock">
        <h3>{title}</h3>
        <h1 className="price">{price}</h1>
        <span>{description}</span>
        <button>Оставить заявку</button>
    </div>
);

const PriceList = () => (
    <div className="priceList" id='Price'>
        <h1>Стоимость обучения</h1>
        <div className="priceBlocks">
            <PriceBlock
                title="- PRO -"
                price="20000 Р"
                description="УМК по робототехнике и программированию"
            />
            <PriceBlock
                title="- PRBO -"
                price="15000 P"
                description="УМК по робототехнике"
            />
            <PriceBlock
                title="- PROG -"
                price="10000 Р"
                description="УМК по программировнию"
            />
        </div>
    </div>
);

export default PriceList;