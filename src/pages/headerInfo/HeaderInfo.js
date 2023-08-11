import React from 'react';
import './HeaderInfo.css';
import Group221 from '../../img/Group211.png';


const HeaderInfo = () => (
    <div className="headerInfo">
        <div className="headerInfoLeft">
            <h1>ROBO.SCHOLL</h1>
            <span>Курсы повышение квалификации по робототехнике
                для педагогов начальной школы</span>
            <button>Записаться на курсы</button>
        </div>
        <div className="headerInfoRight">
            <img src={Group221} alt="IMAGES" />
        </div>
    </div>
);

export default HeaderInfo;



