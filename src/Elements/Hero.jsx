// src/components/HeroSection.jsx
import React from "react";

// Пути к вашим ассетам (поместите их в папку `src/assets/`)
import ShapeSVG from "../assets/shape.svg";
import RectBlur1 from "../assets/rect-blur.png";
import RectBlur2 from "../assets/rect-blur.png";
import RectBlur3 from "../assets/rect-blur.png";
import SphereBlur1 from "../assets/sphere-blur1.png";
import SphereBlur2 from "../assets/sphere-blur2.png";

const HeroSection = () => {
    return (
        <section id="home" className="relative w-[90%] mx-auto h-[800px] overflow-hidden">
            {/* 1) Фоновый SVG-контур с нужными скруглениями */}
            <img
                src={ShapeSVG}
                alt="Background shape"
                className="absolute inset-0 w-full h-full object-fill transform scale-100 pointer-events-none select-none"
            />

            {/* 2) Сферические блики (два изображения) */}
            <img
                src={SphereBlur1}
                alt=""
                className="absolute left-[4%] top-[40%] w-[400px] h-[300px] opacity-50 blur-[4px] pointer-events-none select-none"
                style={{ mixBlendMode: "screen" }}
            />
            <img
                src={SphereBlur2}
                alt=""
                className="absolute right-[12%] top-[10%] w-[500px] h-[400px] opacity-50 blur-[2px] pointer-events-none select-none"
                style={{ mixBlendMode: "screen" }}
            />

            {/* 3) Три «матовых» прямоугольника с размытием под текстом */}
            <img
                src={RectBlur1}
                alt=""
                className="absolute left-[33%] top-[65%] w-[200px] h-[80px] opacity-50 pointer-events-none select-none"
            />
            <img
                src={RectBlur2}
                alt=""
                className="absolute left-1/2 top-[68%] w-[250px] h-[100px] opacity-50 -translate-x-1/2 pointer-events-none select-none"
            />
            <img
                src={RectBlur3}
                alt=""
                className="absolute left-[55%] top-[65%] w-[200px] h-[80px] opacity-50 pointer-events-none select-none"
            />

            {/* 4) Контент (надпись, заголовок, подзаголовок, кнопки) */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                {/* Иконка-крестик + заголовок “Smart Technology Solutions” */}
                <div className="mb-2 flex items-center space-x-2">
                    {/* <svg
                        className="w-5 h-5 text-[#06D77F]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                        />
                    </svg> */}
                    <span className="text-sm font-medium text-[#06D77F] uppercase tracking-widest">
                        Smart Technology Solutions
                    </span>
                </div>

                {/* Основной заголовок */}
                <h1 className="text-4xl font-bebas-bold sm:text-5xl md:text-6xl font-bold text-[#06D77F] mb-2">
                    Разработка ПО и цифровых платформ
                </h1>

                {/* Подзаголовок */}
                <p className="text-lg font-bebas-regular sm:text-xl text-[#06D77F] mb-8">
                    Поэтапная реализация вашего проекта с нуля
                </p>

                {/* Кнопки */}
                <div className="flex space-x-4">
                    {/* Кнопка “Контакты” */}
                    <button className="bg-gray-700 font-bebas-regular hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-full transition-colors">
                        Контакты
                    </button>

                    {/* Кнопка “Узнать больше” */}
                    <button className="relative bg-[#06D77F] font-bebas-regular hover:bg-[#04C66C] text-black font-medium px-6 py-3 rounded-full flex items-center justify-center transition-all">
                        Узнать больше
                        <svg
                            className="w-5 h-5 ml-2 text-black"
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
                        {/* Полупрозрачная подстветка (свеча) */}
                        <span className="absolute inset-0 rounded-full bg-[#06D77F] opacity-40 blur-lg"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
