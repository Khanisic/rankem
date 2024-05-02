import Link from "next/link";

const Join = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="min-h-screen h-full w-full flex justify-center items-center bg-dark">
            <Link href="/">
                <div className="bg-peach absolute top-5 left-5 px-10 py-2 rounded-lg cursor-pointer">
                    <p className="text-darkest font-funky text-md">Home</p>
                </div>
            </Link>
            <main className="bg-darkest">
                {children}
            </main>
        </div>
    );
}

export default Join;