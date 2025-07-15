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
        <section id="development" className="w-full bg-gray-900">
            {/* Убраны все вертикальные отступы у родительского элемента */}
            <div className="w-full bg-gray-800 border-l-4 border-[#06D77F]">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-center mb-4"> {/* Добавлено justify-center */}
                        <svg
                            className="w-5 h-5 text-[#06D77F]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="text-[#06D77F] uppercase ml-2 text-sm">
                            SMART TECHNOLOGY SOLUTIONS
                        </span>
                    </div>
                    <h2 className="text-3xl text-white mb-2 text-center"> {/* Добавлено text-center */}
                        Разработка ПО и цифровых платформ
                    </h2>
                    <p className="text-lg text-gray-300 text-center"> {/* Добавлено text-center */}
                        Поэтапная реализация вашего проекта с нуля
                    </p>
                </div>
            </div>

            {/* Блок со списками */}
            <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center"> {/* Добавлено flex и центрирование */}
                        <h3 className="text-xl text-[#06D77F] mb-4 text-center"> {/* Добавлено text-center */}
                            Преимущество продуктовой разработки:
                        </h3>
                        <ul className="space-y-3">
                            {advantages.map((item, i) => (
                                <li className="text-gray-300" key={i}>
                                    <span className="text-[#06D77F]">• </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center"> {/* Добавлено flex и центрирование */}
                        <h3 className="text-xl text-[#06D77F] mb-4 text-center"> {/* Добавлено text-center */}
                            Примеры решений:
                        </h3>
                        <ul className="space-y-3">
                            {examples.map((item, i) => (
                                <li className="text-gray-300" key={i}>
                                    <span className="text-[#06D77F]">• </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}