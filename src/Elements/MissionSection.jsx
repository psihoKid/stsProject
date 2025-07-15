import React from "react";
import img01 from "../assets/mission-images/mission-01.png";
import img02 from "../assets/mission-images/mission-02.png";
import img03 from "../assets/mission-images/mission-03.png";
import img04 from "../assets/mission-images/mission-04.png";
import RightObject from "../assets/mission-images/right-object.png";

const missionItems = [
    { id: 1, img: img01, title: "Инновационные решения" },
    { id: 2, img: img02, title: "Технологический рост" },
    { id: 3, img: img03, title: "Бизнес-трансформация" },
    { id: 4, img: img04, title: "Масштабирование" },
];

const MissionSection = () => {
    return (
        <section id="about" className="w-full bg-gray-900 py-16 px-4 md:px-8">
            {/* Заголовок */}
            <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-sf-regular text-white flex items-center">
                    Наша Миссия
                    <span className="ml-2 text-xl text-emerald-400">↓</span>
                </h2>
                <p className="mt-4 font-sf-regular text-gray-300">
                    Масштабируем бизнес клиентов через прорывные технологии
                </p>
            </div>

            {/* Сетка карточек */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {missionItems.map((item) => (
                    <div
                        key={item.id}
                        className="relative rounded-xl overflow-hidden h-72 hover:scale-[1.02] transition-transform duration-300 group"
                    >
                        {/* Фото */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all"
                        />

                        {/* Затемненный оверлей */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all"></div>

                        {/* Крупный номер в верхней части */}
                        <span className="absolute text-white text-[9rem] font-extrabold opacity-20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-[15%] tracking-tighter">
                            {item.id}
                        </span>

                        {/* Текст */}
                        <div className="relative z-10 h-full flex items-end p-6">
                            <h3 className="text-xl font-medium text-white group-hover:text-emerald-300 transition-colors">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Декор */}
            <img
                src={RightObject}
                alt=""
                className="absolute right-0 top-1/2 -translate-y-1/2 w-32 opacity-20 pointer-events-none"
            />
        </section>
    );
};

export default MissionSection;