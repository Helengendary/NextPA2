"use client"

import { useEffect, useState, Suspense } from "react";
import { CardHome } from "@/components/cardHome";

import { api } from "@/constants/api";

import { Dancing_Script } from 'next/font/google'
 
const londris = Dancing_Script({
  weight: '700',
  subsets: ['latin'],
})

interface IData {
    name: string,
    imageUrl: string,
    id: string,
    sourceUrl: string,
    films: any,
    tvShows: any,
}

const axiosPage = () => {
    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possivel buscar os dados");

    const [page, setpage] = useState<string>("")
    const [name, setname] = useState("")
    const [filme, setfilme] = useState("")

    useEffect(() => {
        api.get(`/character?page=${page}&name=${name}&films=${filme}`).then((res) => {
            setErro(false);
            setData(res.data.data);            
        }).catch((error) =>{
            if(error.response.status === 404){
                setErrorMessage("Página não encontrada! ");
            }
            if(error.response.status === 400){
                setErrorMessage("Inválido!");
            }

            setErro(true);
        })
    }, [page, name, filme])

    const style = {
        in: " text-branco m-4 p-2 bg-preto border-b-4 border-white focus:border-azul outline-none ",
        titulo: " text-center m-2 text-[50px] ",
    }

    return(
        <div>
            <h1 className={style.titulo + londris.className}>Pesquisa api</h1>
            
            <div className="flex flex-col mx-36 my-8">
                <input className={style.in} type="number" value={page} placeholder="Página 1/149" onChange={(e) => setpage(e.target.value)} />
                <input className={style.in} type="text" value={name} placeholder="Nome do personagem" onChange={(e) => setname(e.target.value)} />
                <input className={style.in} type="text" value={filme} placeholder="Filme de participação" onChange={(e) => setfilme(e.target.value)} />
            </div>
            {erro && <h5>{errorMessage}</h5>}
            
            <div className="flex flex-wrap justify-center">
                <Suspense fallback={<div>Loadding...</div>}>
                    {data.map((item, index) => {return (<CardHome name={item.name} url={item.sourceUrl} image={item.imageUrl} filmes={item.films} key={index} TVShows={item.tvShows}/>)})} 
                </Suspense>
            </div>
        </div>
    )
}

export default axiosPage;