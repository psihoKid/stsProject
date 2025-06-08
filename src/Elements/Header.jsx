import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
    // Функция для плавной прокрутки к якорю
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Учитываем высоту хедера
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 h-16">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
                {/* Логотип с якорем на главную */}
                <div className="flex items-center h-full">
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, 'home')}
                        className="flex items-center"
                    >
                        <img
                            src={Logo}
                            alt="STS Logo"
                            className="h-40 w-40 object-contain"
                        />
                    </a>
                </div>

                {/* Меню с якорями */}
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <a
                                href="#home"
                                onClick={(e) => scrollToSection(e, 'home')}
                                className="text-gray-800 font-sf-regular hover:text-blue-500"
                            >
                                Главная
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => scrollToSection(e, 'about')}
                                className="text-gray-800 font-sf-regular hover:text-blue-500"
                            >
                                О Компании
                            </a>
                        </li>
                        <li>
                            <a
                                href="#advantages"
                                onClick={(e) => scrollToSection(e, 'advantages')}
                                className="text-gray-800 font-sf-regular hover:text-blue-500"
                            >
                                Преимущества
                            </a>
                        </li>
                        <li>
                            <a
                                href="#development"
                                onClick={(e) => scrollToSection(e, 'development')}
                                className="text-gray-800 font-sf-regular hover:text-blue-500"
                            >
                                Разработка
                            </a>
                        </li>
                        <li>
                            <a
                                href="#support"
                                onClick={(e) => scrollToSection(e, 'support')}
                                className="text-gray-800 font-sf-regular hover:text-blue-500"
                            >
                                IT-Поддержка
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;