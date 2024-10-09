// "Server-side" é tudo o que acontece no servidor antes de a informação chegar ao seu navegador. É onde a mágica acontece para que você veja as páginas que acessa.

import { Suspense } from "react";

import Link from "next/link";

type IData = {
    data: {
        name: string;
        id: string;
    }[]
}

const ServerSide = async () => {
    const res = await fetch("https://api.disneyapi.dev/character")
    const data : IData = await res.json()
    console.log(data);

    return (
        <div className="flex flex-col mt-10 items-center w-full h-screen">
            <h1 className='font-bold text-[3em] text-pink-900'>Server Side Rendering</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {data.data.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <Link href={`/person/${item.id}`}>ABRIR</Link>
                        </div>
                    )
                })}
            </Suspense>
        </div>
    )
}

export default ServerSide;