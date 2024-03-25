import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-dark px-5 md:px-10">
            <main className="bg-darkest py-20 px-4 md:p-16 rounded-xl flex flex-wrap gap-8 items-center justify-center w-full">
      <UserButton afterSignOutUrl="/" />
                
                <div className="flex flex-col items-center w-full">
                  
                    <div className="flex flex-col justify-center gap-4 mb-4">
                        <button className="text-black bg-lime hover:bg-lime-300 font-funky py-2 px-16 border border-lime-700 rounded-full shadow-sm">
                            Create now
                        </button>
                    
                        <button className="text-black bg-indigo hover:bg-indigo-300 font-funky py-2 px-16 border border-indigo-700 rounded-full shadow-sm">
                            Join one
                        </button>
                    
                 

                        <button className="text-black bg-jade hover:bg-jade-300 font-funky py-2 px-16 border border-jade-700 rounded-full shadow-sm">
                            My Games
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
