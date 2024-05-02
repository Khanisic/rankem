import Link from "next/link";

const CreateLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="min-h-screen bg-jad h-full w-full flex justify-center items-center">
            <Link href="/">
                <div className="border-dark border-2 absolute top-5 left-5 px-10 py-2 rounded-lg cursor-pointer">
                    <p className="text-darkest font-funky text-md">Home</p>
                </div>
            </Link>
            <main className=" ">
                {children}
            </main>
        </div>
    );
}

export default CreateLayout;