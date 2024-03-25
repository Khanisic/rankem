const CreateLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-dark">
            <main className="bg-darkest">
                {children}
            </main>
        </div>
    );
}

export default CreateLayout;