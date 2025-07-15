import React from 'react';

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
        <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-sm z-50 h-16">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
                {/* Текстовый логотип */}
                <div className="flex items-center h-full mr-[100px]">
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, 'home')}
                        className="flex items-center"
                    >
                        <h1 className="text-2xl font-bold font-sf-regular text-white">
                            Smart Technology Solutions
                        </h1>
                    </a>
                </div>

                {/* Меню с якорями */}
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <a
                                href="#home"
                                onClick={(e) => scrollToSection(e, 'home')}
                                className="text-white font-sf-regular hover:text-blue-400 transition-colors"
                            >
                                Главная
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => scrollToSection(e, 'about')}
                                className="text-white font-sf-regular hover:text-blue-400 transition-colors"
                            >
                                О Компании
                            </a>
                        </li>
                        <li>
                            <a
                                href="#advantages"
                                onClick={(e) => scrollToSection(e, 'advantages')}
                                className="text-white font-sf-regular hover:text-blue-400 transition-colors"
                            >
                                Преимущества
                            </a>
                        </li>
                        <li>
                            <a
                                href="#development"
                                onClick={(e) => scrollToSection(e, 'development')}
                                className="text-white font-sf-regular hover:text-blue-400 transition-colors"
                            >
                                Разработка
                            </a>
                        </li>
                        <li>
                            <a
                                href="#support"
                                onClick={(e) => scrollToSection(e, 'support')}
                                className="text-white font-sf-regular hover:text-blue-400 transition-colors"
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