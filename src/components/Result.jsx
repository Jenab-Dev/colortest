import React, { useEffect, useState } from "react";
import { data } from "../data";

function Result({ colors, colors2 }) {
    const groups = Array.from({ length: colors.length / 2 }, (_, i) => {
        const c1 = colors[i * 2]?.color;
        const c2 = colors[i * 2 + 1]?.color;
        return `${c1}_${c2}`;
    });
    const [group1, group2, group3, group4] = groups;

    const [extras, setExtras] = useState([]);

    useEffect(() => {
        const places = ["first", "second", "third", "fourth"];

        const groupColors = (arr) =>
            Array.from({ length: arr.length / 2 }, (_, i) => [
                arr[i * 2]?.color,
                arr[i * 2 + 1]?.color,
            ]);

        const g1 = groupColors(colors);
        const g2 = groupColors(colors2);

        const results = [];

        for (let i = 0; i < g1.length; i++) {
            const groupA = g1[i];
            const groupB = g2[i];

            const matches = groupA.filter((x) => groupB.includes(x));

            if (matches.length > 0) {
                results.push({
                    color: matches,
                    place: places[i],
                });
            } else {
                results.push({
                    color: [],
                    place: places[i],
                });
            }
        }

        setExtras(results);
    }, [colors, colors2]);

    return (
        <div className="mt-15 px-50">
            {[group1, group2, group3, group4].map((g, i) => (
                <p
                    key={i}
                    className="border-2 shadow-lg mt-10 rounded-xl bg-[rgba(229,229,199,0.35)]
                       leading-10 tracking-widest px-10 py-6 font-medium text-xl"
                    dir="rtl"
                >
                    {/* متن اصلی از data */}
                    {data[["first", "second", "third", "fourth"][i]][g]}

                    {/* نمایش متن extra ها */}
                    {extras[i]?.color?.map((c, idx) => (
                        <div key={idx} className="mt-2 text-blue-900">
                            {data[extras[i].place]?.[c]}
                        </div>
                    ))}
                </p>
            ))}
        </div>
    );
}

export default Result;
