import { useEffect, useState } from "react";
import ReorderGroupe from "../components/ReorderGroupe";
import Result from "../components/Result";
import { color } from "framer-motion";

function HomePage() {
    const [colors, setColors] = useState(false);
    const [colors2, setColors2] = useState(false);
    useEffect(() => {
        console.log(colors);
    }, [colors]);
    return (
        <div className="min-h-screen w-full bg-[#E9E9F4] text-[#0A0A0A] py-10 px-20">
            <div className="w-full mx-auto flex justify-center">
                <h1 className="relative inline-block text-6xl font-semibold">
                    <span className="relative z-10">Personality Test.</span>
                    <span className="absolute left-0 bottom-1 h-3 w-full bg-red-500"></span>
                </h1>
            </div>

            <p dir="rtl" className="text-center mt-9 text-2xl font-medium">
                {colors
                    ? "لطفا بار دیگر رنگ های نمایش داده شده را از بیشترین میزان علاقه تا کمترین مرتب کنید"
                    : " لطفاً رنگ‌های نمایش‌ داده‌ شده را از بیشترین میزان علاقه تا کمترین مرتب کنید."}
            </p>
            {!colors && <ReorderGroupe setColors={setColors} />}
            {colors && (
                <ReorderGroupe setColors={setColors2} colors2={colors2} />
            )}
            {colors && colors2 && <Result colors={colors} colors2={colors2} />}
        </div>
    );
}

export default HomePage;
