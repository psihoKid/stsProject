import React from "react";
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
        <section id="advantages" className="relative w-full bg-gray-900 py-16 overflow-visible">
            {/* Заголовок */}
            <h2 className="font-medium text-center text-3xl text-white mb-12">
                Наш подход и преимущества
            </h2>

            {/* Слоган
            <div className="mb-16 text-center">
                <span className="text-center text-xl font-medium text-green-500 max-w-[80%] mx-auto">
                    ПАРТНЁРСКАЯ МОДЕЛЬ = ГИБКОСТЬ + КАЧЕСТВО
                </span>
            </div> */}

            {/* Темная карточка */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-gray-800 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 overflow-hidden">
                    <ul className="flex-1 list-disc list-inside space-y-4 text-green-500">
                        {leftItems.map((text, i) => (
                            <li key={i} className="text-gray-300">{text}</li>
                        ))}
                    </ul>
                    <ul className="flex-1 list-disc list-inside space-y-4 text-green-500">
                        {rightItems.map((text, i) => (
                            <li key={i} className="text-gray-300">{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}