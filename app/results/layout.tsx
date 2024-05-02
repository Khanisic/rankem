import Link from "next/link";

const ResultsLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="min-h-screen h-full w-full flex justify-center items-center bg-peac bg-dark">
            <Link href="/">
                <div className="border-dark border-2 absolute top-5 left-5 px-10 py-2 rounded-lg cursor-pointer">
                    <p className="text-darkest font-funky text-md">Home</p>
                </div>
            </Link>
            <main className="bg-darkest py-20 px-4 md:p-16 rounded-xl flex flex-wrap gap-8 items-center justify-center w-full  sm:w-1/2 xl:w-1/3">                {children}
            </main>
        </div>
    );
}

export default ResultsLayout;