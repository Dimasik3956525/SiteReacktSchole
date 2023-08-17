import React, { useState, useEffect } from 'react';
import './Forma.css';
import axios from 'axios';

const Forma = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);



    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const formPosition = document.querySelector('.discountForm').offsetTop;

            if (scrollPosition > formPosition) {
                setIsVisible(true);

                if (!hasAnimated) {
                    setHasAnimated(true);
                }
            } else {
                setIsFormVisible(true);
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!isFormVisible && isVisible) {
            setHasAnimated(false);
        }
    }, [isVisible, isFormVisible]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Отправляем данные на бэкенд
            await axios.post('http://localhost:4000/api/user', formData);

            // Очищаем форму после успешной отправки
            setFormData(initialState);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const initialState = {
        name: '',
        phone: '',
        email: ''
    };

    const [formData, setFormData] = useState(initialState);

    return (
        <div className="discountBlock">
            <div className="discountInfo">
                <h2>Запишитесь на курс со скидкой 10%</h2>
                <p>Акция действительна до 22 марта 2023 г.</p>
            </div>
            <div className={`discountForm ${isVisible ? 'active' : ''}`}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Номер телефона"
                        value={formData.phone}
                        onChange={handleChange}
                        onKeyPress={(e) => {
                            if (isNaN(Number(e.key))) {
                                e.preventDefault();
                            }
                        }}
                    />
                    <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <button type="submit">Оставить заявку</button>
                </form>
            </div>
        </div>
    );
};

export default Forma;
