import { list } from "postcss"


export const CardHome = ({name, image, url, filmes, TVShows} : {
    name: string,
    image: string,
    url: string,
    filmes: any,
    TVShows: any,
}) => {

    const style = 
    {
        card: " flex flex-col items-center w-80 shadow-lg shadow-white rounded-xl m-12 border border-white p-4 justify-evenly text-center ",
        title: "font-bold text-[24px] ",
        image: " rounded-xl m-2 ",
        list: " m-4 ",
    }

    return (
        <>
            <div className={style.card}>
                <h1 className={style.title}>{name}</h1>
                <a href={url}><img className={style.image} src={image} alt="Foto do Personagem" /></a>
                <div className={ filmes[0] != null ? style.list : ""}>
                    <h3 className={style.title}>{ filmes[0] != null ? "Filmes" : null}</h3>
                    <ul className="list-disc">
                        {filmes.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                            })}
                    </ul>
                </div>
                <div className={ TVShows[0] != null ? style.list : ""}>
                    <h3 className={style.title}>{ TVShows[0] != null ? "TvShow" : null}</h3>
                    <ul className="list-disc">
                        {TVShows.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                            })}
                    </ul>
                </div>
            </div>
        </>
    )
}
