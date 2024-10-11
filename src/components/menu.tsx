import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export const Menu = ({op1, op2, op3} : {
    op1: string;
    op2: string;
    op3: string;
}) => {

    const style = 
    {
        bttn:"px-4 py-2 min-w-3.5 cursor-pointer bg-azulescuro text-branco font-bold rounded-xl ",
        nav: " gap-3 font-robFont text-medium flex flex-wrap justify-around align-center p-3 text-preto bg-[url(https://cdn.pixabay.com/animation/2023/07/13/14/22/14-22-36-485_512.gif)] fixed w-full top-0 z-[9999] "
    }

    return (
    <nav className={style.nav}>
        <Link href={ROUTES.home} className={style.bttn}>{op1}</Link>
        <Link href={ROUTES.search} className={style.bttn}>{op2}</Link>
        <Link href={ROUTES.server} className={style.bttn}>{op3}</Link>
    </nav>
    )
}