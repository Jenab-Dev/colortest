import { Reorder } from "framer-motion";
import { useState } from "react";

function ReorderGroupe({ setColors, colors2 }) {
    const [items, setItems] = useState([
        { id: 1, color: "#ff0000" },
        { id: 2, color: "#000000" },
        { id: 3, color: "#0055ff" },
        { id: 4, color: "#6B39BD" },
        { id: 5, color: "#ffcf00" },
        { id: 6, color: "#a8adb5" },
        { id: 7, color: "#713000" },
        { id: 8, color: "#00ff55" },
    ]);

    const handleSubmit = () => {
        const colorName = (hex) => {
            switch (hex.toLowerCase()) {
                case "#ff0000":
                    return "red";

                case "#000000":
                    return "black";

                case "#0055ff":
                    return "blue";

                case "#6B39BD":
                    return "purple";

                case "#ffcf00":
                    return "yellow";

                case "#a8adb5":
                    return "gray";

                case "#713000":
                    return "brown";

                case "#00ff55":
                    return "green";

                default:
                    return "unknown";
            }
        };
        const result = items.map((item, index) => ({
            color: colorName(item.color),
        }));
        setColors(result);
    };

    return (
        <>
            <Reorder.Group
                className="flex gap-4 mx-auto w-fit mt-7"
                values={items}
                onReorder={setItems}
                axis="x"
            >
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <p className="text-xl select-none">{index + 1}</p>

                        <Reorder.Item
                            value={item}
                            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                            transition={{ type: "spring" }}
                        >
                            <div
                                className="size-40 mt-3 rounded-lg"
                                style={{ backgroundColor: item.color }}
                            />
                        </Reorder.Item>
                    </div>
                ))}
            </Reorder.Group>

            <div className="w-full flex justify-center mt-10">
                {!colors2 && (
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="px-6 py-3 bg-black text-white rounded-xl text-lg cursor-pointer"
                    >
                        <div className="top">Submit</div>
                        <div className="bottom shadow-lg"></div>
                    </button>
                )}
            </div>
        </>
    );
}

export default ReorderGroupe;
