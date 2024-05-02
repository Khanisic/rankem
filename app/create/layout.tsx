const CreateLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="min-h-screen h-full w-full flex justify-center items-center bg-dark">
            <main className="bg-darkest ">
                {children}
            </main>
        </div>
    );
}

export default CreateLayout;