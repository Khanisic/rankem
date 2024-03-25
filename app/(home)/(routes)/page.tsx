import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-8 items-center w-full">
            <UserButton afterSignOutUrl="/sign-in" />
            <div className="flex flex-col items-stretch justify-center gap-4 mb-4">
                <Link href="/create" >
                    <div className="text-black w-full text-center outline-none border-none bg-lime hover:bg-lime-300 font-funky py-2 px-16 border border-lime-700 rounded-full shadow-sm">
                        Create now
                    </div>
                </Link>

                <Link href="/join" >
                    <div className="text-black w-full text-center outline-none border-none bg-indigo hover:bg-indigo-300 font-funky py-2 px-16 border border-indigo-700 rounded-full shadow-sm">
                        Join one
                    </div>
                </Link>

                <Link href="/games" >
                    <div className="text-black text-center outline-none border-none bg-jade hover:bg-jade-300 font-funky py-2 px-16 border border-jade-700 rounded-full shadow-sm">
                        My Games
                    </div>
                </Link>

            </div>
        </div>

    );
}

export default HomePage;
