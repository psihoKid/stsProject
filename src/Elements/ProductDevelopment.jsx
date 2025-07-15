import React from "react";

export default function ProductDevelopment() {
    // горизонтальные расстояния в px
    const d12 = 274.2;  // 01 → 02
    const d23 = 279;    // 02 → 03
    const d34 = 274;    // 03 → 04

    // вертикальная ветка длиной 274px
    const verticalLen = 274;

    // отступ сверху для цифр 01–04 и 05–06
    const digitTopOffset = 20;

    // общая ширина верхней линии (01→04)
    const topWidth = d12 + d23 + d34;
    const halfTop = topWidth / 2;

    // Y-координаты
    const yTopLine = 100;           // где проходит верхняя линия
    const yVertTop = yTopLine;      // начало вертикали
    const yVertBot = yTopLine + verticalLen; // конец вертикали

    // расстояние между цифрой и подписью
    const labelOffset = 15;

    // позиция для 05 (между 02 и 03)
    const dx05 = d12 + d23 / 2;
    // позиция для 06 (под 01)
    const dx06 = 0;

    return (
        <section className="w-full bg-gray-900 py-12">
            <h2 className="text-2xl md:text-3xl font-sf-regular text-white mb-12 text-center">
                Продуктовая разработка
            </h2>

            <div
                className="relative mx-auto"
                style={{ width: `${topWidth}px`, height: "600px" }}
            >
                {/* Верхняя линия 01–04 */}
                <div
                    style={{
                        position: "absolute",
                        top: `${yTopLine}px`,
                        left: `calc(50% - ${halfTop}px)`,
                        width: `${topWidth}px`,
                        borderTop: "2px solid #06D77F",
                    }}
                />

                {/* Точки под 01–04 */}
                {[0, d12, d12 + d23, d12 + d23 + d34].map((dx, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            top: `${yTopLine}px`,
                            left: `calc(50% - ${halfTop}px + ${dx}px)`,
                            width: "10px",
                            height: "10px",
                            backgroundColor: "#06D77F",
                            borderRadius: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                ))}

                {/* Цифры 01–04 и подписи */}
                {["01", "02", "03", "04"].map((id, i) => {
                    const dx =
                        i === 0
                            ? 0
                            : i === 1
                                ? d12
                                : i === 2
                                    ? d12 + d23
                                    : d12 + d23 + d34;
                    const labels = {
                        "01": "Дискавери фаза",
                        "02": "Бэклог продукта",
                        "03": "Планирование спринта",
                        "04": "Ревью спринта",
                    };
                    return (
                        <div
                            key={id}
                            style={{
                                position: "absolute",
                                top: `${digitTopOffset}px`,
                                left: `calc(50% - ${halfTop}px + ${dx}px)`,
                                transform: "translateX(-50%)",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "72px",
                                    lineHeight: 1,
                                    color: "#06D77F",
                                    fontWeight: 700,
                                }}
                            >
                                {id}
                            </div>
                            <div
                                style={{
                                    marginTop: `${labelOffset}px`,
                                    fontSize: "14px",
                                    color: "#E5E7EB",
                                }}
                            >
                                {labels[id]}
                            </div>
                        </div>
                    );
                })}

                {/* Вертикальная линия из центра 03 */}
                <div
                    style={{
                        position: "absolute",
                        top: `${yVertTop}px`,
                        left: `calc(50% - ${halfTop}px + ${d12 + d23 / 2}px)`,
                        height: `${verticalLen}px`,
                        borderLeft: "2px solid #06D77F",
                    }}
                />
                {/* Точки на вертикали */}
                {[yVertTop, yVertBot].map((yt, idx) => (
                    <div
                        key={idx}
                        style={{
                            position: "absolute",
                            top: `${yt}px`,
                            left: `calc(50% - ${halfTop}px + ${d12 + d23 / 2}px)`,
                            width: "10px",
                            height: "10px",
                            backgroundColor: "#06D77F",
                            borderRadius: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                ))}

                {/* Нижняя линия 06↔05 */}
                <div
                    style={{
                        position: "absolute",
                        top: `${yVertBot}px`,
                        left: `calc(50% - ${halfTop}px + ${dx06}px)`,
                        width: `${dx05 - dx06}px`,
                        borderTop: "2px solid #06D77F",
                    }}
                />
                {/* Точки под 06 и 05 */}
                {[dx06, dx05].map((dx, idx) => (
                    <div
                        key={idx}
                        style={{
                            position: "absolute",
                            top: `${yVertBot}px`,
                            left: `calc(50% - ${halfTop}px + ${dx}px)`,
                            width: "10px",
                            height: "10px",
                            backgroundColor: "#06D77F",
                            borderRadius: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                ))}

                {/* Цифры 06 и 05 */}
                {[
                    { id: "06", dx: dx06, label: "Поддержка" },
                    { id: "05", dx: dx05, label: "Инкременты" },
                ].map((step) => (
                    <div
                        key={step.id}
                        style={{
                            position: "absolute",
                            top: `${yVertBot + 6 + 14}px`, // точка 6px + gap 14px
                            left: `calc(50% - ${halfTop}px + ${step.dx}px)`,
                            transform: "translateX(-50%)",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "72px",
                                lineHeight: 1,
                                color: "#06D77F",
                                fontWeight: 700,
                            }}
                        >
                            {step.id}
                        </div>
                        <div
                            style={{
                                marginTop: `${labelOffset}px`,
                                fontSize: "14px",
                                color: "#E5E7EB",
                            }}
                        >
                            {step.label}
                        </div>
                    </div>
                ))}

                {/* Буллет-лист справа от 03 */}
                <ul
                    style={{
                        position: "absolute",
                        top: `calc(${yVertTop + verticalLen / 2}px - 70px)`,
                        left: `calc(50% - ${halfTop}px + ${d12 + d23}px + 5px)`,
                        maxWidth: "200px",
                        color: "#E5E7EB",
                        fontSize: "14px",
                        listStyle: "disc inside",
                        lineHeight: 1.6,
                    }}
                >
                    <li className="font-sf-regular">Дорожная карта продукта</li>
                    <li className="font-sf-regular">Спецификация требований к ПО</li>
                    <li className="font-sf-regular">Документ об архитектурном видении</li>
                    <li className="font-sf-regular">Дизайн продукта</li>
                    <li className="font-sf-regular">Первоначальный бэклог</li>
                </ul>
            </div>
        </section>
    );
}