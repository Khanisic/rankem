
"use client";

import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, useRef } from 'react';

export default function JoinCode() {
    const [code, setCode] = useState<string[]>(Array(6).fill(''));
    const [miniCode, setMiniCode] = useState("")
    const router = useRouter()
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const [text, setText] = useState("Enter the 6 digit code sent by the host")

    const handleInputChange = (index: number, value: string) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < code.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const joinNow = (screen) => {
        if (screen == "mobile") {
            setText("Loading...")
            router.push(`/rank/${miniCode}`)
        } else {
            router.push(`/rank/${code[0] + code[1] + code[2] + code[3] + code[4] + code[5]}`)
        }
    }

    return (
        <div className="h-screen w-full flex justify-center items-center bg-dark px-5 md:px-10">
            <main className="bg-darkest py-20 px-4 md:p-16 rounded-xl flex flex-col items-center justify-center w-full">

                <div className="mb-8">
                    <p className="text-white font-funky">{text}</p>
                </div>

                <div className='md:hidden flex my-3'>
                    <input onChange={(e) => { setMiniCode(e.target.value) }} type="text" name="" className='px-2 text-2xl py-4 bg-lime rounded-lg text-center w-[150px] text-dark font-funky outline-none border-none' id="" />
                </div>

                <div className="space-x-2 mb-8 md:flex hidden">
                    {code.map((digit, index) => (
                        <div key={index} className="relative w-16 h-16 flex flex-wrap">
                            <input
                                className="w-full h-full font-chill border-2 border-dashed  bg-jade rounded text-black text-center text-xl outline-none input-underline"
                                maxLength={1}
                                type="text"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                value={digit}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, e.target.value)}
                                ref={el => { inputRefs.current[index] = el }}  // Set the ref
                            />
                        </div>
                    ))}
                </div>

                <div className='md:hidden flex my-3'>
                    <button onClick={() => { joinNow("mobile") }} className="text-black bg-indigo font-funky border-none outline-none hover:bg-indigo px-6 py-2 rounded-full shadow-lg">
                        Join now
                    </button>
                </div>

                <div className='md:flex hidden my-3'>
                    <button onClick={() => { joinNow("desktop") }} className="text-black bg-indigo font-funky border-none outline-none hover:bg-indigo px-6 py-2 rounded-full shadow-lg">
                        Join now
                    </button>
                </div>
            </main>
        </div>
    );
}
