const RankLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-dark">
            <main className="bg-darkest p-10 md:p-20 rounded-lg">
                {children}
            </main>
        </div>
    );
}

export default RankLayout;