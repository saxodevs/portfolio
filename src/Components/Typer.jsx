import { useEffect, useState } from "react";

const texts = ["Mobile App Developer", "Web App Developer", "Website Developer", "UI/UX Designer"];

export const MyTyper = () => {

    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [display, setDisplay] = useState("");


    useEffect(() => {
        if (charIndex < texts[textIndex].length) {
            const timeOut = setTimeout(() => {
                setDisplay((prev) => prev + texts[textIndex][charIndex]);
                setCharIndex(charIndex + 1);

            }, 100);
            return () => clearTimeout(timeOut);
        } else {
            setTimeout(() => {
                setDisplay('');
                setCharIndex(0);
                setTextIndex((textIndex + 1) % texts.length);
            }, 1500);
        }
    }, [charIndex, textIndex]);

    return <p className="text-primary font-bold underline underline-offset-4 " style={{ letterSpacing: 1 }}>{display}<span className="cursor">|</span></p>




}