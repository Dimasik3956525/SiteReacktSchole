import React from 'react';
import './App.css';

import InfoNumber from './pages/InfoNumber/InfoNumber';
import NavMenu from './pages/NavMenu/NavMenu';
import HeaderInfo from "./pages/headerInfo/HeaderInfo";
import InfoEnd from "./pages/InfoEnd/InfoEnd";
import SliderInfo from "./pages/SliderInfo/SliderInfo";
import InfoText from "./pages/InfoText/infoText";
import PriceList from "./pages/PriceList/PriceList";
import Forma from "./pages/Forma/Forma";
import FooterSite from "./pages/FooterSite/FooterSite";

function App() {

    return (
        <div className="App">
            <NavMenu/>
            <HeaderInfo/>
            <div className='container'>
                <InfoText/>
                <InfoNumber/>
                <InfoEnd/>
                <SliderInfo/>
                <PriceList/>
            </div>
            <Forma/>
            <FooterSite/>


        </div>
    );
}

export default App;

