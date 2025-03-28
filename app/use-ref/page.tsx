"use client";
import { useRef, useState } from "react";

export default function UseRef() {
    let varible = 0;
    const [state, setState] = useState(0);
    const ref = useRef(0);

    const showValues = () => {
        alert(`
            Varible: ${varible},
            State: ${state},
            Ref: ${ref.current}
        `);
    };

    const inputRef = useRef(null as HTMLInputElement | null);
    const handleClick = () => {
        console.log(inputRef.current);
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = "#000";
        }
    };

    return (
        <div className="m-auto w-full flex justify-center flex-col my-10 gap-4 pl-5 max-w-[650px]">
            <h2 className="font-semibold text-xl">Conhecendo o useRef</h2>
            <hr className="h-1 w-full" />
            <div className="flex flex-col gap-2 text-lg">
                <p>Variável: {varible}</p>
                <p>State: {state}</p>
                <p>Ref: {ref.current}</p>
            </div>
            <div className="flex gap-2">
                <button className="buttonStyles" onClick={() => varible++}>
                    Aumentar Variavel
                </button>
                <button
                    className="buttonStyles"
                    onClick={() => setState(state + 1)}
                >
                    Aumentar State
                </button>
                <button className="buttonStyles" onClick={() => ref.current++}>
                    Aumentar Ref
                </button>
            </div>
            <hr className="h-1 w-full" />
            <div>
                <button className="buttonStyles !px-24" onClick={showValues}>
                    Exibir Valores
                </button>
            </div>
            <div>
                <input type="text" ref={inputRef} />
                <button className="buttonStyles" onClick={handleClick}>
                    Focar no Input
                </button>
            </div>
        </div>
    );
}
