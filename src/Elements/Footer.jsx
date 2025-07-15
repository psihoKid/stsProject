import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-12 border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4">
                {/* Верхняя часть - Логотип и описание */}
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-bold mb-2 text-[#06D77F]">Smart Technology Solutions</h2>
                    <p className="text-gray-300">Поэтапная реализация вашего проекта с нуля</p>
                </div>

                {/* Три вертикальных блока */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Левый блок - Навигация */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold uppercase mb-4 border-b border-gray-600 pb-2 text-[#06D77F]">НАВИГАЦИЯ</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="block hover:text-[#06D77F] transition-colors text-gray-300">Главная</a></li>
                            <li><a href="#about" className="block hover:text-[#06D77F] transition-colors text-gray-300">О Компании</a></li>
                            <li><a href="#advantages" className="block hover:text-[#06D77F] transition-colors text-gray-300">Преимущества</a></li>
                            <li><a href="#development" className="block hover:text-[#06D77F] transition-colors text-gray-300">Разработка</a></li>
                            <li><a href="#support" className="block hover:text-[#06D77F] transition-colors text-gray-300">IT-Поддержка</a></li>
                        </ul>
                    </div>

                    {/* Центральный блок - Пустой или для дополнительной информации */}
                    <div className="text-center">
                        <div className="h-full flex items-center justify-center">
                            <p className="text-gray-400">Ваш надежный IT-партнер</p>
                        </div>
                    </div>

                    {/* Правый блок - Контакты */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-bold uppercase mb-4 border-b border-gray-600 pb-2 text-[#06D77F]">КОНТАКТЫ</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-300">Мурадов Ахьяд Ахметович</li>
                            <li>
                                <a href="mailto:info@smarttch.kz" className="hover:text-[#06D77F] transition-colors text-gray-300">
                                    info@smarttch.kz
                                </a>
                            </li>
                            <li>
                                <a href="tel:+77013041905" className="hover:text-[#06D77F] transition-colors text-gray-300">
                                    +7 701 304 19 05
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Копирайт */}
                <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Smart Technology Solutions. Все права защищены.
                </div>
            </div>
        </footer>
    );
}