import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderButton({ route, name }) {
    const router = useRouter();
    const isRoute = router.pathname === route;
    return (
        <Link href={route}>
            <span className={`${ isRoute ? ' text-cyan-500 font-medium' : ''} cursor-pointer`}>
            { name }
            <div className={`w-full h-[1px] ${isRoute ? 'bg-cyan-500' : 'bg-transparent'}`} />
            </span>
        </Link>
    )
}