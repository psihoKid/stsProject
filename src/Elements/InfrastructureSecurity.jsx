import React from "react";
import security from "../assets/security.svg";
import design from "../assets/design.svg";
import construction from "../assets/construction.svg";
import integration from "../assets/integration.svg";
import support from "../assets/support.svg";

export default function InfrastructureSupport() {
    return (
        <section id="support" className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Основной заголовок */}
                <h2 className="text-3xl font-sf-regular text-gray-900 mb-16">
                    Инфраструктура безопасность<br />
                    <span className="font-sf-regular">и IT-поддержка</span>
                </h2>

                {/* Центральный блок безопасности */}
                <div className="flex justify-center mb-16">
                    <div className="text-center max-w-2xl">
                        <h3 className="text-2xl font-sf-regular uppercase text-gray-900 mb-6">
                            ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ:
                        </h3>
                        <p className="text-gray-700 font-sf-regular mb-8">
                            АУДИТ БЕЗОПАСНОСТИ IT СИСТЕМ И ДАННЫХ, РЕЗЕРВИРОВАНИЕ АППАРАТНЫХ И ИНФОРМАЦИОННЫХ РЕСУРСОВ,
                            ЗАЩИТА КОНФИДЕНЦИАЛЬНОЙ ИНФОРМАЦИИ ОТ КИБЕРАТАК И ВИРУСОВ, ОБУЧЕНИЕ СОТРУДНИКОВ
                        </p>
                        <div className="mx-auto w-48">
                            <img
                                src={security}
                                alt="Информационная безопасность"
                                className="w-[123px] h-[126] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Горизонтальные блоки услуг */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 1. Проектирование и аудит */}
                    <div className="p-4 rounded-lg flex flex-col items-center text-center">
                        <div className="mb-4 w-32 h-24">
                            <img
                                src={design}
                                alt="Проектирование и аудит"
                                className="w-[106px] h-[125px]  object-cover rounded"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-[#ffffff] mb-2">
                            ᵣ
                        </h3>
                        <p className="text-gray-900 font-sf-regular font-medium">
                            Проектирование<br />
                            и аудит IT-инфраструктуры
                        </p>
                    </div>

                    {/* 2. Построение и сопровождение */}
                    <div className="p-4 rounded-lg flex flex-col items-center text-center">
                        <div className="mb-4 w-32 h-24">
                            <img
                                src={construction}
                                alt="Проектирование и аудит"
                                className="w-[123px] h-[126]  object-cover rounded"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-[#ffffff] mb-2">
                            ᵣ
                        </h3>
                        <p className="text-gray-900 font-sf-regular font-medium">
                            Построение и сопровождение шагов
                        </p>
                    </div>

                    {/* 3. Интеграция систем */}
                    <div className="p-4 rounded-lg flex flex-col items-center text-center">
                        <div className="mb-4 w-32 h-24">
                            <img
                                src={integration}
                                alt="Проектирование и аудит"
                                className="w-[128px] h-[99px]  object-cover rounded"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-[#ffffff] mb-2">
                            ᵣ
                        </h3>
                        <p className="text-gray-900 font-sf-regular font-medium">
                            Интеграция IP-телефонии,<br />
                            видеонаблюдения, ВКС
                        </p>
                    </div>

                    {/* 4. Техподдержка */}
                    <div className="p-4 rounded-lg flex flex-col items-center text-center">
                        <div className="mb-4 w-32 h-24">
                            <img
                                src={support}
                                alt="Проектирование и аудит"
                                className="w-[114px] h-[101px]  object-cover rounded"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-[#ffffff] mb-2">
                            ᵣ
                        </h3>
                        <p className="text-gray-900 font-sf-regular font-medium">
                            Техническая поддержка 24/7<br />
                            и SERVICE DESK
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}