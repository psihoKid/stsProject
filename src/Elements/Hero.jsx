import React, { useState } from "react";
import RectBlur1 from "../assets/rect-blur.png";
import RectBlur2 from "../assets/rect-blur.png";
import RectBlur3 from "../assets/rect-blur.png";

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section id="home" className="relative w-[100%] mx-auto h-[800px] overflow-hidden bg-gray-900">
            {/* Размытые прямоугольники */}
            <img
                src={RectBlur1}
                alt=""
                className="absolute left-[33%] top-[65%] w-[200px] h-[80px] opacity-10 pointer-events-none select-none"
            />
            <img
                src={RectBlur2}
                alt=""
                className="absolute left-1/2 top-[68%] w-[250px] h-[100px] opacity-10 -translate-x-1/2 pointer-events-none select-none"
            />
            <img
                src={RectBlur3}
                alt=""
                className="absolute left-[55%] top-[65%] w-[200px] h-[80px] opacity-10 pointer-events-none select-none"
            />

            {/* Контент */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                {/* Верхний заголовок */}
                <div className="mb-2 flex items-center space-x-2">
                    <span className="text-sm font-medium text-white uppercase tracking-widest">
                        Разработка ПО и цифровых платформ
                    </span>
                </div>

                {/* Основной заголовок */}
                <h1 className="text-4xl font-bebas-bold sm:text-5xl md:text-6xl font-bold text-white mb-2">
                    Smart Technology Solutions
                </h1>

                {/* Подзаголовок */}
                <p className="text-lg font-bebas-regular sm:text-xl text-gray-300 mb-8">
                    Поэтапная реализация вашего проекта с нуля
                </p>

                {/* Кнопки */}
                <div className="flex space-x-4">
                    {/* Кнопка "Контакты" */}
                    <button
                        onClick={toggleModal}
                        className="bg-gray-800 font-bebas-regular hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-full transition-colors border border-gray-700 cursor-pointer hover:cursor-pointer"
                    >
                        Контакты
                    </button>

                    {/* Кнопка "Узнать больше" */}
                    <a
                        href="#about"
                        className="relative bg-emerald-500 font-bebas-regular hover:bg-emerald-400 text-gray-900 font-medium px-6 py-3 rounded-full flex items-center justify-center transition-all"
                    >
                        Узнать больше
                        <svg
                            className="w-5 h-5 ml-2 text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 blur-lg"></span>
                    </a>
                </div>
            </div>

            {/* Модальное окно контактов */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 border border-gray-700">
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            Наши контакты
                        </h2>

                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start">
                                <svg
                                    className="w-5 h-5 mt-1 mr-3 text-emerald-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:info@smarttch.kz"
                                    className="hover:text-emerald-500 transition-colors cursor-pointer"
                                >
                                    info@smarttch.kz
                                </a>
                            </div>

                            <div className="flex items-start">
                                <svg
                                    className="w-5 h-5 mt-1 mr-3 text-emerald-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <a
                                    href="tel:+77013041905"
                                    className="hover:text-emerald-500 transition-colors cursor-pointer"
                                >
                                    +7 701 304 19 05
                                </a>
                            </div>

                            <div className="flex items-start">
                                <svg
                                    className="w-5 h-5 mt-1 mr-3 text-emerald-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>Караганда, ул. Мустафина, д2, н.п. 6</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <p className="text-gray-400 text-sm text-center">
                                Мы доступны с 9:00 до 18:00 по будням
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;