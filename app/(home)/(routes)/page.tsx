import { UserButton } from "@clerk/nextjs";

const HomePage = (
) => {
    return (
        <div>
            <div>
                <UserButton afterSignOutUrl="/" />
                <p className="font-funky text-2xl text-jade">Need to put the 3 options here - create, join, my games</p>
            </div>
        </div>
    );
}

export default HomePage;