import { UserButton } from "@clerk/nextjs";

const HomePage = (
) => {
    return (
        <div>
            <div>
                <UserButton afterSignOutUrl="/" />
                <p className="font-funky text-2xl text-jade">3 boxes</p>
            </div>
        </div>
    );
}

export default HomePage;