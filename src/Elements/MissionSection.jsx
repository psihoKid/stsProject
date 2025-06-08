// src/components/MissionSection.jsx
import React from "react";

// Импортируем реальные фотографии из src/assets/mission-images
import img01 from "../assets/mission-images/mission-01.png";
import img02 from "../assets/mission-images/mission-02.png";
import img03 from "../assets/mission-images/mission-03.png";
import img04 from "../assets/mission-images/mission-04.png";

const missionItems = [
    {

        img: img01
    },
    {

        img: img02
    },
    {

        img: img03,
    },
    {

        img: img04,
    },
];

import RightObject from "../assets/mission-images/right-object.png";

const MissionSection = () => {
    return (
        <section id="about" className="w-full bg-gray-50 py-12 px-4 md:px-8">
            {/* Заголовок */}
            <div className="max-w-4xl mx-auto mb-8">
                <h2 className="text-3xl font-sf-regular text-gray-900  flex items-center">
                    Наша Миссия
                    <span className="ml-2 text-xl">↓</span>
                </h2>
                <p className="mt-2 font-sf-regular text-gray-600">
                    масштабировать бизнес клиентов через технологические решения
                </p>
            </div>

            {/* Сетка карточек */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {missionItems.map((item) => (
                    <div
                        key={item.id}
                        className="relative rounded-lg overflow-hidden h-52 md:h-64"
                    >
                        {/* 1) Фото блока во весь размер карточки */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* 2) Полупрозрачный чёрный оверлей (чтобы текст был читабелен) */}
                        <div className="absolute inset-0  bg-opacity-40"></div>

                        {/* 3) Большой номер (полупрозрачный, чтобы «просвечивал» через фото) */}
                        <span className="absolute text-white text-[5rem] md:text-[7rem] font-extrabold opacity-30 leading-none -bottom-3 -left-3 select-none pointer-events-none">
                            {item.id}
                        </span>

                        {/* 4) Текст поверх */}
                        <div className="relative z-10 h-full flex items-center px-6">
                            <h3 className="text-lg md:text-xl font-medium text-white">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MissionSection;
