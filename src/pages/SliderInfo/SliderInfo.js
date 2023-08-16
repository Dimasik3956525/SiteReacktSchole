import React, { useState ,useEffect} from 'react';
import Modal from 'react-modal';
import './SliderInfo.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import men1 from '../../img/men1.jpg';
import men2 from '../../img/men2.jpg';
import girl1 from '../../img/girl1.jpg';
import girl2 from '../../img/girl2.jpg';
import girl3 from '../../img/girl3.jpg';

const SliderInfo = () => {
    const images = [
        { src: men1, name: 'Максим Петров',
            text: 'Преподаватель по программированию.',
            details: 'Дополнительный текст для Максима Петрова' },
        { src: men2, name: 'Констя Назаров',
            text: 'Преподаватель по робототехнике.',
            details: 'Дополнительный текст для Константина Назарова' },
        { src: girl1, name: 'Ирина Лайм',
            text: 'Преподаватель по робототехнике.',
            details: 'Дополнительный текст для Ирины Лайм' },
        { src: girl2, name: 'Марина Орлова',
            text: 'Преподаватель по робототехнике.',
            details: 'Дополнительный текст для Марины Орловой' },
        { src: girl3, name: 'Лиза Весенняя',
            text: 'Преподаватель по программированию.',
            details: 'Дополнительный текст для Лизы Весенней' }
    ];


    const [slidesToShow, setSlidesToShow] = useState(window.innerWidth < 769 ? 2 : 3);

    const updateSlidesToShow = () => {
        setSlidesToShow(window.innerWidth < 769 ? 2 : 3);
    };

    useEffect(() => {
        window.addEventListener("resize", updateSlidesToShow);
        return () => {
            window.removeEventListener("resize", updateSlidesToShow);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const openModal = (index) => {
        setSelectedTeacher(index);
    };

    const closeModal = () => {
        setSelectedTeacher(null);
    };

    return (
        <div className="SliderInfo" id='Trener'>
            <div className="slider">

                    <h1>Профессиональные тренеры</h1>

                <div className="slider-container">
                    <Slider {...settings} slidesToShow={slidesToShow}>
                        {images.map((image, index) => (
                            <div key={index} className="teacher-item">
                                <img src={image.src} alt={`Slide ${index + 1}`} />
                                <h3>{image.name}</h3>
                                <p>{image.text}</p>
                                <div className='buttonInfo'>
                                <button onClick={() => openModal(index)}>Подробнее</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {selectedTeacher && (
                <Modal
                    isOpen={selectedTeacher}
                    onRequestClose={closeModal}
                    contentLabel="Преподаватель"
                    className="modal"
                >
                    <div className="modal-content">
                        <img src={images[selectedTeacher].src} alt={`Slide ${selectedTeacher + 1}`} />
                        <h3>{images[selectedTeacher].name}</h3>
                        <p>{images[selectedTeacher].details}</p>
                        <button onClick={closeModal}>Закрыть</button>
                    </div>



                </Modal>
            )}
        </div>
    );
};

export default SliderInfo;


