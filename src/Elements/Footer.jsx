import React from "react";

export default function Footer() {

    return (
        <footer className="w-full bg-[#06D77F] text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Верхняя часть - Логотип и описание */}
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-bebas-bold mb-2">Smart Technology Solutions</h2>
                    <p className="text-white font-bebas-regular opacity-90">Поэтапная реализация вашего проекта с нуля</p>
                </div>

                {/* Три вертикальных блока */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Левый блок - Навигация */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-sf-black uppercase mb-4 border-b border-white pb-2">НАВИГАЦИЯ</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="block hover:underline font-sf-regular">Главная</a></li>
                            <li><a href="#about" className="block hover:underline font-sf-regular">О Компании</a></li>
                            <li><a href="#advantages" className="block hover:underline font-sf-regular">Преимущества</a></li>
                            <li><a href="#development" className="block hover:underline font-sf-regular">Разработка</a></li>
                            <li><a href="#support" className="block hover:underline font-sf-regular">IT-Поддержка</a></li>
                        </ul>
                    </div>

                    {/* Центральный блок - Пустой или для дополнительной информации */}
                    <div className="text-center">
                        {/* Можно добавить логотип или другую информацию */}
                        <div className="h-full flex items-center justify-center font-sf-regular">
                            <p className="opacity-80">Ваш надежный IT-партнер</p>
                        </div>
                    </div>

                    {/* Правый блок - Контакты */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-sf-black uppercase mb-4 border-b border-white pb-2">ИНФОРМАЦИЯ</h3>
                        <ul className="space-y-3 font-sf-regular">
                            <li>Мурадов Ахьяд</li>
                            <li>
                                <a href="mailto:SMARTTECHNOL@YANDEX.KZ" className="hover:underline font-sf-regular">
                                    SMARTTECHNOL@YANDEX.KZ
                                </a>
                            </li>
                            <li>
                                <a href="tel:+77013041905" className="hover:underline font-sf-regular">
                                    +7 701 304 19 05
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Копирайт */}
                <div className="mt-12 pt-6 border-t border-white border-opacity-20 text-center text-white text-opacity-70 font-sf-regular">
                    © {new Date().getFullYear()} Smart Technology Solutions. Все права защищены.
                </div>
            </div>


        </footer>
    );
}