import React from "react";
import SemiCircle from "../assets/semi-circle.svg";
import CornerShape from "../assets/corner-shape.svg";

export default function ApproachSection() {
    const leftItems = [
        "Проводим всесторонний анализ задач и потребностей клиента",
        "Подбираем компетентных партнёров для успешного исполнения IT-проектов любой сложности",
        "Предлагаем технологически продвинутые решения, соответствующие актуальным потребностям бизнеса",
    ];
    const rightItems = [
        "Обеспечиваем комплексную реализацию проектов «под ключ» с гибкой командой, адаптированной под отраслевые требования",
        "Обеспечиваем мониторинг и контроль проекта на всех этапах с гарантированным соблюдением сроков и гибкими подходами к бюджету",
    ];

    return (
        <section id="advantages" className="relative w-full bg-gray-50 py-16 overflow-visible">
            {/* Заголовок поверх полукруга */}
            <h2 className="relative z-40 -mt-[60px] font-sf-regular text-center text-2xl md:text-3xl text-gray-900 mb-12">
                Наш подход и преимущества
            </h2>

            {/* Полукруглый фон */}
            <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none select-none z-20">
                <img
                    src={SemiCircle}
                    alt=""
                    className="w-3/4 md:w-1/2 object-contain h-1/2"
                />
            </div>

            {/* Слоган внутри колец */}
            {/* Слоган внутри полукруга, центрирован по середине белого круга */}
            <div className="absolute inset-x-0 top-1/2 flex justify-center pointer-events-none select-none z-30" style={{ transform: 'translateY(-40%)' }}>
                <span className="text-center font-sf-regular text-lg md:text-2xl font-bold text-green-500 max-w-[50%] mx-auto">
                    ПАРТНЁРСКАЯ МОДЕЛЬ = ГИБКОСТЬ + КАЧЕСТВО
                </span>

            </div>

            {/* Белая карточка, смещена вниз (увеличили отступ) */}
            <div className="relative z-40 max-w-5xl mx-auto px-4 pt-64">
                <div className="bg-white rounded-3xl shadow-lg p-6 md:p-12 flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 overflow-hidden">
                    <ul className="flex-1 list-disc list-inside space-y-4 text-green-500 text-sm">
                        {leftItems.map((text, i) => (
                            <li key={i}>{text}</li>
                        ))}
                    </ul>
                    <ul className="flex-1 list-disc list-inside space-y-4 text-green-500 text-sm">
                        {rightItems.map((text, i) => (
                            <li key={i}>{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
