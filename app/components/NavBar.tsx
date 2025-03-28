import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-center items-center gap-4 bg-zinc-900 h-10">
            <Link href="/" className="text-white">
                Home
            </Link>
            <Link href="/game" className="text-white">
                Game
            </Link>
            <Link href="/feed" className="text-white">
                Feed
            </Link>
            <Link href="/use-ref" className="text-white">
                useRef
            </Link>
            <Link href="/useEffect" className="text-white">
                useEffect
            </Link>
        </nav>
    );
}
