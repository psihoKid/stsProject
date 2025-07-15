import React from "react";
import security from "../assets/security.svg";
import design from "../assets/design.svg";
import construction from "../assets/construction.svg";
import integration from "../assets/integration.svg";
import support from "../assets/support.svg";

export default function InfrastructureSupport() {
    return (
        <section id="support" className="w-full py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                {/* Основной заголовок - добавлено text-center */}
                <h2 className="text-3xl font-sf-regular text-white mb-16 text-center">
                    Инфраструктура безопасность<br />
                    <span className="font-sf-regular text-gray-300">и IT-поддержка</span>
                </h2>

                {/* Центральный блок безопасности */}
                <div className="flex justify-center mb-16">
                    <div className="text-center max-w-2xl">
                        <h3 className="text-2xl font-sf-regular uppercase text-white mb-6">
                            ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ:
                        </h3>
                        <p className="text-gray-300 font-sf-regular mb-8">
                            АУДИТ БЕЗОПАСНОСТИ IT СИСТЕМ И ДАННЫХ, РЕЗЕРВИРОВАНИЕ АППАРАТНЫХ И ИНФОРМАЦИОННЫХ РЕСУРСОВ,
                            ЗАЩИТА КОНФИДЕНЦИАЛЬНОЙ ИНФОРМАЦИИ ОТ КИБЕРАТАК И ВИРУСОВ, ОБУЧЕНИЕ СОТРУДНИКОВ
                        </p>
                        <div className="mx-auto w-48">
                            <img
                                src={security}
                                alt="Информационная безопасность"
                                className="w-[123px] h-[126px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Горизонтальные блоки услуг */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 1. Проектирование и аудит */}
                    <div className="p-6 rounded-lg bg-gray-800 flex flex-col items-center text-center hover:bg-gray-700 transition-colors">
                        <div className="mb-4 w-32 h-24 flex items-center justify-center"> {/* Добавлен flex для центрирования */}
                            <img
                                src={design}
                                alt="Проектирование и аудит"
                                className="w-20 h-20 object-contain rounded" // Уменьшен размер
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-white mb-2">
                            ПРОЕКТИРОВАНИЕ
                        </h3>
                        <p className="text-gray-300 font-sf-regular">
                            Проектирование<br />
                            и аудит IT-инфраструктуры
                        </p>
                    </div>

                    {/* 2. Построение и сопровождение */}
                    <div className="p-6 rounded-lg bg-gray-800 flex flex-col items-center text-center hover:bg-gray-700 transition-colors">
                        <div className="mb-4 w-32 h-24 flex items-center justify-center">
                            <img
                                src={construction}
                                alt="Построение и сопровождение"
                                className="w-20 h-20 object-contain rounded" // Уменьшен размер
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-white mb-2">
                            СОПРОВОЖДЕНИЕ
                        </h3>
                        <p className="text-gray-300 font-sf-regular">
                            Построение и сопровождение<br />
                            IT-инфраструктуры
                        </p>
                    </div>

                    {/* 3. Интеграция систем */}
                    <div className="p-6 rounded-lg bg-gray-800 flex flex-col items-center text-center hover:bg-gray-700 transition-colors">
                        <div className="mb-4 w-32 h-24 flex items-center justify-center">
                            <img
                                src={integration}
                                alt="Интеграция систем"
                                className="w-20 h-20 object-contain rounded" // Уменьшен размер
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-white mb-2">
                            ИНТЕГРАЦИЯ
                        </h3>
                        <p className="text-gray-300 font-sf-regular">
                            Интеграция IP-телефонии,<br />
                            видеонаблюдения, ВКС
                        </p>
                    </div>

                    {/* 4. Техподдержка */}
                    <div className="p-6 rounded-lg bg-gray-800 flex flex-col items-center text-center hover:bg-gray-700 transition-colors">
                        <div className="mb-4 w-32 h-24 flex items-center justify-center">
                            <img
                                src={support}
                                alt="Техническая поддержка"
                                className="w-20 h-20 object-contain rounded" // Уменьшен размер
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-white mb-2">
                            ПОДДЕРЖКА
                        </h3>
                        <p className="text-gray-300 font-sf-regular">
                            Техническая поддержка 24/7<br />
                            и SERVICE DESK
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}