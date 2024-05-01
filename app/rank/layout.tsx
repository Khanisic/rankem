const RankLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-dark px-5 md:px-10">
            <main className="bg-darkest py-20 px-4 md:p-16 rounded-xl flex flex-wrap gap-8 items-center justify-center w-full  md:w-1/2 xl:w-1/3">
                {children}
            </main>
        </div>
    );
}

export default RankLayout;