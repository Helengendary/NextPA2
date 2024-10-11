"use client"
import { Dancing_Script } from 'next/font/google'
 
const londris = Dancing_Script({
  weight: '700',
  subsets: ['latin'],
})

import {CardHome} from '@/components/cardHome'
import { Suspense, useEffect, useState } from "react";

interface IData {
    name: string,
    imageUrl: string,
    id: string,
    sourceUrl: string,
    films: any,
    tvShows: any,
}
const  Principal = () => {
    
    const [characters, setcharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
        const res = await fetch("https://api.disneyapi.dev/character");
        const data = await res.json();
        setcharacters(data.data);
        }
    
        load();

    }, [])

    const style = {
        titulo: " text-center m-2 text-[50px] mt-24 "
    }

    return(

        <>
            <h1 className={style.titulo + londris.className}>API DA DISNEY</h1>
            <div className="flex flex-wrap justify-center text-branco">
                <Suspense fallback={<div>Loadding...</div>}>
                    {characters.map((item) => {
                        return (
                            <CardHome name={item.name} url={item.sourceUrl} image={item.imageUrl} filmes={item.films} key={item.id} TVShows={item.tvShows}/>
                        )
                    })}
                </Suspense>
            </div>
        </>
    )
    
}

export default Principal