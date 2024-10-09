import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export const Menu = ({op1} : {
    op1: string;
}) => {

    const style = 
    {
        bttn:"px-2 py-1 min-w-3.5 cursor-pointer",
        nav: "bg-branco gap-3 font-robFont text-medium flex flex-row justify-around align-center p-3 text-preto"
    }

    return (
    <nav className={style.nav}>
        <Link href={ROUTES.home} className={style.bttn}>{op1}</Link>
    </nav>
    )
}