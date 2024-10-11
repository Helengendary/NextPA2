// "Server-side" é tudo o que acontece no servidor antes de a informação chegar ao seu navegador. É onde a mágica acontece para que você veja as páginas que acessa.

import { Suspense } from "react";

import { Dancing_Script } from 'next/font/google'
 
const londris = Dancing_Script({
  weight: '700',
  subsets: ['latin'],
})

import Link from "next/link";
import { link } from "fs";

type IData = {
    data: {
        name: string;
        imageUrl: string;
        _id: string;
    }[]
}

const ServerSide = async () => {
    const res = await fetch("https://api.disneyapi.dev/character")
    const data : IData = await res.json()

    const style = {
        titulo: " text-center m-4 text-[50px] mt-12 ",
        link: " hover:scale-110 border-4 border-branco m-4 p-10 flex flex-col justify-evenly text-center items-center w-72 hover:shadow-lg hover:shadow-white rounded-xl sm:w-96 ",
        grid: " flex flex-wrap justify-center ",
        nome: " text-[30px] ",
    }

    return (
        <div className="flex flex-col mt-10 items-center w-full h-screen">
            <h1 className={style.titulo + londris.className}>Personagens</h1>
            <div className={style.grid}>
                <Suspense fallback={<div>Loading...</div>}>
                    {data.data.map((item) => {
                        return(
                            <Link className={style.link} href={`/person/${item._id}`}><div key={item._id}>
                                <h1 className={style.nome + londris.className}>{item.name}</h1>
                            </div></Link>
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}

export default ServerSide;