import exp from "constants";
import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    name: string,
    imageUrl: string,
    id: string,
    sourceUrl: string,
    films: any,
    tvShows: any,
}

interface IDataStaticIndex {
    data: IData[]
}

const Person = async ({params: {id}} : IPerso) => {
    const res = await fetch(`https://api.disneyapi.dev/character/${id}`);
    const data : IData = await res.json();
    
    return (
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <Image className="h-auto w-[500px]" src={data.imageUrl} alt="sla" width={100} height={100} />
        </div>
    )
}

export default Person;

export async function generateStaticParams() {
    const res = await fetch(`https://api.disneyapi.dev/character`);
    const data : IDataStaticIndex = await res.json();

    return data.data.map((item) => item.id.toString());
}