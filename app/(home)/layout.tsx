import { UserButton } from "@clerk/nextjs";





const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <main className="md:pl-56 pt-[80px] h-full">
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;