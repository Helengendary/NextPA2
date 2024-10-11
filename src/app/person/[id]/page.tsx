import { symlink } from "fs";
import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    data:{name: string,
    imageUrl: string,
    _id: string,
    sourceUrl: string,
    films: any,
    tvShows: any,}
}

const Person = async ({params: {id}} : IPerso) => {
    const res = await fetch(`https://api.disneyapi.dev/character/${id}`);
    const data : IData = await res.json();
    
    const style = {
        painel: " bg-[url(https://wallpapers.com/images/featured/disney-background-sv4u2gi8f78wbude.jpg)] flex items-center justify-center pt-36 sm:pt-24",
        divPainel: "  justify-between bg-azul px-[5%] py-[2%] rounded-3xl m-4 xl:m-0",
        divisinha: " w-[250px] sm:w-[600px] text-[20px] flex flex-col justify-evenly",
        titulo: " text-[50px] sm:text-[70px] font-bold text-center",
        conteudo: " flex flex-wrap justify-center xl:justify-between ",
        imagi: " flex  w-[250px] sm:w-[600px] h-[400px] h-full items-center justify-center",
        info: " flex flex-col",
        infotitulo: " font-bold text-center m-2 ",
    }

    return (
        <div className={style.painel}>
            <div className={style.divPainel}>
                <h1 className={style.titulo}>{data.data._id} - {data.data.name}</h1>
                <div className={style.conteudo}>
                    <div className={style.imagi}>
                        <img className=" h-[300px] w-auto" src={data.data.imageUrl} alt={data.data.name} width={300} height={300} />
                    </div>
                    <div className={style.divisinha}>
                        <div className={style.info}>
                            <p className={style.infotitulo}>NOME </p>
                            <p className="mb-4">{data.data.name}</p>
                        </div>
                        <div className={data.data.films[0] != null ? style.info : "hidden"}>
                            <hr />
                            <p className={style.infotitulo}>FILMES </p>
                            <ul className="list-none sm:list-disc mb-4">
                                {data.data.films.map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={data.data.tvShows[0] != null ? style.info : "hidden"}>
                            <hr />
                            <p className={style.infotitulo}>TV SHOWS</p>
                            <ul className="list-none sm:list-disc mb-4 ">
                                {data.data.tvShows.map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                    })}
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person;