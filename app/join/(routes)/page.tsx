
"use client";import React, { useState, ChangeEvent, useRef } from 'react';

export const config = { runtime: 'client' };

export default function JoinCode() {
    const [code, setCode] = useState<string[]>(Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleInputChange = (index: number, value: string) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        
         if (value && index < code.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center bg-dark px-5 md:px-10">
            <main className="bg-darkest py-20 px-4 md:p-16 rounded-xl flex flex-col items-center justify-center w-full">
                
                <div className="mb-8">
                    <p className="text-white font-funky">Enter the 6 digit code sent by the host</p>
                </div>
    
                <div className="flex space-x-2 mb-8">
                    {code.map((digit, index) => (
                        <div key={index} className="relative w-16 h-16">
                            <input
                                className="w-full h-full bg-jade rounded text-black text-center text-xl input-underline"
                                maxLength={1}
                                type="text"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                value={digit}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, e.target.value)}
                                ref={el => inputRefs.current[index] = el} // Set the ref
                            />
                        </div>
                    ))}
                </div>

                <button className="text-black bg-indigo font-funky hover:bg-indigo px-6 py-2 rounded-full shadow-lg">
                    Join now
                </button>
    
            </main>
        </div>
    );
}
