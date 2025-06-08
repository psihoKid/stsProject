import React from "react";

export default function DevelopmentFeatures() {
    const advantages = [
        "Гибкость и масштабируемость",
        "Полная прозрачность и контроль за процессом",
        "Разработка MVP в установленные сроки",
        "Фокус на ценности и значимости",
    ];

    const examples = [
        "Цифровые двойники",
        "ПО для логистики и транспортной отрасли",
        "Видео-аналитика и машинное зрение",
        "Проектирование и внедрение АСУТП",
        "SCADA системы",
        "Предиктивная аналитика",
    ];

    return (
        <section id="development" className="w-full mt-16">
            {/* Зеленый блок с центрированным содержимым */}
            <div className="w-full bg-[#06D77F] p-8 rounded-tr-3xl rounded-br-3xl">
                {/* Центрирующий контейнер */}
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex justify-center items-center mb-4">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="text-white uppercase ml-2 text-sm font-medium">
                            Smart Technology Solutions
                        </span>
                    </div>
                    <h2 className="text-3xl font-bebas-bold text-white mb-4">
                        Разработка ПО и цифровых платформ
                    </h2>
                    <p className="text-lg font-bebas-regular text-white">
                        Поэтапная реализация вашего проекта с нуля
                    </p>
                </div>
            </div>

            {/* Блок со списками (остается без изменений) */}
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-sf-bold text-[#06D77F] mb-4">
                            Преимущество продуктовой разработки:
                        </h3>
                        <ul className="list-disc font-sf-regular list-inside space-y-2 text-[#06D77F]">
                            {advantages.map((item, i) => (
                                <li className="font-sf-regular" key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-sf-bold text-[#06D77F] mb-4">
                            Примеры решений:
                        </h3>
                        <ul className="list-disc font-sf-regular list-inside space-y-2 text-[#06D77F]">
                            {examples.map((item, i) => (
                                <li className="font-sf-regular" key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}