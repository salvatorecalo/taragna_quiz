"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function StartQuiz() {
    const [imgArray, setImgArray] = useState<string[]>([])

    function refreshQuiz(){
        window.location.reload()
    }
    useEffect(() => {
        function createRandomQuiz() {
            const imgArray: string[] = []
            for (let i = 0; i < 10; i++) {
                let randomIndex: number = Math.floor(Math.random() * (38 - 1) + 1)
                const item: string = `/${randomIndex}.png`
                while (imgArray.includes(item)){
                    randomIndex = Math.floor(Math.random() * (38 - 1) + 1)
                }
                imgArray.push(`/${randomIndex}.png`)
            }
            setImgArray(imgArray)
        }

        createRandomQuiz()
    }, [])
    return (
        <div className="bg-base-200 min-h-screen p-4 md:p-8">
            <div className="flex flex-col items-center text-center w-full">
                
                <div className="max-w-md mb-8">
                    <h1 className="text-3xl font-bold">Quiz taragna (generato automaticamente)</h1>
                    <p className="py-6">
                        Il quiz è generato automaticamente partendo dai quiz presenti nelle cartelle tipologia sul sito
                    </p>
                </div>

                <div className="w-full max-w-4xl flex flex-col items-center">
                    {
                        imgArray.map((img, index) => {
                            return (
                                <article key={index} className="mb-12 w-full">
                                    <Image 
                                        src={img} 
                                        alt={`Quiz ${index + 1}`}   
                                        width={1000} 
                                        height={600} 
                                        className="w-full h-auto rounded-xl shadow-lg bg-base-100" 
                                    />
                                </article>
                            )
                        })
                    }
                </div>
                <button className="btn btn-primary" onClick={refreshQuiz}>Avvia nuovo quiz</button>
                
            </div>
        </div>
    )
}